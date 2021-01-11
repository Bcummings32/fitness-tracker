//mongo inquiries
//create post, update, get all and delete
const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({
    }).then(dbWorkout => {
        res.json(dbWorkout);
    })
})
router.get("/api/workouts", (req, res) => {
    Workout.find().then(seeWorkouts => {
        res.json(seeWorkouts)
    }).catch(err => {
        res.json(err)
    })
})
//update
router.put("/api/workouts")

//get workouts


router.delete("/api/workouts", ({body}, res ) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err)
    })
})