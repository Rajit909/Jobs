import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const AdminHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* <!-- Hero Section --> */}
        <div className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">
              Find the Best Talent for Your Company
            </h1>
            <p className="mt-4 text-lg">
              Post jobs, review applications, and hire the best candidates, all
              in one place.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-white text-blue-600 py-3 px-6 rounded-lg shadow"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* <!-- Features Section --> */}
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Wide Talent Pool</h3>
              <p className="mt-2 text-gray-600">
                Access thousands of candidates from various fields.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Smart Matching</h3>
              <p className="mt-2 text-gray-600">
                Our AI-based matching system brings the best candidates to you.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/100"
                alt="Feature 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Efficient Hiring Process</h3>
              <p className="mt-2 text-gray-600">
                Manage your hiring process with ease and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Testimonials Section --> */}
        <div className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="  bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">
                  "This platform made our hiring process seamless and
                  efficient."
                </p>
                <p className="mt-4 text-blue-600 font-semibold">
                  - John Doe, TechCorp
                </p>
              </div>
              <div className="  bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">
                  "We found amazing talent quickly and easily. Highly
                  recommended!"
                </p>
                <p className="mt-4 text-blue-600 font-semibold">
                  - Jane Smith, Innovate Inc.
                </p>
              </div>
              <div className="  bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">
                  "We found amazing talent quickly and easily. Highly
                  recommended!"
                </p>
                <p className="mt-4 text-blue-600 font-semibold">
                  - Jane Smith, Innovate Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 text-white py-12 ">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold">Ready to Hire?</h2>
            <a
              href="#"
              className="mt-4 inline-block bg-white text-blue-600 py-3 px-6 rounded-lg shadow"
            >
              Post a Job Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHomePage;
