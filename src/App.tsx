import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/signin" element={<SignIn />} />
          <Route index path="/add" element={<Add />} />
          <Route index path="/book/:id" element={<Detail />} />
          <Route index path="/edit/:id" element={<Edit />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
