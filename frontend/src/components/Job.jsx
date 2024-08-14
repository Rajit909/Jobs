import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button';
import { Bookmark, User2 } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';

const Job = ({job}) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  return (
    <>
      <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 ">
              4 days ago
            </p>
            <Button variant="outline" className="rounded-full" size="icon">
              <Bookmark/>
            </Button>
          </div>
          <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
              <Avatar>
                <User2/>
              </Avatar>
            </Button>
            <div>
              <h1 className="text-lg font-medium">company title</h1>
              <p className="text-sm text-gray-500">india</p>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold">Job title</h1>
            <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores?</p>
          </div>
          <div className='flex items-center gap-2 mt-4'>
              <Badge className={'text-blue-700 font-bold'} variant="ghost">12opening</Badge>
              <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">12 LPA</Badge>
          </div>
          <div className='flex items-center gap-4 mt-4'>
              <Button variant="outline">Details</Button>
              <Button className="bg-[#7209b7]">Save For Later</Button>
          </div>
      </div>
    </>
  )
}

export default Job