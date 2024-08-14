import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "React Developer",
    "Node Developer",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    "Web Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Software Engineer",
    "Python Developer",
    "Java Developer",
    "Android Developer",
    "iOS Developer",
    "UI/UX Designer",
    "Product Manager",
    "Project Manager",
    "Business Analyst",
    "Quality Analyst",
    "Quality Engineer",
    "Data Analyst",
    "Data Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Cyber Security Engineer",
    "Network Engineer",
    "System Engineer",
    "System Administrator",
    "Database Administrator",
    "Customer Support executive",
    "Customer Success Manager",
    "Sales Executive",
    "Digital Marketing Executive",
    "Content Writer",
    "SEO Specialist",
    "Social Media Manager",
    "Digital Marketing Manager",
    "Content Marketing Manager",
    "Content Marketing Specialist",
    "Content Marketing Executive", 
    "Content Marketing Associate",
    "Social Media Specialist",
    "Social Media Executive",
    "Social Media Associate",
    "Social Media Coordinator",
    "Social Media Assistant",
    "Social Media Administrator",
    "Social Media Manager",
    "Social Media Director",
    "Customer Support Associate",
    "Customer Support Specialist",
    "Finance Manager",
    "Accountant",
    "HR Manager",
    "HR Executive",
    "HR Recruiter",
    "HR Generalist",
    "HR Specialist",
    "HR Coordinator",
    "HR Assistant",
    "HR Administrator",
    "HR Consultant",
    "HR Business Partner",
    "HR Director",
    "Sales Manager",
    "Sales Associate",
    "Sales Specialist",
    "Sales Consultant",
    "Sales Coordinator",
    "Sales Assistant",
    "Sales Administrator",
    "Sales Executive",
    "Sales Representative",
    "Sales Director",
    "Marketing Manager",
    "Marketing Executive",
    "Marketing Specialist",
    "Marketing Consultant",
    "Marketing Coordinator",
    "Marketing Assistant",
    "Marketing Administrator",
    "Marketing Associate",
  ];
const CategoryCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchJobHandler = (query) => {
        // dispatch(setSearchedQuery(query));
        navigate("/jobs");
    };


  return (
    <>
         <Carousel className="w-full max-w-md lg:max-w-2xl mx-auto my-20 ">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    </>
  )
};

export default CategoryCarousel;