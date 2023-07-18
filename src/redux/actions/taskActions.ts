import { type PayloadAction } from '@reduxjs/toolkit';
import { setInitialData, type Task } from '../slices/taskSlice';
import { fetchInitialData } from '../api/taskAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTask = (name: string): PayloadAction<Task> => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: random({ min: 0, max: 100 }),
      name,
    },
  };
};

export const deleteTask = (id: number): PayloadAction<number> => {
  return {
    type: 'tasks/deleteTask',
    payload: id,
  };
};

export const fetchInitialDataAsync = createAsyncThunk('tasks/fetchInitialData', async (_, { dispatch }) => {
  try {
    const data = await fetchInitialData();
    dispatch(setInitialData(data));
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const random = ({ min, max }: { min: number; max: number }): number => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
