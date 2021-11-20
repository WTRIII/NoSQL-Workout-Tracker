const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Workout ([
    {
      day: new Date(new Date().setDate(new Date().getDate() - 9)),
      exercises: [
        {
          type: 'resistance',
          name: 'Bicep Curl',
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4,
        },
      ],
    }])
  
    // const transactionSchema = new Schema({
    //     name: {
    //       type: String,
    //       trim: true,
    //       required: "Enter a name for transaction"
    //     },
    //     value: {
    //       type: Number,
    //       required: "Enter an amount"
    //     },
    //     date: {
    //       type: Date,
    //       default: Date.now
    //     }
    //   });
      
    //   const Transaction = mongoose.model("Transaction", transactionSchema);
      
    //   module.exports = Transaction;