import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
        const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {"Content-Type": "application/json",},
        withCredentials: true,
      });
      if (response.data.success) {
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

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="text-xl font-bold mb-5">Login</h1>

          <div className="mb-2 ">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-2 ">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            Role:
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full ">
            Login
          </Button>
          <br />
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              SignUp
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
