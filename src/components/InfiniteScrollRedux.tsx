import React, { 
  type ReactElement,
  useEffect,
} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { onNavigationNext } from '../redux/slices/todoSlice'
import { fetchMyTodos } from '../redux/api/todoAPI';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';


const InfiniteScroll1 = (): ReactElement => {


  const dispatch = useAppDispatch()
  const myData = useAppSelector((state) => state.todoStore.todos)

  const currentPage = useAppSelector((state) => state.todoStore.currentPage)
  const resultsPerPage = useAppSelector((state) => state.todoStore.resultsPerPage)

  // Fetch data and refetch when currentPage changes
  useEffect(() => {
    dispatch(fetchMyTodos({ currentPage, resultsPerPage }));
  }, [currentPage, dispatch])

  const { maxResults, isLoading } = useAppSelector((state) => state.todoStore)

  const handleNextPage = (): void => {
    console.log("here")
    dispatch(onNavigationNext())
  }

  return (
      <div>
        <h1 className='font-medium'>Infinite Scroll 1</h1>

        <InfiniteScroll
          data={myData}
          fetchNextPage={() => { handleNextPage() }}
          isLoading={isLoading}
          maxResults={maxResults}
          renderComponent={({ title }) => (
            <h1>{title}</h1>
          )}
        />

      </div>
  )
}

export default InfiniteScroll1