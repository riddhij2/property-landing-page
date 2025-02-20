import * as React from "react";
import TopNavigation from "./components/Header/TopNavigation";
import HeroImage from "./components/Header/HeroImage";
import AboutUs from "./components/MainContent/AboutUs";
import Reviews from "./components/MainContent/Reviews";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Centered Page Wrapper */}
            <div className="mx-auto">
                {/* Header Section */}
                <TopNavigation />
                <HeroImage />

                {/* Main Content (70:30 Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 my-16">
                    {/* Left (70%) */}
                    <div className="md:col-span-7">
                        <AboutUs />
                    </div>

                    {/* Right (30%) */}
                    <div className="md:col-span-3">
                        <Reviews />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};
export default App;
