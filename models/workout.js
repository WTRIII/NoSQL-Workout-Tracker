const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const workout = new Workout ([
//     {
//       day: new Date(new Date().setDate(new Date().getDate() - 9)),
//       exercises: [
//         {
//           type: 'resistance',
//           name: 'Bicep Curl',
//           duration: 20,
//           weight: 100,
//           reps: 10,
//           sets: 4,
//         },
//       ],
//     }])
  
    const swollSchema = new Schema({
      day: {
        type: Date,
        default: Date.now
      },
        type:{
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
      });
      
      const Workout = mongoose.model("Workout", swollSchema);
      
      module.exports = Workout;