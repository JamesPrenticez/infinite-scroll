import React, { useRef, useEffect, type ReactElement } from 'react'

import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query'
import { useIntersection } from '@mantine/hooks'

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
const useGetPostsInfiniteQuery = (pageParam: number): UseInfiniteQueryResult<IPosts[], Error> => {
  const result = useInfiniteQuery<IPosts[], Error>({
    queryKey: ["useGetPostsInfiniteQuery", pageParam],
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

const InfiniteScroll = (): ReactElement => {
  const { data, isSuccess, fetchNextPage, isFetchingNextPage } = useGetPostsInfiniteQuery(1)

  const lastPostRef = useRef<HTMLElement>(null)

  const {ref, entry} = useIntersection({
    root: lastPostRef.current,
    threshold: 1
  })

  useEffect(() => {
    if(entry !== null){
      if(entry.isIntersecting) fetchNextPage()
    }
  }, [entry])

  const _posts = data?.pages.flatMap((page) => page)
  

  return (
    <div>
      <h1 className='font-semibold text-md'>Infinity</h1>

      <div className='border-[1px] border-dashed border-red-500 rounded h-[50px] overflow-y-scroll'>

        {isSuccess ? (

            _posts?.map((post, i) => {
              if(i === _posts.length - 1 ) return <div key={post.id} className='bg-red-500' ref={ref}>{post.title}</div>                
              return (
                <div key={post.id}>
                  {post.title}
                </div>
              )
            })
          ) : (
            <p>Loading...</p>
          )
        }

        <div>
          {isFetchingNextPage 
            ? 'Loading More...'
            // TODO update api call to include total pages
            : (data?.pages.length ?? 0) < 3
            ? 'Load More'
            : 'Nothing more to load'
          }
        </div>

      </div>
      
    </div>
  )
}

export default InfiniteScroll;

// const _posts = data?.pages.flatMap((page) => page)
// remove nested map with flatmap
// data.pages.map((page, i) => (
//   <div key={i}>
//     {page.map((post) => (
//       <div key={post.id}>
//         {post.title}
//       </div>
//     ))}
//   </div>
// ))