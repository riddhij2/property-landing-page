import * as React from "react";
const Reviews = () => {
    const reviews = [
        {
            name: "Alice Johnson",
            text: "Amazing experience! The team was professional and delivered beyond expectations.",
            rating: 5,
        },
        {
            name: "Michael Smith",
            text: "Great quality and timely delivery. Highly recommend their services!",
            rating: 4,
        },
        {
            name: "Samantha Lee",
            text: "Very satisfied with my new property. The design and build quality are top-notch!",
            rating: 5,
        },
    ];

    return (
        <div className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Clients Say</h2>

            {/* Reviews List */}
            <div className="mt-8 space-y-6 max-w-3xl mx-auto">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-gray-700 mt-2">{review.text}</p>

                        {/* Star Rating */}
                        <div className="flex mt-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={`text-yellow-500 ${i < review.rating ? "fill-current" : "opacity-50"}`}>
                                    ⭐
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
