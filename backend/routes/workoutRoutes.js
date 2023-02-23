const express = require('express')
const { updateWorkout, removeWorkout, setWorkout, getSingleWorkout, getAllWorkout } = require('../controllers/workoutControllers')
const router = express.Router()

router.get('/', getAllWorkout)
router.get('/:id', getSingleWorkout)
router.post('/', setWorkout)
router.delete('/:id', removeWorkout)
router.patch('/:id', updateWorkout)

module.exports = router