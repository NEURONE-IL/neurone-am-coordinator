import { Router } from "express";
import monitor from "./monitoring";
import metric from "./metrics"
const router = Router();

//Prefix
const root = "/";

//List routes
router.use(`${root}`, monitor);
router.use(`/metrics`,metric)

//Validation
router.use(function(err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }
  return next(err);
});

export default router;
