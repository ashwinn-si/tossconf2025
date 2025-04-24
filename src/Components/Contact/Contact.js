import React from "react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    const contacts = [
        {
            name: "சையது ஜாபர்",
            role: "நிகழ்வு ஒருங்கிணைப்பாளர்",
            phone: "+91-9176409201",
            email: "contact.syedjafer@gmail.com",
        },
        {
            name: "தங்க அய்யனார்",
            role: "நிகழ்வு ஒருங்கிணைப்பாளர்",
            phone: "+91-9597729724",
            email: "",
        },
    ];

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // Item animation variants
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                தொடர்புக்கு
            </motion.h2>
            <motion.div
                className="h-1 w-20 mb-8"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                }}
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>

            <motion.div
                className="flex flex-col w-full h-full justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {contacts.map((contact, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-2xl transition-shadow duration-300 border border-blue-400 hover:border-blue-800 w-full m-3"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <div className="flex items-start">
                            <motion.div
                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 0.5 + index * 0.2,
                                    duration: 0.3,
                                    type: "spring",
                                }}
                            >
                                <FaUser className="text-white text-xl" />
                            </motion.div>
                            <div>
                                <motion.h3
                                    className="text-xl font-bold text-gray-800"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.6 + index * 0.2,
                                        duration: 0.3,
                                    }}
                                >
                                    {contact.name}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.7 + index * 0.2,
                                        duration: 0.3,
                                    }}
                                >
                                    {contact.role}
                                </motion.p>

                                <motion.div
                                    className="mt-2 space-y-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.8 + index * 0.2,
                                        duration: 0.3,
                                    }}
                                >
                                    <div className="flex items-center">
                                        <FaPhone className="text-gray-500 mr-2" />
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                        >
                                            {contact.phone}
                                        </a>
                                    </div>

                                    {contact.email && (
                                        <div className="flex items-center">
                                            <FaEnvelope className="text-gray-500 mr-2" />
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
