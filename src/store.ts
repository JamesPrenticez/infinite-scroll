import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux/slices/todoSlice';

export const store = configureStore({
  reducer: {
    todoStore: todoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { tasks: TaskState }
export type AppDispatch = typeof store.dispatch;


