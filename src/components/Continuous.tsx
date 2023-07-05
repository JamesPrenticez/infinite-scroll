import React, { type ReactElement } from 'react'

import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query'

interface IPosts {
  id: number,
  title: string
}

const posts: IPosts[] = [
  {id: 1, title: "post 1"},
  {id: 2, title: "post 2"},
  {id: 3, title: "post 3"},
  {id: 4, title: "post 4"},
  {id: 5, title: "post 5"},
  {id: 6, title: "post 6"},
]

// mock database fetch
const fetchPosts = async (page: number): Promise<IPosts[]>  => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return posts.slice((page - 1) * 2, page * 2)
}

// hook
const useGetPostsInfiniteQuery1 = (pageParam: number): UseInfiniteQueryResult<IPosts[], Error> => {
  const result = useInfiniteQuery<IPosts[], Error>({
    queryKey: ["useGetPostsInfiniteQuery1", pageParam],
    queryFn: async ({pageParam = 1}) => {
      const response = await fetchPosts(pageParam)
      return response
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    // TODO get this to fetch rather than be hard coded
    initialData: {
      pages: [posts.slice(0, 2)],
      pageParams: [1]
    }
  })
  return result
}

const Continuous = (): ReactElement => {
  const { data, isSuccess, fetchNextPage, isFetchingNextPage } = useGetPostsInfiniteQuery1(1)

  return (
    <div>
      <h1 className='font-semibold text-md'>Continuous</h1>

      <div>

        {isSuccess ? (
            data.pages.map((page, i) => (
              <div key={i}>
                {page.map((post) => (
                  <div key={post.id}>
                    {post.title}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
      
      {/* LOAD MORE */}
      <button 
        className='px-3 py-1 rounded bg-blue-500 hover:to-blue-400 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed text-white cursor-pointer'
        onClick={() => fetchNextPage()}
        // TODO update api call to include total pages (same as below)
        disabled={isFetchingNextPage || (data?.pages.length ?? 0) >= 3}
      >
        {isFetchingNextPage
          ? 'Loading More...'
          // TODO update api call to include total pages
          : (data?.pages.length ?? 0) < 3
          ? 'Load More'
          : 'Nothing more to load'
        }
      </button>
      
    </div>
  )
}



export default Continuous;