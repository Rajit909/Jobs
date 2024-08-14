import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CircleUser, LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Navbar = () => {
  const {user} = useSelector(store=> store.auth)
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <Link to="/">
            <h2 className=" flex items-center text-2xl font-bold ">
              <img src="/logo.jpg" alt="logoImage" className="w-12"/>
              Job<span className="text-[#f83002]">Search</span>
            </h2>
            </Link>
          </div>
          <div className="flex items-center gap-12 mr-4">
            <ul className="flex font-medium items-center gap-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <Link to={"/jobs"}>
                  <li>Jobs</li>
                </Link>
                <Link to={"/browse"}>
                  <li>Browse</li>
                </Link>
            </ul>
            {
              !user ? (
                <div className="flex items-center justify-between gap-2">
                  <Link to="/login">
                     <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/signup">
                <Button className="bg-[#6a38c2] hover:bg-[#5b30a6]">SignUp</Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer p-2">
                    {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                    <CircleUser/>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="">
                        <div className="flex gap-2 space-y-2">
                            <Avatar className="cursor-pointer">
                                {/* <AvatarImage src="https://github.com/shadcn.png" alt="Profile" /> */}
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
                                <User2/>
                                <Link to={'/profile'}>
                                <Button variant="link">
                                    View Profile
                                </Button>
                                </Link>

                            </div>
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <LogOut/>
                                    <Button variant="link">
                                        Logout
                                    </Button>
                                </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
              )
            }
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;