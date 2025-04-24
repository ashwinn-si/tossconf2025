import React from "react";
import Contact from "./Contact";
import Location from "./Location";

export default function ContactContainer() {
    return (
        <div className="px-4 py-12 bg-white">
            <div className="container mx-auto w-full h-full">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2 pr-0 md:pr-4 h-full">
                        <Contact />
                    </div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-4">
                        <Location />
                    </div>
                </div>
            </div>
        </div>
    );
}
