import React from "react";
import Head from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MianConatiner from "./components/MianConatiner";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [{ path: "/", element: <MianConatiner /> },
    {
      path:'/watch',
      element: <WatchPage/>
    }],
    },
  // {path:'/',element:<Body/>},
  ]);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
