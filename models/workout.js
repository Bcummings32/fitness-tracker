const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of the exercise"
            },
            duration: {
                type: Number,
                required: "Please enter length of exercise"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]

  },
  {
    toJSON: {
      // saays to include any virtual properties when data is requested
      virtuals: true
    }
  }
);
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  //kind of like var something +=something
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;