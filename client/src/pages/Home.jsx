import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useDispatch, useSelector } from "react-redux";
import { setWorkout } from "../reducers/reducerWorkout";

export default function Home() {
  const dispatch = useDispatch()
  const workoutList = useSelector((state) => state.workouts.value);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/");
      const json = response.data;
      // const loadedWorkout = []
      // for (const key in json) {
      //   loadedWorkout.push({
      //     id: json[key]._id,
      //     title: json[key].title,
      //     load: json[key].load,
      //     reps: json[key].reps,
      //   });
      // }
      dispatch(
        setWorkout(json)
      )
      console.log(workoutList);
    };
    fetchData();
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workoutList && workoutList.map((work) => (
            <WorkoutDetails workout={work} key={work.id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
