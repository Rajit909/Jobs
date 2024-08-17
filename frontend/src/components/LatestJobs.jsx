import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'


// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const LatestJobs = () => {
    const {allJobs} = useSelector((store) => store.job)
    console.log(allJobs)
  return (
    <>
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className="text-4xl"><span className='text-[#6a38c2]'>Latest & Top</span>Job Openings </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 mx-2">
                {
                 allJobs.length <= 0 ? <span>No Job Available</span> : 
                 allJobs.slice(0,6).map((job) => 
                    <LatestJobCards key={job._id} job={job} />
                )
                }
            </div>
        </div>
    </> )
}

export default LatestJobs