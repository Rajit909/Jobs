import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AdminJobsTable from "./AdminJobsTable";

const AdminDashboard = () => {
  const { user } = useSelector((store) => store.auth);

  const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

  console.log(allAdminJobs)
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  

  useEffect(()=>{ 
      
      const filteredJobs = allAdminJobs.filter((job)=>{
                   
          if(!searchJobByText){
              return true;
          };
          return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

      });
      setFilterJobs(filteredJobs);
  },[allAdminJobs,searchJobByText])

  return (
    <>
      <Navbar />
      <section>
        <div className="min-h-screen flex">
         
          {/* <!-- Main Content --> */}
          <div className="flex-1 p-6">
            {/* <!-- Header --> */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4 text-2xl">
                <span className="text-gray-700 font-bold ">Welcome back, 
                {user && user.role === "recruiter" ? (
                <>
               {" "} 
                  <span className="text-purple-900 font-bold">
                {user.fullname}!
                  </span>
                </>
              ) : (
                <>
                {
                  null
                }
                </>
              )}
                   </span>
               
              </div>

            </div>

            {/* <!-- Stats Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Total Jobs</h3>
                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {
                    allAdminJobs.length
                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Active Candidates</h3>
                <p className="mt-2 text-3xl font-bold text-green-600">
                  {
                    allAdminJobs.length > 1 ?
                    (allAdminJobs[0]?.applications?.length +
                    allAdminJobs[1]?.applications?.length +
                    allAdminJobs[2]?.applications?.length +
                    allAdminJobs[3]?.applications?.length ) : (allAdminJobs[0]?.applications?.length || 0)

                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">New Applications</h3>
                <p className="mt-2 text-3xl font-bold text-purple-800">
                  {
                   ( allAdminJobs[0]?.applications?.length +
                    allAdminJobs[1]?.applications?.length +
                    allAdminJobs[2]?.applications?.length +
                    allAdminJobs[3]?.applications?.length) - 8 || 0
                  }
                </p>
              </div>
            </div>

            {/* <!-- Job Postings Table --> */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Recent Job Postings</h3>
              <AdminJobsTable />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
