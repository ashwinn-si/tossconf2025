import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="w-full py-8 px-4 text-center"
            style={{
                background:
                    "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white">
                    <p className="text-lg font-medium">
                        நன்றி! இந்த இணைய பக்கத்தின் மூல நிரல் இங்கே
                        பகிரப்பட்டுள்ளது
                    </p>
                
                </div>

                <div className="mt-6 text-white/80 text-sm flex flex-wrap justify-center items-center gap-2">
                    <span>© 2025 தமிழ் கட்டற்ற மென்பொருள் மாநாடு</span>
                    <span className="hidden md:inline">|</span>
                    <span className="flex items-center">
                        <span className="mr-1">தமிழால் இணைந்தோம்</span>
                        <FaHeart className="text-red-400 mx-1" />
                    </span>
                </div>
            </div>
        </footer>
    );
}
