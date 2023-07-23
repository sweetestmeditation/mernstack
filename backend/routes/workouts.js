const express = require('express')
const Workout = require('../models/WorkoutModel')

const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// Get a single workout
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    const {title, load, reps} = req.body
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router