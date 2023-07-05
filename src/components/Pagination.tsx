import React, { useState, type ReactElement } from 'react'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

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

// Mock database fetch
const fetchPostsByPage = async (page: number, resultsPerPage: number): Promise<{ posts: IPosts[], totalPages: number }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = page * resultsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  return {
    posts: paginatedPosts,
    totalPages: posts.length / resultsPerPage,
  };
};

// Hook
export const useGetPostsPaginatedQuery = (page: number, resultsPerPage: number): UseQueryResult<{ posts: IPosts[], totalPages: number }, Error> => {
  const result = useQuery<{ posts: IPosts[], totalPages: number }, Error>({
    queryKey: ["useGetPostsPaginatedQuery", page, resultsPerPage],
    queryFn: async () => {
      const response = await fetchPostsByPage(page, resultsPerPage);
      return response
    },
    keepPreviousData: true,
  });

  return result
};

const Pagination = (): ReactElement => {
  const [pageParam, setPageParam] = useState<number>(1)
  const resultsPerPage = 2 
  const { data, isSuccess, isFetching } = useGetPostsPaginatedQuery(pageParam, resultsPerPage)

  const handlePageChange = (page: number): void => {
    setPageParam(page);
  };

  return (
    <div>
      <h1 className='font-semibold text-md'>Pagination</h1>

      <div>
        {isSuccess && !isFetching ? (
          pageParam <= data.totalPages ? (
            <>
              {data.posts.map((post, i) => (
                <div key={i}>
                  {post.title}
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
      
      <PaginationButtonStack
        currentPage={pageParam}
        totalPages={data?.totalPages ?? 0}
        onPageChange={handlePageChange}
      />
      
    </div>
  )
}

interface PaginationButtonStackProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtonStack: React.FC<PaginationButtonStackProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxButtonsToShow = 5; 

  let startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(startPage + maxButtonsToShow - 1, totalPages);

  if (endPage - startPage < maxButtonsToShow - 1) {
    startPage = Math.max(endPage - maxButtonsToShow + 1, 1);
  }

  const pageButtons: JSX.Element[] = [];

  // Render previous button
  pageButtons.push(
    <button
      key="prev"
      onClick={() => { onPageChange(currentPage - 1) }}
      className={`mr-2 px-3 py-1 rounded ${
        currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'
      }`}
      disabled={currentPage === 1}
    >
      Previous
    </button>
  );

  // Render page buttons
  for (let page = startPage; page <= endPage; page++) {
    pageButtons.push(
      <button
        key={page}
        onClick={() => {  onPageChange(page) }}
        className={`mr-2 px-3 py-1 rounded ${
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {page}
      </button>
    );
  }

  // Render next button
  pageButtons.push(
    <button
      key="next"
      onClick={() => { onPageChange(currentPage + 1) }}
      className={`mr-2 px-3 py-1 rounded ${
        currentPage === totalPages ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'
      }`}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  );


  return <div className="flex">{pageButtons}</div>;
};

export default Pagination;