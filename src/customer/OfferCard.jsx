import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    label: "Women's Jewellery",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/d/n/6/na-na-neck-40n-fallalery-original-imaggtnmrvbmvqgd.jpeg?q=70",
    price: "From ₹199",
  },
  {
    label: "Top Offers",
    img: "https://rukminim2.flixcart.com/image/612/612/krxtrww0/shoe/t/8/1/8-prrb3555black-8-provogue-black-original-imag5m98g9ehhuys.jpeg?q=70",
    price: "Min. 70% Off",
  },
  {
    label: "Lavie, Caprese & more",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/b/q/v/-original-imah8gdggzzbjrsk.jpeg?q=70",
    price: "Min. 70% Off",
  },
  {
    label: "Kurta Sets",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/2/t/d/xxl-embro001-tibra-attire-original-imah7hypr9h8ezan.jpeg?q=70",
    price: "Min. 70% Off",
  },
  {
    label: "Dresses & Tops",
    img: "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/dress/9/l/d/xl-ldr11591-neonpink-pluss-original-imagc7sud8ndp2cf.jpeg?q=70",
    price: "Under ₹499",
  },
  {
    label: "PUMA, ADIDAS...",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/7/i/-original-imah9mg8948zdheh.jpeg?q=70",
    price: "Min. 65% Off",
  },
  {
    label: "Step in style",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/i/3/-original-imah9mgedyae99av.jpeg?q=70",
    price: "From ₹299",
  },
  {
    label: "Levi's. Killer...",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/u/x/32-l-pg3-hybd-1050-slmft-spcbl-lawman-original-imah95n6cyufav5f.jpeg?q=70",
    price: "60-80% Off",
  },
];

const OfferCard = () => {

    const navigate = useNavigate(); // Initialize useNavigate
  
    // Handle category click
    const handleCategoryClick = () => {
      navigate("/product"); // Always navigate to "/product"
    };
  
  const items = categories.map((category, index) => (
    <div onClick={handleCategoryClick}
      key={index}
      className="flex-shrink-0 w-54 mx-2 rounded-lg overflow-hidden shadow-md" 
    >
      <a
        href=""
        className="block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-square" >
          <img
            src={category.img}
            alt={category.label}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 text-center">
          <p className="text-sm font-medium text-gray-700 truncate">
            {category.label}
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-2">
            {category.price}
          </p>
        </div>
      </a>
    </div>
  ));



  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={{
        0: { items: 1 }, // Show 1 item on very small screens
        850: { items: 2 }, // Show 2 items on slightly larger screens
        720: { items: 2 }, // Show 3 items on tablets
        1100: { items: 3 },
        1200: { items: 5 }, // Show 5 items on desktop
      }}
      controlsStrategy="responsive"
      disableDotsControls
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
};

export default OfferCard;