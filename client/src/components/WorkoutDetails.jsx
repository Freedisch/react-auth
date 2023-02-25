import React from "react";
import { Link } from "react-router-dom";

export default function WorkoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <Link to="/details">
        <h4>{workout.title}</h4>
      </Link>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <h3>
        <strong>Number of reps: </strong>
        {workout.reps}
      </h3>
      <p>{workout.createdAt}</p>
    </div>
  );
}
