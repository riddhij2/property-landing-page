import { useState } from "react";

const TopNavigation = () => {
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-gray-900">🏡 PropertyHub</div>

            {/* Center: Search Bar */}
            <div className="flex-1 mx-6">
                <input
                    type="text"
                    placeholder="Search by location, project, professionals..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Center: Dropdown Menus */}
            <div className="flex space-x-6">
                {["Inspiration", "Brands", "Professionals"].map((menu) => (
                    <div key={menu} className="relative">
                        <button
                            className="text-gray-700 hover:text-blue-600 flex items-center"
                            onClick={() => setDropdownOpen(dropdownOpen === menu ? null : menu)}
                        >
                            {menu} ⬇
                        </button>
                        {/* Dropdown Menu */}
                        {dropdownOpen === menu && (
                            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-md">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right: Book Consultant & User Profile */}
            <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Book Consultant
                </button>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-800 font-medium">John Doe</span>
                </div>
            </div>
        </nav>
    );
};

export default TopNavigation;
