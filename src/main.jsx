import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Demo from "./pages/Demo.jsx"
import Dogs from "./pages/Dogs.jsx"
import Dogdetails from "./pages/Dogdetail.jsx"
import App from "./App.jsx"

import "./style/main.sass"

const router = createBrowserRouter([
  {
    path: "/",       
    element: <Demo />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "dogs", element: <Dogs /> },
      { path: "dogdetail", element: <Dogdetails /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
