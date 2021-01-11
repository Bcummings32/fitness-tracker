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
    Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    })
})
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    })
})

//update
router.put("/api/workouts/:id", ({ body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercises:body}}, {new:true, 
    runValidators: true}).then(dbWorkout => {
        res.json(dbWorkout);
    })
})

//get workouts


router.delete("/api/workouts", ({body}, res ) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router