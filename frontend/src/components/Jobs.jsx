import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Jobs = () => {
  const [filterJobs, setFilterJobs] = useState()
  const {allJobs} = useSelector((store) => store.job)
  
  return (
    <>
    <Navbar/>
      <div className="max-w-7xl mx-auto mt-5">
        <div className='flex  gap-5'>
            <div className="w-[20%]">
               <FilterCard/>
            </div>
            {
              allJobs.length <= 0 ? <span>Job not Found</span> : (
                <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {
                        allJobs.slice(0, 9).map((job) => (
                          <div>
                          <Job key={job?._id} job={job}/>
                          </div>
                        ))
                      }
                </div>
              </div>
              ) 
            }
           
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Jobs