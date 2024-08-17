import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const LatestJobCards = ({job}) => {
  const navigate = useNavigate()
  
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  return (
    <>
      <div onClick={() => navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <p className="text-sm text-gray-500 ">
              {
                daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`
              }
            </p>
          <div>
            <h1 className=' font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>India</p>
          </div>
          <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className="text-sm text-gray-600">{job?.description}</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}</Badge>
            <Badge className={'text-[#f83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
          </div>
          {/* <div className='flex items-center gap-4 mt-4'> */}
              {/* <Button variant="outline">Details</Button> */}
              {/* <Button className="bg-[#7209b7]">Save For Later</Button> */}
          {/* </div> */}
      </div>
    </>
  )
}

export default LatestJobCards