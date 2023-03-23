import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    value: [],
  },
  reducers: {
    setWorkout: (state, action) => {
      state.value = action.payload;
    },
    addWorkout: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteWorkout: (state, action) => {
      state.value = state.value.filter((w) => {
        w._id !== action.payload._id;
      });
    },
  },
});

export const { setWorkout, addWorkout, deleteWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
