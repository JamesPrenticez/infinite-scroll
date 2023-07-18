import React from 'react';
// import React, { useRef, useEffect, ReactNode, ReactElement } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { useIntersection } from './useIntersection';
// import { NotificationsCardForm } from 'pages/Notifications/NotificationsCard';

// mock database fetch
// const fetchPosts = async (page: number): Promise<IPosts[]> => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return posts.slice((page - 1) * 2, page * 2);
// };

// // Redux store
// const store = configureStore({
//   reducer: {
//     posts: postsSlice.reducer,
//   },
// });

// // Thunk action creator
// const fetchNextPosts = () => async (dispatch: any, getState: any) => {
//   const { page } = getState().posts;
//   dispatch(fetchPostsStart());

//   try {
//     const response = await fetchPosts(page);
//     dispatch(fetchPostsSuccess(response));
//   } catch (error) {
//     dispatch(fetchPostsFailure(error.message));
//   }
// };

interface Props {
  data: any[];
  resultsPerPage: number;
  renderComponent: React.ReactElement<any> | ((props: any) => React.ReactElement<any>);
  additionalProps?: object;
}

const InfiniteScroll = ({ resultsPerPage, data, renderComponent, additionalProps }: Props): React.ReactElement => {

  // Handle Function
  if (typeof renderComponent === 'function') {
    return (
      <>
        {data.map((item, index) => {
          const mergedProps = { ...additionalProps, ...item };
          return (
            <React.Fragment key={index}>
              {renderComponent(mergedProps)}
            </React.Fragment>
          );
        })}
      </>
    );
  }

  // Handle direct component
  if (React.isValidElement(renderComponent)) {
    return (
      <>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(renderComponent, { ...additionalProps, ...item })}
          </React.Fragment>
        ))}
      </>
    );
  }

  return <div />;
};

export default InfiniteScroll;



// if (!renderComponent) {
//   return <div />; // handle the case when renderComponent is not provided
// }

// if (typeof renderComponent === 'function') {
//   const RenderComponent = renderComponent as React.FunctionComponent;
//   return <RenderComponent {...additionalProps} />;
// }




//  <NotificationsCardForm
//         keyValue={0}
//         title={"test"}
//         date={""}
//         text={""}
//         read={false}
//         action={{ url: "", text: "" }}
//         onClick={() => {}}
//         className="notification_page__card__content" 
//       /> 

//  Uncomment the code below to render the data 
// <h1>Infinite Scroll {resultsPerPage}</h1>
//       {data.map((item, index) => (
//         <React.Fragment key={index}>
//           {item.text}
//         </React.Fragment>
//       ))} 

// const dispatch = useDispatch();
// const { data, isLoading, error, page } = useSelector((state: any) => state.posts);

// const lastPostRef = useRef<HTMLElement>(null);

// const { ref, entry } = useIntersection({
//   root: lastPostRef.current,
//   threshold: 1,
// });

// useEffect(() => {
//   if (entry !== null && entry.isIntersecting) {
//     dispatch(fetchNextPosts());
//   }
// }, [entry, dispatch]);


// <div>
//   <h1 className="font-semibold text-md">Infinity</h1>

//   <div className="border-[1px] border-dashed border-red-500 rounded h-[50px] overflow-y-scroll">
//     {data.map((post: IPosts, i: number) => {
//       if (i === data.length - 1)
//         return (
//           <div key={post.id} className="bg-red-500" ref={ref}>
//             {post.title}
//           </div>
//         );
//       return <div key={post.id}>{post.title}</div>;
//     })}

//     <div>
//       {isLoading ? (
//         'Loading More...'
//       ) : page < 3 ? (
//         'Load More'
//       ) : (
//         'Nothing more to load'
//       )}
//     </div>
//   </div>
// </div>
