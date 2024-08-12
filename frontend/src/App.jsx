import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import Job from './components/Job'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/job",
      element: <Job/>
    },
    // {
    //   path: "/description/:id",
    //   element: <div>description</div>
    // },
    // {
    //   path: "/browse",
    //   element: <div>browse</div>
    // },
    // {
    //   path: "/profile",
    //   element: <div>profile</div>
    // },
    // {
    //   path:"/admin/companies",
    //   element: <div> companies</div>
    // },
    // {
    //   path:"/admin/companies/create",
    //   element: <div>create company</div>
    // },
    // {
    //   path:"/admin/companies/:id",
    //   element:<div>company setup</div>
    // },
    // {
    //   path:"/admin/jobs",
    //   element:<div>Admin jobs </div>
    // },
    // {
    //   path:"/admin/jobs/create",
    //   element:<div>create job</div>
    // },
    // {
    //   path:"/admin/jobs/:id/applicants",
    //   element: <div>Applicants</div>
    // },

  ])
  return (
    <>
      
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
