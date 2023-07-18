import React, { type ReactElement, useEffect } from 'react'
import Body from '../components/layout/Body'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { addTask, deleteTask, fetchInitialDataAsync } from '../redux/actions/taskActions';
import {  type AppDispatch } from '../store';

const Redux = (): ReactElement => {

  const dispatch: AppDispatch = useAppDispatch()

  // const [tasksPayload, setTasksPayload] = useState(useAppSelector(state => state.tasks.data.payload));
  const tasksPayload = useAppSelector((state) => state.tasks.data.payload);

  // Fetch inital data
  useEffect(() => {
    dispatch(fetchInitialDataAsync());
  }, []);



  const addNewTask = (): void => {
    console.log('add new task');
    console.log(tasksPayload);
    dispatch(addTask('new task'));
  };

  const deleteOldTask = (id: number): void => {
    console.log('delete old task');
    dispatch(deleteTask(id));
  };

  return (
    <Body>
      <div className='bg-green-200 h-screen w-full'>
        <h1>Redux</h1>

        {tasksPayload.map((item: any, i: number) => (
          <div key={i} className='flex justify-between'>
            <h1>{item.name}</h1>
            <button className='p-2 bg-red-600 text-white' onClick={() => { deleteOldTask(item.id) }}>
              X
            </button>
          </div>
        ))}

        <button
          className='p-2 bg-blue-600 text-white'
          onClick={() => {
            addNewTask();
          }}
        >
          Add task
        </button>


      </div>
    </Body>
  )
}

export default Redux