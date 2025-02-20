import * as React from "react";
const AboutUs = () => {
    const properties = [
        "/property1.jpg",
        "/property2.jpg",
        "/property3.jpg",
        "/property4.jpg",
        "/property5.jpg",
        "/property6.jpg",
    ];

    return (
        <div className="py-16 px-6 bg-gray-100">
            {/* About Us Section */}
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
                <p className="mt-4 text-gray-700">
                    We are a top-rated property construction company committed to building modern,
                    sustainable, and luxurious properties for our clients.
                </p>
            </div>

            {/* Properties Created Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">Properties Created</h3>

                {/* Property Gallery Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {properties.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <img src={img} alt={`Property ${index + 1}`} className="w-full h-48 object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
