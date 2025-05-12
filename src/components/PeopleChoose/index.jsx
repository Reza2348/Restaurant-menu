import React from "react";
import { FaTruck, FaUtensils, FaHamburger } from "react-icons/fa";
import Img from "../../assets/img/image28.png";

const reasons = [
  {
    icon: <FaTruck className="text-orange-400 w-8 h-8" />,
    title: "Convenient and Reliable",
    desc: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
  },
  {
    icon: <FaUtensils className="text-yellow-400 w-8 h-8" />,
    title: "Variety of Options",
    desc: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
  },
  {
    icon: <FaHamburger className="text-red-400 w-8 h-8" />,
    title: "Eat Burger",
    desc: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
  },
];
const PeopleChoose = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-between p-4 md:p-12 bg-gradient-to-r from-white to-orange-50">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={Img}
          alt="Food"
          className="rounded-lg object-cover shadow-lg max-w-full"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why People Choose us?
        </h2>
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="shrink-0">{reason.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{reason.title}</h3>
                <p className="text-gray-500">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleChoose;
