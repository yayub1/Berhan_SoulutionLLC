import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Berhan Solutions LLC</h2>
                    <p className="text-gray-400 text-sm">
                        Tax • Insurance • Immigration services you can trust.
                        Helping clients with reliable and professional solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">

                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-gray-400 text-sm">Las Vegas, NV</p>
                    <p className="text-gray-400 text-sm">Phone: (000) 000-0000</p>
                    <p className="text-gray-400 text-sm">Email: info@berhansolutions.com</p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} Berhan Solutions LLC. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;