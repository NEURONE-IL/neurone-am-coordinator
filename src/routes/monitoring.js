import { Router } from "express";
import axios from 'axios'
import pub from './../pushpinClient'
import dotenv from 'dotenv';

dotenv.config();

const monitor = Router();

// Pushpin url env
const pushpin = process.env.PUSHPIN_URL


// Declaration of global variables of the sessión
let sesion = null; // This variable contains the setInterval
let metrics = []; // This variable stores the metrics selected by the observer
let interval = 0; // Update interval in seconds
let principal = ""; // Name of the principal metric
let option = ""; // Option for the limit number (Mayor/Menor)
let limit = 0; // Limit number for the color change of the participant's box
let initTime = null; // Storage the init Time of the session

// Function executed periodically through setInterval for the metrics actualization
const updateMetrics = () => {
  metrics.map(metric => {
    axios.get(`${process.env.CONECTOR_URL}/${metric}`).then(response => {
      let values = response.data;
      let object = values.map(r => {
        let results = {};
        results[metric] = r["value"];
        results[metric] = Math.round(results[metric] * 100) / 100;
        return { username: r.username, results };
      });
      pub.publishHttpStream(
        "session",
        `event:${metric}\ndata: ${JSON.stringify(object)}\n\n`
      );
    });
  });
};

monitor.get("/ifsession", (req, res, next) => {
  if (sesion == null) {
    res.status(200).json({ status: false });
  } else {
    res.status(200).json({
      metrics: metrics,
      principal: principal,
      status: true,
      limit: limit,
      option: option
    });
  }
});

monitor.post("/configure", (req, res, next) => {
  let local_metrics = req.body.metrics;
  let local_interval = req.body.interval;
  let local_option = req.body.option;
  let local_limit = req.body.limit;

  principal = req.body.principal;
  console.log("local_metrics", local_metrics);
  console.log("local_interval", local_interval);
  console.log("local_option", local_option);
  console.log("local_limit", local_limit);

  if (metrics.length === 0) {
    metrics = [...local_metrics];
  }
  interval = local_interval;
  option=local_option;
  limit=local_limit;
  res.status(200).json({ metrics });
});

monitor.get("/init", (req, res, next) => {
  res.set("Content-Type", "text/event-stream");
  res.set("Grip-hold", "stream");
  res.set("Grip-channel", "session");
  res.end("Stream init");
  if (sesion == null) {
    sesion = setInterval(() => updateMetrics(), interval);
    initTime = Date.now();
  }
  pub.publishHttpStream("session", `event:init\ndata:init\n\n`);
});

monitor.get("/inittime", (req, res, next) => {
  if (initTime === null) {
    initTime = Date.now();
    res.status(200).send({ initTime });
  } else {
    res.status(200).send({ initTime });
  }
});

monitor.get("/initstage/:id", (req, res, next) => {
  let username = req.params.id;
  console.log(username);
  axios
    .get(`${process.env.CONECTOR_URL}/init/${username}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

monitor.get("/end", (req, res, next) => {
  var json = `{"items": [
          {
            "channel": "session",
            "formats": {
              "http-stream": {
                "action":"close"
              }
            }
          }
        ]}`;
  var parsed = JSON.parse(json);
  axios.post(pushpin + "/publish", parsed);
  res.sendStatus(200);
});

// Service to finish the sessión for all the connected clients
monitor.get("/endsession", (req, res, next) => {
  clearInterval(sesion);
  var json = `{"items": [
          {
            "channel": "session",
            "formats": {
              "http-stream": {
                "action":"close"
              }
            }
          }
        ]}`;
  var parsed = JSON.parse(json);
  axios.post(pushpin + "/publish", parsed);

  metrics = [];
  interval = 0;
  option="";
  limit=0;
  sesion = null;
  res.sendStatus(200);
});

//Service to get metrics value for a specific participant
monitor.get("/detail/:id", (req, res, next) => {
  let username = req.params.id;
  let metrics = req.query.metrics;
  let ti = req.query.ti;
  let tf = req.query.tf;

  let query_string_metrics = "";

  if (Array.isArray(metrics)) {
    metrics.map(metric => {
      query_string_metrics = query_string_metrics + `metrics=${metric}&`;
    });
  } else {
    query_string_metrics = `metrics=${metrics}`;
  }

  let url = `multiple/${username}?${query_string_metrics}`;

  url = ti ? url + `&ti=${ti}` : url;
  url = tf ? url + `&tf=${tf}` : url;
  axios
    .get(`${process.env.CONECTOR_URL}/${url}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

export default monitor;
