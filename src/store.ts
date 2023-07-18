import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import taskReducer from './redux/slices/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  // middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { tasks: TaskState }
export type AppDispatch = typeof store.dispatch;


