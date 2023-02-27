import React from "react";

export default function WorkoutDetails({ workout }) {
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
    </div>
  );
}
