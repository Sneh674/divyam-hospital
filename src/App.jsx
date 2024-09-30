import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, HashRouter, Link } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Gallery from './component/Gallery'
// import { Link }


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>,
      errorElement: <div>errorrrrr</div>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact /></>
    },
    {
      path:"/gallery",
      element:<><Navbar/><Gallery/></>
    }
  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
