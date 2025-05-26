import React from "react";
import { Link } from "react-router-dom";
import TableBooking from "./TableBooking";

const HomePage = () => {
  const dishData = [
    { name: "Dish One", img: "./src/images/Icons/Images/gujrati.jpeg" },
    { name: "Dish Two", img: "./src/images/Icons/Images/dosa.jpg" },
    { name: "Dish Three", img: "./src/images/Icons/Images/banner.jpeg" },
    // { name: "Dish Four", img: "./src/assets/Images/gujrati.jpeg" },
    // { name: "Dish Five", img: "./src/assets/Images/dosa.jpg" },
    // { name: "Dish Six", img: "./src/assets/Images/banner.jpeg" },
  ];

  return (
    <div className="bg-[#d7e3e7d7] text-white min-h-screen ">
      {/* Hero Section */}
      <section
        className="absulute flex flex-col items-center justify-center text-center py-20 bg-cover bg-center h-screen  "
        // style={{  backgroundImage: "url(./src/images/Icons/Images/house.jpg)" }}
        style={{ backgroundImage: "url(./src/assets/Icons/BB2.jpg)" }}
      >
        <h1 className=" relative text-4xl font-bold text-goldenrod">
          Welcome to Techinfo HM Restaurant  
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Experience the finest culinary delights made with passion and served
          with perfection.
        </p>
        <Link to="/menu">
          <button className="mt-6 bg-goldenrod text-black px-6 py-2 rounded-lg bg-yellow-500  hover:bg-yellow-700 transition font-black">
            Explore Menu
          </button>
        </Link>
      </section>
      {/* Featured Dishes */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-black">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {dishData.map((dish) => (
            <div
              key={dish.name}
              className="p-6 text-black bg-white rounded-lg shadow-lg text-center"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl mt-4">{dish.name}</h3>
              <p className="mt-2 text-[#e1470e]">
                A delightful combination of taste and tradition.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#d7e3e7d7] py-12 text-center">
        <h2 className="text-4xl font-semibold text-orange-700">
          Visit Us Today!
        </h2>
        <p className="mt-4 text-black">
          123 Food Street, Aurangabad, MH | Call: (123)7038526960
        </p>
       <Link to="/book_table">
        <button   className="mt-6 bg-goldenrod text-black px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-700 transition hover:text-white">
          Book a Table 
        </button>
       </Link>
      </section>
    </div>
  );
};

export default HomePage;
