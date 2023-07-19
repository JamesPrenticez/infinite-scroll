import { createSlice } from '@reduxjs/toolkit';
import { fetchMyTodos } from '../api/todoAPI'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as any[],
    status: "",
    isLoading: false,
    resultsPerPage: 2,
    currentPage: 1,
    maxResults: 10
  },
  reducers: {
    fetchTodos: (state, action) => {
      state.todos = action.payload;
    },
    fetchMaxResults: (state, action) => {
      state.maxResults = action.payload;
    },
    onNavigationNext: (state) => {
      state.currentPage ++;
    },
    onNavigationPrev: (state) => {
      state.currentPage --;
    },
    onChangeResultsPerPage: (state, action) => {
      state.resultsPerPage = action.payload
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  }, 
  extraReducers: {
    [fetchMyTodos.pending.type]: (state, action) => {
      state.status = "pending"
      state.isLoading = true
    },
    [fetchMyTodos.fulfilled.type]: (state, { payload }) => {
      state.status = "success"
      state.todos = payload
      state.isLoading = false
    },
    [fetchMyTodos.rejected.type]: (state, action) => {
      state.status = "failed"
      state.isLoading = false
    }
  },
});

export const {
  fetchTodos,
  fetchMaxResults,
  onNavigationNext,
  onNavigationPrev,
  onChangeResultsPerPage,
  onClickCurrentPage,
} = todoSlice.actions;

export default todoSlice.reducer;

// https://www.youtube.com/watch?v=hBrE-QXIr4c