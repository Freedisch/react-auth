import axios from "axios";
import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [loads, setLoads] = useState("");
  const [reps, setReps] = useState("");
  const { dispatch } = useWorkoutContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title: title, reps: reps, load: loads };

    try {
      const response = await axios.post("http://localhost:8000/api/", workout);
      const json = await response.data;

      console.log(json);
      setTitle("");
      setLoads("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> Add a new workout</h3>
      <label htmlFor="">Exercice Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="">Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
      />
      <label htmlFor="">Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button> Add workout </button>
    </form>
  );
}
