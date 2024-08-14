import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
            No.1 Job Portal - for Students and Recruiters
          </span>
          <h1 className=" text-5xl font-bold">
            Search,Apply <br />
            Get Your <span className="text[#6a38c2]">Dream Jobs</span>
          </h1>
          <p>
            Find the right job for you. Search through thousands of job offers
            and find the best suitable position. and recruiters can post jobs
            for free.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input 
            type="text" 
            placeholder="Search for jobs"
            onChange={(e)=> setQuery(e.target.value)}
            className="outline-none w-full border-none p-2"
            />
            <Button className="rounded-r-full bg-[#6a38c2] ">
                <Search className="h-5 w-5"/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
