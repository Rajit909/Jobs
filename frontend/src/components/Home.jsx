import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Partner from "./Partner";
import Blog from "./Blog";
import JobCategories from "./JobCategories";

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    user && user.role === "recruiter" && navigate("/admindashboard");
  }, [user]);
  useGetAllJobs();
  return (
    <>
      <Navbar />
      <div>
        {/* hero */}
        <HeroSection />
        {/* categoryCarousel */}
        <CategoryCarousel />
        {/* Latest jobs */}
        <LatestJobs />
      </div>
      {/* partner */}
      <Partner />
      {/* Job categories section */}
      <JobCategories />

{/* blogs */}
      <Blog/>
     

      <Footer />
    </>
  );
};

export default Home;
