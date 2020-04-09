# Neurone AM Coordinator

Neurone-am-coordinator is part of the Neurone-AM (active monitoring) solution, compose of [neurone-am-connector](https://github.com/NEURONE-IL/neurone-am-connector.git) and [neurone-am-visualization](https://github.com/NEURONE-IL/neurone-am-visualization.git) also. All three components interact with each other to deliver real-time updated metrics over a persistent connection and provides tools for monitoring all users of [NEURONE](https://github.com/NEURONE-IL/neurone) search engine. To deploy all components together go to [neurone-am-deployment](https://github.com/NEURONE-IL/neurone-am-deployment.git) repository.


Coordinator component is responsible of deliver the metrics in real time through a persistent conextion to the clients or consumers of its. This handle the interaction between neruone-am-connector API and any client as neurone-am-visualization client prototype. Also, support publish-subscribe pattern.


This component is composed of two elements, a REST API and a [Pushpin](https://pushpin.org/) instance, an inverted proxy. The first provide differents services oriented to publish-subscriber, such as subscription process and other validations. On the other hand, Pushpin redirect all the request and deliver the selected metrics to the clients.

## REST API Services

Below are listed all the services provides for the API REST of the component:

#### Configuration
Service to store all the parameters of the session while it remains available.
* Endpoint: `Post-> $API_URL/configure`
* Object fields:
    * metrics: String array with all metrics desired for the client.
    * principal: String of the principal metric.
    * interval: Update interval, in seconds, for the metrics actualization process.
    * Option: Option for the limit number. This field is utilized for the visualization component. (see user guide Neurone-visualization).
    * Limit: Number considered as a limit for the principal metric. This field is utilized for the visualization component. (see user guide neurone-am-visualization).
* Example object:
```JSON
{
    "metrics":["totalcover","bmrelevant","precision","score"],
    "principal": "score",
    "interval": 10,
    "option": 1,
    "limit": 3.5
}
```
#### Verify Session

Service for verify if a session is initialized. In that case, return the session stored parameters.

* Endpoint: `Get-> $API_URL/ifsession`
* Return object: 
    * Session initialized and not initielized:
```JSON
{
    "metrics":["totalcover","bmrelevant","precision","score"],
    "principal": "score",
    "interval": 10,
    "option": 1,
    "limit": 3.5,
    "status": true,
}
```
```JSON
{
    "status": false
}
```


#### Init metrics actualization

This services start with the actualization in real time of the selected metrics periodically, considering interval parameter. For that,  a persistent conextion with the client/s is generated. The metrics are send over Server-Sent Event standar.

* Endpoint: `Get->$API_URL/init`

In this point the each set of metrics is send asyncronously for all participants as array of JSON results and capture for the subscribes clients.

#### Detail query by participant

Service to make a specific query for a participant with a set of defined metrics and a range time as a option.

* Ednpoint: Get=> $API_URL/detail/:username?<optional-query-params> 
* Query params: 
    * metrics: Metric desired. This is defined for each metric.
    * ti/tf: Optional params to define a range time in seconds.
* Query example: `/detail/participant1?metrics=totalcover&metric=recall&ti=10&tf=12`
* Result: JSON array with each requested metric.


#### Init time

Service to define the session init timestamp or get it when the session has begun.
* Endpoint: `Get->$API_URL/inittime`
* Response example:
```JSON
{
    "initTime": 1585480330
}
```


#### INIT stage time

Service to get the init stage timestamp of a specific participant. The inis stage is the time when a user enter to the NEURONE search engine.

* Endpoint: `Get-> $API_URL/initstage`
* Response example:
```JSON
{
    "username": "901ASCE110008",
    "inittime": 1.485859108995E12,
    "metric": "inittime"
}
```
#### End conextion

This service is called by a specific consumer o client to end the conextion with the coordinator and stop receiving metrics.

* Endpoint: `Get-> $API_URL/end`
* Response: HTTP Status 200.

#### End session

This services is called to finish the session for all the clients or consumer. That means the parameter stores are clean and the coordinador stop the sending metrics process.

* Endpoint: `Get-> $API_URL/endsession`
* Response: HTTP status 200.

## Install Instructions

#### Development

The instrucction listed below must be following to run the project in development mode:

1. Install npm. Is recomended version 6+.
2. Install Pushpin. For this, refer to the [official documentation](https://pushpin.org/docs/install/). Latest version is recomended.
3. Download or clone the project files.
4. Set up the project enviroment variables (see configuration section below).
5. Run `npm install`
6. To start the project, run `npm run dev`.
7. When chagnes in the code are generated, the project restart automatically.

#### Production

For the deplyomet in production [docker](https://www.docker.com/) is considered. Therefore, this must be installed and then follow the instruction listed below:

1. Download or clone the project code.
2. Go to the project root.
3. Go to the pushpin folder.
3. Edit pushpin configurations files in the pushpin folder (See the configuration section below.)
4. Set up the enviroment variables (See the configuration section below).
5. Run `./runDocker.sh` script to init pushpin docker instance.
6. Return to the project root.
7. Run `./runDocker.sh` scrip to init the API docker instance.
8. In both scripts the executions port can be edited.

#### Code Package

1. Download or clone the code.
2. Go to the root project folder.
3. Run `npm run build` to package the project.
4. Run `npm run serve` to init the API REST.

#### Configuration

* Pushpin: Because the principal task of pushpin is the request redirection to the API REST his url must be definted. For this, change the roues file in the pushpin folder with the API_URL. On the other hand, in the pushpin.conf file there are more complex parameters and it not necessary edit this. See [pushpin configuration](https://pushpin.org/docs/configuration/) for more details.
    * Routes example:
    ```
    * localhost:4001
    ```
* Coordinator API: The coordinator must interact with Neurone-am-connector API as well as the Pushpin proxy. The url of each one must be defined in a .env file in the root folder. Adiotionally, the API port and NODE_ENV can be modified here.
    * .env example.
```env
PORT=4001
NODE_ENV=production
PUSHPIN_URL=http://localhost:5561
CONECTOR_URL=http://localhost:8081
```

## License 

Licensed under the GNU Affero General Public License (Version 3) [LICENSE](LICENSE) ; you may not use this software except in compliance with the License.






