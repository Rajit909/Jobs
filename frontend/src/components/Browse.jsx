import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Job from './Job'
import { useSelector } from 'react-redux'

const randomJobs = [1, 2, 3, 4]

const Browse = () => {
  const {allJobs} = useSelector((store) => store.job)

  return (
    <>
        <Navbar/>
            <main>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
                    {
                        allJobs.map((job, idx)=>{
                            return (
                                <Job key={idx} job={job}/>
                            )
                        })
                    }
                </div>
            </div>
            </main>
        <Footer/>
    </>
  )
}

export default Browse