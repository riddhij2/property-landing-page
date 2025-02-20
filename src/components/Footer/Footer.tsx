const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="mb-8 text-center">
                    <h3 className="text-xl font-semibold">Stay Updated</h3>
                    <p className="text-gray-400 text-sm mt-2">
                        Enter your email to receive the latest updates.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 w-64 text-gray-900 rounded-l-lg focus:outline-none"
                        />
                        <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Us */}
                    <div>
                        <h4 className="text-lg font-semibold">About Us</h4>
                        <p className="text-gray-400 text-sm mt-2">
                            We are committed to building modern, luxurious, and sustainable properties.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Properties</a></li>
                            <li><a href="#" className="hover:text-white">Consultation</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex justify-center md:justify-start mt-2 space-x-4">
                            <a href="#" className="hover:text-blue-500">🔵 Facebook</a>
                            <a href="#" className="hover:text-pink-500">📸 Instagram</a>
                            <a href="#" className="hover:text-blue-400">💼 LinkedIn</a>
                            <a href="#" className="hover:text-blue-300">🐦 Twitter</a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2025 PropertyHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
