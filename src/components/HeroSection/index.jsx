import React from "react";
import Img from "../../assets/img/image22.png";
import { FaStar, FaHeart } from "react-icons/fa";
import { MdDeliveryDining, MdLocationOn } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 bg-gradient-to-r from-[#fff5e5] to-[#fffaf3]">
      <div className="flex-1 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Desire{" "}
          <span className="bg-orange-400 text-white px-3 py-1 rounded-md inline-block">
            Food
          </span>
          <br />
          for Your Taste
        </h1>
        <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
          Food is what we eat to stay alive and healthy. It comes in many
          different forms and flavors, from fruits and vegetables to meats and
          grains.
        </p>
        <a
          href="#"
          className="bg-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300"
        >
          Order Now
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative w-full max-w-sm sm:max-w-md mb-10 lg:mb-0">
        {/* Orange Background Shape */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-orange-400 rounded-3xl -z-10 hidden sm:block"></div>

        {/* Main Image */}
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg bg-orange-400 mt-14">
          <img
            src={Img}
            alt="Pizza Girl"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        {/* Delivery Badge */}
        <div className="absolute top-16 left-2 sm:top-4 sm:left-4 bg-white shadow-md px-3 py-2 rounded-xl flex items-center gap-2 z-20 text-xs sm:text-sm">
          <MdDeliveryDining className="text-red-500" size={20} />
          <div>
            <p className="font-semibold text-gray-800">Delivery</p>
            <p className="text-gray-500">in 30 min</p>
          </div>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white shadow-md px-3 py-2 rounded-xl flex items-center gap-2 z-20 text-xs sm:text-sm">
          <MdLocationOn className="text-orange-500" size={20} />
          <div>
            <p className="font-semibold text-gray-800">Location</p>
            <p className="text-gray-500">at destination</p>
          </div>
        </div>

        {/* User Badge */}
        <div className="absolute -bottom-6 left-2 sm:left-4 bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-3 z-20 text-xs sm:text-sm">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Ali Ahmad"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">Ali Ahmad</p>
            <div className="flex items-center gap-2 text-gray-500">
              <FaStar className="text-yellow-400" />
              4.5
              <FaHeart className="text-red-500 ml-2" />
              1k Likes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
