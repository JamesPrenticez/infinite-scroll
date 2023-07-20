import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchTodos, fetchMaxResults } from "../slices/todoSlice"

 interface IMockData {
  id: number,
  title: string
}

const mockData: IMockData[] = [
  {id: 1, title: "post 1"},
  {id: 2, title: "post 2"},
  {id: 3, title: "post 3"},
  {id: 4, title: "post 4"},
  {id: 5, title: "post 5"},
  {id: 6, title: "post 6"},
  {id: 7, title: "post 6"},
  {id: 8, title: "post 6"},
  {id: 9, title: "post 6"},
  {id: 10, title: "post 6"},
  {id: 11, title: "post 6"},
  {id: 12, title: "post 6"},
  {id: 13, title: "post 6"},
  {id: 14, title: "post 6"},
  {id: 15, title: "post 6"},
  {id: 16, title: "post 6"},
  {id: 17, title: "post 6"},
  {id: 18, title: "post 6"},
  {id: 19, title: "post 6"},
  {id: 20, title: "post 6"},
]

export const fetchMyTodos = createAsyncThunk("todos/fetchTodos", async ({currentPage, resultsPerPage}: {currentPage: number, resultsPerPage: number}, { dispatch }) => {
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;

  // Implement real api call
  // const fetchTodosApi = async (): Promise<any>  => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await response.json()
  //   return data
  // }

  // Mock DB
  const mockTodosApi = async (): Promise<any>  => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // mock db delay
    return mockData
  }

  try {
      // const response = await fetchTodosApi() // Real API
      const response = await mockTodosApi() // mockData
      const responseLength = response.length
      const paginatedResponse = response.slice(startIndex, endIndex);

      dispatch(fetchTodos(paginatedResponse))
      dispatch(fetchMaxResults(responseLength))

      return paginatedResponse
      
  } catch (error) {
      console.log(error)
  }
})