import React, { type ReactElement } from 'react'
import Body from '../components/layout/Body'
import PaginationRedux from '../components/PaginationRedux'

const Redux = (): ReactElement => {
  return (
    <Body>
    <h1>Redux</h1>
    <hr />
    <PaginationRedux />
    <hr />
    {/* <InfiniteScrollRedux /> */}
  </Body>
  )
}

export default Redux