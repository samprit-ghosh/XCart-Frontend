import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Sample image data
const mainCarouselData = [
    { image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a9794d68bc63e928.jpeg?q=20' },
    { image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/4e520a7582fa3b5b.jpg?q=20' },
    { image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3a6facee1b7510fc.jpg?q=20' },
];

const MainCarosel = () => {
    const items = mainCarouselData.map((item, index) => (
    
       
       <img 
            key={index} 
            className="carousel-image p-4" 
            src={item.image} 
            alt={`carousel-${index}`} 
            style={{ height: '300px', objectFit: 'cover' , borderRadius:"30px"}} // Adjust height
        />
    ));

    // Custom render function for dots
    const renderDots = ({ isActive }) => {
        return (
            <span
                style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'rgb(111, 6, 6)' : '#ccc', // Active and inactive colors
                    margin: '0px 5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            />
        );
    };

    return (
        <div className="carousel-container -mt-20 " style={{height:"500px"}}>
            <AliceCarousel 
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                renderDotsItem={renderDots} // Use the custom render function
            />
        </div>
    );
}

export default MainCarosel;