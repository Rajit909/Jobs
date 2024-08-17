import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import Job from './components/Job'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Adminjobs from './components/admin/Adminjobs'
import Companies from './components/admin/Companies'

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
      path: "/jobs",
      element: <Jobs/>
    },
    {
      path: "/description/:id",
      element: <JobDescription/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path:"/admin/companies",
      element: <Companies/>
    },
    // {
    //   path:"/admin/companies/create",
    //   element: <div>create company</div>
    // },
    // {
    //   path:"/admin/companies/:id",
    //   element:<div>company setup</div>
    // },
    {
      path:"/admin/jobs",
      element:<Adminjobs/>
    },
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
