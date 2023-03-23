import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../reducers/reducerWorkout";

export default function WorkoutDetails({ workout }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const response = await axios.delete(
      `http://localhost:8000/api/${workout._id}`,
      {
        data: {
          workout: workout._id,
        },
      }
    );
    const json = response.data;
    console.log(json);
    if (json) {
      dispatch(deleteWorkout(json._id));
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <h3>
        <strong>Number of reps: </strong>
        {workout.reps}
      </h3>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}> delete </span>
    </div>
  );
}
