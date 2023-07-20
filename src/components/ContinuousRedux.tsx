import React, { 
  type ReactElement,
  useEffect,
} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { onNavigationNext } from '../redux/slices/todoSlice'
import { fetchMyTodos } from '../redux/api/todoAPI';

const ContinuousRedux = (): ReactElement => {

  const dispatch = useAppDispatch()
  const myData = useAppSelector((state) => state.todoStore.todos)

  const currentPage = useAppSelector((state) => state.todoStore.currentPage)
  const resultsPerPage = useAppSelector((state) => state.todoStore.resultsPerPage)

  // Fetch data and refetch when currentPage changes
  useEffect(() => {
    dispatch(fetchMyTodos({ currentPage, resultsPerPage }));
  }, [currentPage, dispatch])

  const { 
    // maxResults,
    isLoading } = useAppSelector((state) => state.todoStore)
  
  // const totalPages = Math.ceil(maxResults / resultsPerPage)

  const handleNextPage = (): void => {
    console.log("here")
    dispatch(onNavigationNext())
  }

  return (
      <div>
        <h1 className='font-medium'>Continuous Scroll</h1>

            {myData.map((item, index) => (
              <div key={index}>
                {item.id} - {item.title}
              </div>
            ))}

            {isLoading && <div className='bg-red-500'>Loading ... </div>}

            <button onClick={() => { handleNextPage() }}>
              More
            </button>

        {/* <InfiniteScroll
          data={todos}
          fetchNextPage={() => { handleNextPage() }}
          isLoading={isLoading}
          resultsPerPage={5}
          renderComponent={({ title }) => (
            <h1 style={{ borderBottom: '3px solid white' }}>{title}</h1>
          )}
        /> */}

      </div>
  )
}

export default ContinuousRedux