import React, { type ReactElement } from 'react'
import Body from '../components/layout/Body'
// import PaginationRedux from '../components/PaginationRedux'
// import ContinuousRedux from '../components/ContinuousRedux'
import InfiniteScrollRedux from '../components/InfiniteScrollRedux'

const Redux = (): ReactElement => {
  return (
    <Body>
    <h1 className='font-bold'>Redux</h1>

    <div className='flex flex-col space-y-4'>

    <hr />
    {/* <PaginationRedux /> */}
    <hr />
    {/* <ContinuousRedux /> */}
    <hr />
    <InfiniteScrollRedux />
    <hr />
    </div>
  </Body>
  )
}

export default Redux