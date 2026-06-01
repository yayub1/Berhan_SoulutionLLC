import React, { useState } from "react";
import Button from "../common/Button";
import ListNav from "../common/ListNav";
import navLinks from "../common/navLinks";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-primary border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Navbar */}
                <div className="h-20 flex items-center justify-between">

                    {/* Logo Section */}
                    <div
                        to="/"
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <img
                            src="/logo/BLogo.png"
                            alt="Berhan Solutions Logo"
                            className="w-12 h-12 object-contain"
                        />

                        <div>
                            <h1 className="text-secondary text-lg md:text-xl font-bold">
                                BERHAN SOLUTIONS
                            </h1>

                            <p className="text-secondary text-xs">
                                Professional Multi-Service Agency
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-6 text-secondary text-sm font-medium">
                        <ListNav
                            items={navLinks}
                            className="cursor-pointer hover:text-secondary/80 transition"
                        />
                    </ul>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <Button
                            className="bg-secondary px-5 py-3 rounded-md hover:opacity-90 transition"
                            onClick={() => alert("Admin Clicked")}
                        >
                            Admin
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-secondary text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden border-t border-gray-300 py-4">

                        <ul className="flex flex-col text-center gap-4 text-secondary font-medium">
                            <ListNav
                                items={navLinks}
                                className="cursor-pointer hover:text-secondary/80 transition"
                                onItemClick={() => setOpen(false)}
                            />
                        </ul>

                        <div className="mt-5">
                            <Button
                                className="bg-secondary w-full py-3 rounded-md hover:opacity-90 transition"
                                onClick={() => alert("Admin Clicked")}
                            >
                                Admin
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;