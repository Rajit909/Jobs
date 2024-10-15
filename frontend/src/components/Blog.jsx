import React from "react";

const Blog = () => {
  return (
    <>
      <section class="py-12">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
            Career Advice & Resources
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-400 w-[100%] h-36">
              </div>

              <h3 class="text-xl font-semibold text-gray-800">
                How to Ace Your Next Job Interview
              </h3>
              <p class="text-gray-600 mt-2">
                Tips and tricks for making a great impression during your job
                interview.
              </p>
              <a href="#" class="text-indigo-500 mt-4 inline-block">
                Read More
              </a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-400 w-[100%] h-36">
            </div>
              <h3 class="text-xl font-semibold text-gray-800">
                Top 10 Resume Mistakes to Avoid
              </h3>
              <p class="text-gray-600 mt-2">
                Common resume mistakes that could be costing you your dream job.
              </p>
              <a href="#" class="text-indigo-500 mt-4 inline-block">
                Read More
              </a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-400 w-[100%] h-36">
            </div>
              <h3 class="text-xl font-semibold text-gray-800">
                Navigating a Career Change Successfully
              </h3>
              <p class="text-gray-600 mt-2">
                How to switch careers and find the right job for you.
              </p>
              <a href="#" class="text-indigo-500 mt-4 inline-block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
