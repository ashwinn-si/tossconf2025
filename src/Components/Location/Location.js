import React from "react";
import Map from "./Map";
import { motion } from "framer-motion";

export default function Location() {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                இடம்
            </motion.h2>
            <motion.div
                className="h-1 w-20 mb-8"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                }}
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.4, duration: 0.5 }}
            ></motion.div>

            <motion.div
                className="w-full mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <p className="text-sm font-bold text-gray-700 bg-white p-4 rounded-lg border-blue-500 border hover:scale-105 transition-all duration-300">
                    செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம், பழைய மஹாபலிபுரம் சாலை,
                    காமராஜ் நகர், செம்மஞ்சேரி, சென்னை, தமிழ்நாடு – 600119
                </p>
            </motion.div>

            <motion.div
                className="w-full h-80 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <Map />
            </motion.div>
        </motion.div>
    );
}
