const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const swollSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  // Mitchell debugged the fact that I was missing exercises
  // this threw an error on the server when trying to create a new exercise
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: 'Swollification Type'
    },
    name: {
      type: String,
      trim: true,
      required: "Swollification Name"
    },
    duration: {
      type: Number,
      required: 'Swollification duration'
    },
    weight: {
      type: Number,
      required: "Input amount of iron moved"
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }
  ]
});

const Workout = mongoose.model("Workout", swollSchema);

module.exports = Workout;