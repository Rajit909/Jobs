import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../ui/button";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

    const formData = new FormData();
    Object.keys(input).forEach((key) => {
      formData.append(key, input[key]);
    });
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      // toast.error(error.response.data.message);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          encType="multipart/form-data"
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="text-xl font-bold mb-5">Signup</h1>
          <div className="mb-2 ">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-2 ">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="+91 746-413-1234"
            />
          </div>
          <div className="mb-2 ">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Create your password"
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
          <div className="flex items-center gap-2 mb-4">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              name="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>
          {}
          <Button type="submit" className="w-full ">
            Signup
          </Button>
          <br />
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
