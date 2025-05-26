import React from "react";
// import App1 from "./App1.jsx";

const About = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-center bg-gray-10 object-fill w-full"
        style={{ backgroundImage: "url(./src/Images/banner.jpeg)" }}
      >
        <section className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          {/* Text Section */}
          <div className="max-w-lg text-center  md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 ">
              Welcome To My Restaurant
            </h2>
            <p className="mt-6 text-white leading-relaxed text-2xl">
              At{" "}
              <span className="font-semibold text-blue-600">
                Techinfo HM Restaurant
              </span>
              , we blend flavors and culture to bring you a unique dining
              experience. Our dishes are crafted from the freshest ingredients
              to ensure quality and taste.
            </p>
            <p className="mt-4 text-white text-2xl">
              Whether you're indulging in a classic recipe or exploring a new
              creation, we promise a meal to remember. Join us on a flavorful
              journey that celebrates tradition and innovation!
            </p>
          </div>

          {/* Image Section */}
          {/* <div className="w-full md:w-1/2">
          <img 
            src="./src/assets/Images/banner.jpeg" 
            alt="Restaurant Image" 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div> */}
        </section>
      </div>
      {/* <App1/> */}
    </div>
  );
};

export default About;
