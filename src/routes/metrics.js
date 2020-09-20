import { Router } from "express";
import mongoose from "mongoose";

const Metric = mongoose.model("Metric");
const router = Router();

/*
@fvillarrealcespedes:
GET all Metrics from the DB.
*/
router.get("/", async (req, res, next) => {
  try {
    const metrics = await Metric.find();
    res.json(metrics);
  } catch (error) {
    next(error);
  }
});

/*
@fvillarrealcespedes:
GET a specific Metric from the DB by the _id property.
*/
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const metric = await Metric.findById({ _id: id }, req.body);
    res.json(metric);
  } catch (error) {
    next(error);
  }
});

/*
@fvillarrealcespedes:
POST a new Metric in the DB.
*/
router.post("/", async (req, res, next) => {
  try {
    const metric = new Metric(req.body);
    await metric.save();
    res.json(metric);
  } catch (error) {
    next(error);
  }
});

/*
@fvillarrealcespedes:
PUT a Metric, first finds it by the _id property in the DB, then updates and stores again.
*/
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const metric = await Metric.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Updated successfully");
  } catch (error) {
    next(error);
  }
});

/*
@fvillarrealcespedes:
DELETE a Metric from the DB by the _id property.
*/
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Metric.deleteOne({ _id: id });
    res.send("Deleted successfully");
  } catch (error) {
    next(error);
  }
});

/*
@fvillarrealcespedes:
Exports the five routes defined.
*/
export default router;
