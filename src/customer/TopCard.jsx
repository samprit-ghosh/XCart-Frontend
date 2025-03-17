// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const categories = [
//   {
//     label: "Kilos",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
//     link: "/grocery-supermart-store",
//   },
//   {
//     label: "Mobiles",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
//     link: "/mobile-phones-store",
//   },
//   {
//     label: "Fashion",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
//   },
//   {
//     label: "Electronics",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
//   },
//   {
//     label: "Home & Furniture",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
//   },
//   {
//     label: "Appliances",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
//     link: "/tvs-and-appliances-new-clp-store",
//   },
//   {
//     label: "Flight Bookings",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
//     link: "/travel/flights",
//   },
//   {
//     label: "Beauty, Toys & More",
//     img: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
//   },
//   {
//     label: "Two Wheelers",
//     img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
//   },
// ];

// export default function TopCard() {
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Handle category click
//   const handleCategoryClick = () => {
//     navigate("/product"); // Always navigate to "/product"
//   };

//   return (
//     <div className="ml-4 mr-4 mb-4 pt-4">
//       <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 ">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="text-center cursor-pointer" // Add cursor-pointer for better UX
//             onClick={handleCategoryClick} // Use the same onClick handler for all categories
//           >
//             <div aria-label={category.label} className="block">
//               <img
//                 src={category.img}
//                 alt={category.label}
//                 className="w-16 h-16 mx-auto mb-2 rounded-full shadow-md hover:scale-105 transition-transform"
//               />
//               <span className="text-sm font-medium text-gray-700">
//                 {category.label}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    label: "Kilos",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
    link: "/grocery-supermart-store",
  },
  {
    label: "Mobiles",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
    link: "/mobile-phones-store",
  },
  {
    label: "Fashion",
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    label: "Electronics",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
  },
  {
    label: "Home & Furniture",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    label: "Appliances",
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    link: "/tvs-and-appliances-new-clp-store",
  },
  {
    label: "Flight Bookings",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    link: "/travel/flights",
  },
  {
    label: "Beauty, Toys & More",
    img: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    label: "Two Wheelers",
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
  },
];

export default function TopCard() {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/product");
  };

  return (
    <div className="ml-4 mr-4 mb-4 pt-4">
      {/* Mobile: Inline scrollable flex | Desktop: Grid */}
      <div className="flex overflow-x-auto space-x-4 p-4 md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 md:space-x-0">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center cursor-pointer flex-shrink-0 w-24 md:w-auto"
            onClick={handleCategoryClick}
          >
            <div aria-label={category.label} className="block">
              <img
                src={category.img}
                alt={category.label}
                className="w-16 h-16 mx-auto mb-2 rounded-full shadow-md hover:scale-105 transition-transform"
              />
              <span className="text-sm font-medium text-gray-700">
                {category.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
