import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { useDispatch } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import AdminJobsTable from './AdminJobsTable'

const Adminjobs = () => {
    useGetAllAdminJobs();
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchJobByText(input))
    }, [input])
  return (
    <>
    <Navbar/>
            <section>
            <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
        </div>
        <AdminJobsTable />
      </div>
            </section>
    <Footer/>
    </>
  )
}

export default Adminjobs