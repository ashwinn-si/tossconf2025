import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Navigation links
    const navLinks = [
        { title: "முகப்பு", path: "#home" },
        { title: "நிகழ்வைப் பற்றி", path: "#about" },
        { title: "பங்குபெறும் அமைப்புகள்", path: "#involvedOrganizations" },

        { title: "தொடர்பு", path: "#contact" },
        { title: "இடம்", path: "#location" },
    ];    

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const linkVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const linkItemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 },
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { type: "spring", stiffness: 300, damping: 20 },
        },
    };

    return (
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 ">
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.path}
                                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden justify-start w-full">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-expanded="false"
                        >
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-around"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 },
                                    }}
                                    className="w-6 h-0.5 bg-gray-700 block"
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 },
                                    }}
                                    className="w-6 h-0.5 bg-gray-700 block"
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 },
                                    }}
                                    className="w-6 h-0.5 bg-gray-700 block"
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="md:hidden fixed top-16 left-0 w-[50vw] h-screen bg-white/95 backdrop-blur-lg z-40 border-r border-gray-200 shadow-lg"
                    >
                        <motion.div
                            variants={linkVariants}
                            className="px-4 pt-6 pb-8 space-y-6"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.path}
                                    variants={linkItemVariants}
                                >
                                    <a
                                        href={link.path}
                                        className="block px-4 py-3 text-gray-700 text-lg font-medium border-b border-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
