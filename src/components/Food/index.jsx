import React from "react";
import Img from "../../assets/img/1.png";
import Img2 from "../../assets/img/2.png";
import Img3 from "../../assets/img/3.png";
import Img4 from "../../assets/img/4.png";
import Img5 from "../../assets/img/5.png";
import Img6 from "../../assets/img/6.png";
import Img7 from "../../assets/img/Italian Food/ItalianFood1.png";
import Img8 from "../../assets/img/Italian Food/ItalianFood2.png";
import Img9 from "../../assets/img/Italian Food/ItalianFood3.png";
import Img10 from "../../assets/img/Italian Food/ItalianFood4.png";
import Img11 from "../../assets/img/Italian Food/ItalianFood5.png";
import Img12 from "../../assets/img/Italian Food/ItalianFood6.png";
import Img13 from "../../assets/img/America Food/AmericaFood1.png";
import Img14 from "../../assets/img/America Food/AmericaFood2.png";
import img15 from "../../assets/img/America Food/AmericaFood3.png";
import img16 from "../../assets/img/America Food/AmericaFood4.png";
import img17 from "../../assets/img/America Food/AmericaFood5.png";
import img18 from "../../assets/img/America Food/AmericaFood6.png";

const dishes = [
  {
    id: 1,
    title: "Breakfast Food",
    image: Img,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 2,
    title: "Health Breakfast",
    image: Img2,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 3,
    title: "Breakfast Food",
    image: Img3,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 4,
    title: "Breakfast Food",
    image: Img4,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 5,
    title: "Breakfast Food",
    image: Img5,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 6,
    title: "Breakfast Food",
    image: Img6,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 7,
    title: "Pasta",
    image: Img7,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 8,
    title: "Lasagna",
    image: Img8,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 9,
    title: "Pizza",
    image: Img9,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 10,
    title: "Tiramisu",
    image: Img10,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 11,
    title: "Cannoli",
    image: Img11,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 12,
    title: "Ice cream",
    image: Img12,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 13,
    title: "Nachos",
    image: Img13,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 14,
    title: "Cheese Quesadilla",
    image: Img14,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 15,
    title: "Chicken Tenders",
    image: img15,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 16,
    title: "Milkshake",
    image: img16,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 17,
    title: "Doughnuts",
    image: img17,
    price: "$230",
    rating: 5,
    health: false,
  },
  {
    id: 18,
    title: "Chips and Guacamole",
    image: img18,
    price: "$230",
    rating: 5,
    health: false,
  },
];

const breakfastDishes = dishes.filter((dish) =>
  dish.title.toLowerCase().includes("breakfast")
);

const italianDishes = dishes.filter((dish) =>
  ["pasta", "pizza", "lasagna", "tiramisu", "cannoli", "ice cream"].some(
    (keyword) => dish.title.toLowerCase().includes(keyword)
  )
);

const AmericaDishes = dishes.filter((dish) =>
  [
    "nachos",
    "cheese quesadilla",
    "chicken tenders",
    "milkshake",
    "doughnuts",
    "chips and guacamole",
  ].some((keyword) => dish.title.toLowerCase().includes(keyword))
);

const renderDishCard = (dish) => (
  <div key={dish.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <img
      src={dish.image}
      alt={dish.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{dish.title}</h3>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array(dish.rating)
            .fill()
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </div>
        <span className="text-lg font-bold">{dish.price}</span>
      </div>
      <button className="mt-4 w-full bg-red-500 text-white text-sm py-2 rounded-full hover:bg-red-600">
        Buy Now
      </button>
    </div>
  </div>
);

const Food = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-10 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Our Best Seller Dishes <span>🔥🔥</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomato all tossed in your choice of
          dressing.
        </p>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-b pb-2">
          Breakfast Foods
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakfastDishes.map(renderDishCard)}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 border-b pb-2">
          Italian Dishes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {italianDishes.map(renderDishCard)}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 border-b pb-2 mt-5">
          America Dishes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AmericaDishes.map(renderDishCard)}
        </div>
      </section>
    </div>
  );
};

export default Food;
