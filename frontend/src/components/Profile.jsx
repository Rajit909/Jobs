import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useDispatch, useSelector } from "react-redux";
import { CircleUser, Contact, Mail, Pen, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { Badge } from "./ui/badge";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

// const skills = ["Html", "Css", "Javascript", "Reactjs"];
const isResume = true;

const Profile = () => {
  const { user } = useSelector((store) => store.auth);
const dispatch = useDispatch();
const navigate = useNavigate();

  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  console.log(user?.profile?.profilePhoto);


  
  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      console.log(response);
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
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
          <div className="flex items-center gap-4">
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
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
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
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-4 bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Table   */}
        <AppliedJobTable />
      </div>
        <div className="flex items-center justify-center p-2 mt-8">
          <Button onClick={logoutHandler} className="bg-gray-400 w-full px-8 bg-opacity-45 border-gray-500 border-[2px]" variant="outline">Logout</Button>
        </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />

      <Footer />
    </>
  );
};

export default Profile;
