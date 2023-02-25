import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { Link } from "react-router-dom";
export default function Home() {
  const [Workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get("http://localhost:8000/api/");
      //const json = response.json()

      if (response) return setWorkout(response.data);
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {Workout &&
          Workout.map((work) => (
            <WorkoutDetails workout={work} key={work._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
