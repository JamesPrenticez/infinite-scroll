import React, {
  useEffect,
  useRef,
  // isValidElement,
  // cloneElement,
  type ReactElement
} from 'react';
import { useIntersection } from '@mantine/hooks'
// import { useIntersection } from './useIntersection';

interface Props {
  data: any[];
  renderComponent: ReactElement<any> | ((props: any) => ReactElement<any>);
  additionalProps?: object;
  fetchNextPage: () => void;
  isLoading: boolean;
  maxResults: number;
}

const InfiniteScroll = ({ maxResults, data, isLoading, renderComponent, additionalProps, fetchNextPage }: Props): React.ReactElement => {

  const lastPostRef = useRef<HTMLDivElement>(null);

  // Try implement my own observer
  // interface IntersectionOptions {
  //   root: HTMLDivElement | null,
  //   rootMargin: string;
  //   threshold: number;
  // }

  // const intersectionOptions: IntersectionOptions = {
  //   root: lastPostRef.current, // Set the root element if needed
  //   rootMargin: '0px', // Set the root margin if needed
  //   threshold: 0.5, // Set the intersection threshold if needed
  // };

  // const { ref, intersecting } = useIntersection(intersectionOptions);

  // useEffect(() => {
  //   if (intersecting !== null) {
  //     if (intersecting) {
  //       fetchNextPage()
  //     }
  //   }
  // }, [intersecting])

  // Use library for intersection
  const {ref, entry} = useIntersection({
    root: lastPostRef.current,
    threshold: 1
  })

  useEffect(() => {
    if(entry !== null){
      if(entry.isIntersecting) {
        if (maxResults === data.length) return
        fetchNextPage()
      }
    }
  }, [entry])

  console.log(maxResults)
  console.log(data.length)

  // RenderComponent as a Function
  if (typeof renderComponent === 'function') {
    return (
      <div className='bg-gray-50 border border-dashed border-red-500 rounded'>


        {data.length > 0 && 
        <div className='h-[100px] overflow-y-scroll bg-gray-200'>
          {data.map((item, index) => {
            const mergedProps = { ...additionalProps, ...item };

            if (index === data.length - 1)
              return (
                <div key={index} ref={ref} className='bg-red-500'>
                  {renderComponent(mergedProps)}
                </div>
              );

            return (
              <div key={index}>
                {renderComponent(mergedProps)}
              </div>
            );
          })}
        </div>
        }

        <div className='flex justify-center h-[100px]'>

          {isLoading &&
            <img 
              src="./mySpin.svg"
              alt="loading icon"
              className=' w-[100px]'
            />
          }

          {maxResults === data.length &&
            <div className='text-center text-[16px] font-[##0A1839] font-medium'>
              <img src="./bell.svg" width="48px" height="48px" className='mx-auto' alt="" />
              <p>That is all your notifications</p>
              <p>from the last 30 days.</p>
            </div>
          }

        </div>

      </div>
    );
  }

  // Handle direct component
  // Not completly supported
  // if (isValidElement(renderComponent)) {
  //   return (
  //     <>
  //       {data.map((item, index) => (
  //         <div key={index} className='bg-red-400'>
  //           {cloneElement(renderComponent, { ...additionalProps, ...item })}
  //         </div>
  //       ))}
  //     </>
  //   );
  // }

  return <div />;
};

export default InfiniteScroll;
