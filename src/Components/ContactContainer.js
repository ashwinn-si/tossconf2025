import React from "react";
import Contact from "./Contact/Contact";
import Location from "./Location/Location";

export default function ContactContainer() {
    return (
        <div className="px-4 py-12 bg-white">
            <div className="container mx-auto w-full h-full flex flex-col md:flex-row items-center justify-center gap-4">
               
                    <div className="w-full md:w-1/2 pr-0 md:pr-4 h-full">
                        <Contact />
                    </div>
                    <div className="w-full md:w-1/2 h-full pl-0 md:pl-4" id="location">
                        <Location />
                    </div>
               
            </div>
        </div>
    );
}
