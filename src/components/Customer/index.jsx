import React from "react";
import Img from "../../assets/img/Ellipse 2.png";
import Img2 from "../../assets/img/image.png";

const Customer = () => {
  return (
    <section className="bg-gradient-to-r from-white to-orange-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Customer <span className="text-red-600">Feedback</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            I recently dined at your restaurant and wanted to share my
            experience. The food was absolutely delicious, and I was impressed
            by the freshness of the ingredients. Each dish was bursting with
            flavor, and the portion sizes were perfect. The service was quick
            and efficient, and the staff was incredibly friendly and welcoming.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={Img}
                alt="Tayyab Sohail"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-red-600 font-semibold">Tayyab Sohail</h4>
                <p className="text-sm text-gray-500">UX/UI Designer</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full border border-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full border border-red-400"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative rounded-md p-3">
            <img src={Img2} alt="Chef" className="w-64 md:w-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
