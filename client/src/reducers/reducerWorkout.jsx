import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    value: []
  },
  reducers: {
    setWorkout: (state, action) => {
      state.value = action.payload
    },
    addWorkout: (state, action) => {
      state.value = [action.payload, ...state.value]
    }
  },
});


export const { setWorkout, addWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;