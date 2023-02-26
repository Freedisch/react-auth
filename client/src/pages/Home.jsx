import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { Link } from "react-router-dom";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
export default function Home() {
  const { workout, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get("http://localhost:8000/api/");
      //const json = response.json()

      if (response)
        return dispatch({ type: "SET_WORKOUTS", payload: response.data });
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((work) => (
            <WorkoutDetails workout={work} key={work._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
