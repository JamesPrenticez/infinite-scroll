import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Loading from "./components/common/Loading";
import About from "./pages/About";
import Redux from "./pages/Redux";

const Home = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 500)), // Adds a controlled delay to suspense
  ]);
  return moduleExports;
});

const NotFound: React.FC = () => <h1>404 - Not Found</h1>;

const App = (): React.ReactElement => {
  return (
    <Suspense
      fallback={
        <Loading fullScreen={true} backgroundColor="rgb(249 250 251)" />
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
