import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Building2, CircleUser, Contact, Mail, Pen } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import UpdateProfileDialog from "../UpdateProfileDialog";
import Footer from "../shared/Footer";
import AdminJobsTable from "./AdminJobsTable";
import { Badge } from "../ui/badge";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";

const AdminProfile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const { compnies, searchCompanyByText } = useSelector(
    (store) => store.company
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("companies", compnies);

  console.log("Admin", allAdminJobs[0]?.company);
  console.log(user?.profile?.profilePhoto);


  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      console.log(response);
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/hire");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 cursor-no-drop">
            <Avatar className="h-24 w-24">
              {user?.profile?.profilePhoto ? (
                <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
              ) : (
                <div className="py-10">
                  <CircleUser />
                </div>
              )}
            </Avatar>
            <div>
              <h1 className="font-medium text-xl cursor-no-drop">
                {user?.fullname}
              </h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2 cursor-no-drop">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2 cursor-no-drop">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
          <div className="flex items-center">
            {compnies[0].logo ? (
              <Avatar>
                <AvatarImage src={compnies[0].logo} />
              </Avatar>
            ) : (
              <Building2 />
            )}
            <span>{compnies[0].name}</span>
          </div>
          <div className="my-5">
            <h1 className="font-bold pb-2">Experties:</h1>
            <div className="flex items-center gap-1">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge className={"py-1"} key={index}>
                    {item}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5 px-4">Posted Jobs</h1>
        {/* Posted Job Table   */}
        <AdminJobsTable />
      </div>
      <div className="flex items-center justify-center p-2 mt-8">
          <Button onClick={logoutHandler} className="bg-gray-400 w-full px-8 bg-opacity-45 border-gray-500 border-[2px]" variant="outline">Logout</Button>
        </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />

      <Footer />
    </>
  );
};

export default AdminProfile;
