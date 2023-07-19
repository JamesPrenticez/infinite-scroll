import React, { 
  type ReactElement,
  useEffect,
} from 'react'
import Body from './layout/Body'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { onNavigationNext, onNavigationPrev } from '../redux/slices/todoSlice'
import { fetchMyTodos } from '../redux/api/todoAPI';


const PaginationRedux = (): ReactElement => {

  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todoStore.todos)

  const currentPage = useAppSelector((state) => state.todoStore.currentPage)
  const resultsPerPage = useAppSelector((state) => state.todoStore.resultsPerPage)

  // Fetch data and refetch when currentPage changes
  useEffect(() => {
    dispatch(fetchMyTodos({ currentPage, resultsPerPage }));
  }, [currentPage, dispatch])

  const { maxResults, isLoading } = useAppSelector((state) => state.todoStore)
  
  const totalPages = Math.ceil(maxResults / resultsPerPage)
  const pageButtons = [...Array(totalPages + 1).keys()].slice(1)

  const handlePrevPage = (): void => {
    if(currentPage !== 1) {
      dispatch(onNavigationPrev())
    }
  }

  const handleNextPage = (): void => {
    console.log("here")
    dispatch(onNavigationNext())
  }

  return (
    <Body>
      <div className='bg-green-200 h-screen w-full'>
        <h1>Todos</h1>

        <div className='border border-red-500 bg-green-100 p-4'>

        {!isLoading ? (
          currentPage <= totalPages ? (
            <>
            {todos.map(({ id, title }) => (
              <div key={id}>
                {id} - {title}
              </div>
            ))}
            </>
          ) : (
            <p>No Results</p>
          )
        ) : (
          <p>Loading...</p>
        )
        }


      </div>

        <div className='flex space-x-2 mt-2'>
          <button
            onClick={() => { handlePrevPage() }}
            disabled={false}
          >
            Previous
          </button>

          <div className='flex space-x-2'>
            {pageButtons.map(_p => {
              let bgcolor = 'bg-gray-200'
              let textcolor = 'text-black'
              if(_p === currentPage) {
                bgcolor = 'bg-blue-500';
                textcolor = 'text-white'
              }
            return (
                <span key={_p} className={`border border-gray-500 rounded px-3 py-1 ${bgcolor} ${textcolor}`}>{_p}</span>
              )
            }
            )
          }
          </div>

          <button
            onClick={() => { handleNextPage() }}
            disabled={false}
          >
            Next
          </button>
        </div>

        <hr />

        <footer>Page: {currentPage} of {totalPages}</footer>


      </div>
    </Body>
  )
}

// const PaginationRedux = (): ReactElement => {

//   return (
// <h1>hi</h1>
//   )
// }


export default PaginationRedux