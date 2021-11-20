const router = require("express").Router();
const Workout = require("../models/workout.js");

// find workouts
router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbFit => {
      res.json(dbFit);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// update existing workout by id
router.put("/api/workout/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } }
  )
    .then(dbFit => {
      res.json(dbFit);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// creates a new workout
router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbFit => {
      res.json(dbFit);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// deletes a workout by id
router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
