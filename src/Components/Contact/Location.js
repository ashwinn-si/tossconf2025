import React from "react";
import Map from "./Map";

export default function Location() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                இடம்
            </h2>
            <div
                className="h-1 w-20 mb-8"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                }}
            ></div>

            <div className="w-full mb-4">
                <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-md">
                    செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம், பழைய மஹாபலிபுரம் சாலை,
                    காமராஜ் நகர், செம்மஞ்சேரி, சென்னை, தமிழ்நாடு – 600119
                </p>
            </div>

            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <Map />
            </div>
        </div>
    );
}
