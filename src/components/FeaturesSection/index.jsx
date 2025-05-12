import React from "react";
import Img from "../../assets/img/01.svg";
import Img2 from "../../assets/img/02.svg";
import Img3 from "../../assets/img/image25.svg";
import Img4 from "../../assets/img/image26.svg";
const features = [
  {
    icon: <img src={Img} alt="" className=" w-12 h-12 mx-auto" />,
    title: "Top Quality",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    cta: "Learn More",
    highlight: false,
  },
  {
    icon: <img src={Img2} alt="" className=" w-12 h-12 mx-auto" />,
    title: "Fast Delivery",
    desc: "Our rocket-speed delivery ensures your food stays fresh and hot.",
    cta: "Learn More",
    highlight: true,
  },
  {
    icon: <img src={Img3} alt="" className=" w-12 h-12 mx-auto" />,
    title: "Affordable",
    desc: "We offer competitive pricing without compromising on quality.",
    cta: "Learn More",
    highlight: false,
  },
  {
    icon: <img src={Img4} alt="" className=" w-12 h-12 mx-auto" />,
    title: "Mobile Friendly",
    desc: "Order your favorite meals easily from your phone or tablet.",
    cta: "Learn More",
    highlight: false,
  },
];

export default function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 bg-gradient-to-r from-white to-orange-50">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 text-center transition hover:shadow-xl"
        >
          {feature.icon}
          <h3 className="mt-4 mb-2 font-semibold text-lg">{feature.title}</h3>
          <p className="text-gray-500 mb-4">{feature.desc}</p>
          <span
            className={`font-semibold transition cursor-pointer hover:underline ${
              feature.highlight
                ? "text-red-500"
                : "text-gray-800 hover:text-red-400"
            }`}
          >
            {feature.cta}
          </span>
        </div>
      ))}
    </section>
  );
}
