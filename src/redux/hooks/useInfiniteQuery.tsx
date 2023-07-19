import { useEffect } from 'react';
import { fetchPostsAsync } from '../actions/postsAction';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../slices/postsSlice';
import { type AppDispatch, type RootState } from '../../store';
import { useAppDispatch, useAppSelector } from './hooks';

interface IInfiniteQuery {
  payload: any;
  isLoading: boolean;
  // error: any;
  // currentPage: number;
  fetchNextPage: () => void;
}

export const useGetPostsInfiniteQuery = (pageParam: number): IInfiniteQuery => {
  const resultsPerPage = 2;

  const dispatch: AppDispatch = useAppDispatch();

  // const { data, isLoading, error, currentPage } = useAppSelector((state: RootState) => state.posts);
  const { payload, isLoading } = useAppSelector(state => state.posts.data);
  console.log(payload)

  const fetchNextPage = (): void => {
    // const nextPage = currentPage + 1;
    // dispatch(fetchPostsAsync({ pageParam: nextPage, resultsPerPage }));
  };

  // useEffect(() => {
  //   dispatch(fetchPostsStart());
  //   dispatch(fetchPostsAsync({ pageParam, resultsPerPage }));
  // }, [dispatch, pageParam]);

  // useEffect(() => {
  //   if (!isLoading && !error) {
  //     dispatch(fetchPostsSuccess({ data, pageParams: [pageParam] }));
  //   } else if (error) {
  //     dispatch(fetchPostsFailure(error));
  //   }
  // }, [dispatch, isLoading, error, data, pageParam]);

  return { payload, isLoading, fetchNextPage };
};