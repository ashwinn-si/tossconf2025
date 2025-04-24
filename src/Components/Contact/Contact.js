import React from "react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

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

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                தொடர்புக்கு
            </h2>
            <div
                className="h-1 w-20 mb-8"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                }}
            ></div>

            <div className="grid grid-cols-1 gap-4 w-full">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex items-start">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                                }}
                            >
                                <FaUser className="text-white text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {contact.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {contact.role}
                                </p>

                                <div className="mt-2 space-y-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
