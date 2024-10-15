import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CircleUser, LogIn, LogOut, User, User2, UserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

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
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <Link to={`${location.pathname !== "/hire" ? ("/"):("/hire")}`}>
              <h2 className=" flex items-center text-2xl font-bold ">
                <img src="/logo.jpg" alt="logoImage" className="w-12" />
                <span className="">
                  {/* <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-xl box-content font-extrabold text-transparent text-center select-none">
                    ROJGAR
                  </span> */}
                  <h1 className=" font-sans relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-xl font-extrabold text-transparent text-center select-auto">
                    {
                      location.pathname === "/hire" ? `
                        ROJGAR | HIRE
                      ` : "ROJGAR | JOBS"
                    }
                  </h1>
                </span>
              </h2>
            </Link>
          </div>
          <div className="md:flex items-center gap-12 mr-4 hidden">
            <ul className="flex font-medium items-center gap-4">
              {user && user.role === "recruiter" ? (
                <>
                 {
                  location.pathname !== "/admindashboard" && (
                    <li>
                    <Link to={"/admindashboard"}>Dashboard</Link>
                  </li>)
                 }
                
                {
                  location.pathname !== "/admin/companies" && (
                    <li>
                    <Link to={"/admin/companies"}>Compnies</Link>
                  </li>
                  )
                }
                {
                  location.pathname !== "/admin/jobs" && (
                    <li>
                    <Link to={"/admin/jobs"}>My Jobs</Link>
                  </li>
                  )
                }
                </>
              ) : (
                <>
                  {
                    location.pathname !== "/hire" && (
                    <>
                    {
                      ((location.pathname !== "/")&&(location.pathname !== "/signup")&&(location.pathname !== "/login")) && (
                        <li>
                        <Link to="/">Home</Link>
                      </li>
                      )
                    }
                 {
                  ((location.pathname !== "/jobs")&&(location.pathname !== "/login")&&(location.pathname !== "/signup")) && (
                    <li>
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  )
                 }
                    </>
                    
                    )
                  }
           
                </>
              )}
            </ul>
            {!user ? (
              <div className="flex items-center justify-between gap-2">
               
                {
                  ((location.pathname !== "/login")) && (
                    <Link to="/login" className="flex items-center gap-1">
                      <LogIn color="blue"/>
                        Login
                    </Link>
                  )
                }

                {
                  location.pathname !== "/signup" && (
                    <Link to="/signup" className="flex items-center mx-4">
                      <UserRound  color="blue" />
                        Sign Up
                    </Link>
                  )
                }
                {
                  ((location.pathname !== "/signup") &&(location.pathname !== "/login") &&(location.pathname !== "/hire")&&(location.pathname !== "/jobs")) && (
                    <Link to="/hire">
                      <Button className="bg-[#6a38c2] hover:bg-[#5b30a6] rounded-full">
                      Looking for a talent
                      </Button>
                    </Link>
                  )
                }
              
                {
                  ((location.pathname !== "/signup") &&(location.pathname !== "/") &&(location.pathname !== "/login") &&(location.pathname !== "/jobs")) && (
                    <Link to="/">
                      <Button className="bg-[#6a38c2] hover:bg-[#5b30a6] rounded-full">
                        Looking for a job
                      </Button>
                    </Link>
                  )
                }
              </div>
            ) : (

              location.pathname !== ("/adminprofile" && "/profile") && (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    {
                      user?.profile?.profilePhoto ? (
                        <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="Profile"
                      />
                      ): (
                        <div className="py-2">
                        <CircleUser/>
                        </div>
                      )
                    }
                   
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="">
                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="Profile"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                        <p className=" text-center text-purple-700 rounded-sm bg-gray-200 mt-1 pb-1">
                          {user.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Link to={`${user.role === "recruiter" ? "/adminprofile" : "/profile"}`}>
                          <Button variant="link">View Profile</Button>
                        </Link>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link" onClick={logoutHandler}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
