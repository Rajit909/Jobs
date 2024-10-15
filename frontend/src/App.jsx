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
import ProtectedRoute from './components/admin/ProtectedRoute'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminHomePage from './components/admin/AdminHomePage'
import AdminProfile from './components/admin/AdminProfile'

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
      path: "/adminprofile",
      element: <AdminProfile/>
    },
    {
      path: "/admindashboard",
      element: <AdminDashboard/>
    },
    {
      path: "/hire",
      element: <AdminHomePage/>
    },
    {
      path:"/admin/companies",
      element: <Companies/>
    },
    {
      path:"/admin/companies/create",
      element: <ProtectedRoute>
        <CompanyCreate/>
      </ProtectedRoute>
    },
    {
      path:"/admin/companies/:id",
      element:<ProtectedRoute>
        <CompanySetup/>
      </ProtectedRoute>
    },
    {
      path:"/admin/jobs",
      element:<ProtectedRoute>
      <Adminjobs/>
      </ProtectedRoute>
    },
    {
      path:"/admin/jobs/create",
      element:<ProtectedRoute>
        <PostJob/>
      </ProtectedRoute>
    },
    {
      path:"/admin/jobs/:id/applicants",
      element: <ProtectedRoute>
        <Applicants/>
      </ProtectedRoute>
    },

  ])
  return (
    <>
      
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
