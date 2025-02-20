import * as React from "react";

const HeroImage = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Background Image */}
            <img
                src="https://via.placeholder.com/1600x600"
                alt="Hero Banner"
                className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                    Find Your Dream Property
                </h1>
            </div>
        </div>
    );
};

export default HeroImage;
