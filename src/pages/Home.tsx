import React, { type ReactElement } from "react";
import Body from "../components/layout/Body";
import Pagination from "../components/Pagination";
import Continuous from "../components/Continuous";
import InfiniteScroll from "../components/InfiniteScroll";

const Home = (): ReactElement => {
  return (
    <Body>
      <h1>Home</h1>
      <hr />
      <Pagination />
      <hr />
      <Continuous />
      <hr />
      <InfiniteScroll />
    </Body>
  );
};

export default Home;
