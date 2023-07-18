import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export interface Task {
  id: number;
  name: string;
  // Other properties...
}

interface TaskData {
  payload: Task[];
  category: any[]; // Replace with the actual type
  isLoading: boolean;
  status: string;
  page: number;
}

const initialState: { data: TaskData } = {
  data: {
    payload: [],
    category: [],
    isLoading: false,
    status: "",
    page: 1,
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.data.payload.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskIdToDelete = action.payload;
      state.data.payload = state.data.payload.filter(task => task.id !== taskIdToDelete);
    },
    setInitialData: (state, action: PayloadAction<Task[]>) => {
      state.data.payload = action.payload;
      state.data.isLoading = false; // Set isLoading to false after receiving data
    },
  }
});

export const { addTask, deleteTask, setInitialData } = taskSlice.actions;

export default taskSlice.reducer;