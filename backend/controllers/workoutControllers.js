const workoutModel = require("../models/workoutModel")

const getAllWorkout = async (req, res) => {
    const workouts = await workoutModel.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

const getSingleWorkout = async (req, res) => {
    const workout = await workoutModel.findById({_id: req.params.id})
    if(!workout) return res.status(404).json({error: 'No such workout'})

    res.status(200).json(workout)
}

const setWorkout = async (req, res) => {
    try {
        const workout = await workoutModel.create({
            title: req.body.title,
            reps: req.body.reps,
            load: req.body.load
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const removeWorkout = async ( req, res) => {
    const workout = await workoutModel.findByIdAndDelete({ _id: req.params.id})
    if(!workout) return res.status(400).json({error: 'No such workout'})

    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    try {
        const workout = await workoutModel.findOneAndUpdate({_id: req.params.id}, {
            ...req.body
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: 'No such workout'})
    }
     

    
}

module.exports = {
    getAllWorkout,
    getSingleWorkout,
    setWorkout,
    updateWorkout,
    removeWorkout
}