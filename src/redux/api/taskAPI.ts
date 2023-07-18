import { type Task } from "../slices/taskSlice";

export const initialData: Task[] = [
  {id: 0, name:"zero"},
  {id: 1, name:"one"},
  {id: 2, name:"two"},
  {id: 3, name:"three"},
  {id: 4, name:"four"},
]

export const fetchInitialData = async (): Promise<Task[]> => {
  try {
    // Make your API call here
    // const response = await fetch('your_api_endpoint');
    // const data = await response.json();

    // Mock data
    const data = initialData

    return data;
  } catch (error) {
    // Handle error
    console.error('Error fetching initial data:', error);
    return [];
  }
};