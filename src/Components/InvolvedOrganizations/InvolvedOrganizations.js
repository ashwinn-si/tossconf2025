import React from "react";
import { motion } from "framer-motion";
import teamImage from "../../Assets/InvolvedTeam.jpeg";

export default function InvolvedOrganizations() {
    // List of organizations
    const organizations = [
        {
            title: "கணியம் அறக்கட்டளை",
            link: "https://kaniyam.com/",
        },
        {
            title: "இந்திய லினக்ஸ் பயனர் குழு சென்னை",
            link: "https://ilugc.in/",
        },
        {
            title: "காஞ்சி லினக்ஸ் பயனர் குழு",
            link: "https://kanchilug.wordpress.com/",
        },
        {
            title: "சென்னை ஒருங்கிணைந்த கட்டற்ற மென்பொருள் குழு",
            link: "https://fossunited.org/c/chennai",
        },
        {
            title: "பயிலகம்",
            link: "https://payilagam.com/",
        },
        {
            title: "சென்னை பைதான் பயனர் குழு",
            link: "https://www.chennaipy.org/",
        },
    ];

    return (
        <div
            className="py-16 px-4"
            style={{
                background:
                    "linear-gradient(135deg, rgba(24, 141, 208, 0.1) 0%, rgba(24, 195, 193, 0.2) 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Text container */}
                    <motion.div
                        className="w-full lg:w-1/2 mt-8 lg:mt-0"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                            பங்குபெறும் அமைப்புகள்
                        </h2>
                        <div
                            className="h-1 w-20 mx-auto lg:mx-0 mb-8"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                            }}
                        ></div>
                        <ul className="space-y-4">
                            {organizations.map((org, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                    }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                                        }}
                                    ></div>
                                    <a
                                        href={org.link}
                                        target="_blank"
                                        className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer"
                                    >
                                        {org.title}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image container */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={teamImage}
                            alt="பங்குபெறும் அமைப்புகள்"
                            className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
