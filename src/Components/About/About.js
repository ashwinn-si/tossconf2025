import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../Assets/about.png";

export default function About() {
    return (
        <div className="px-4 py-6 bg-zinc">
            <motion.div
                className="flex flex-col lg:flex-row  items-center  gap-8 lg:gap-16 max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Image container */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={aboutImage}
                        alt="தமிழ் கட்டற்ற மென்பொருள் மாநாடு"
                        className="w-full max-w-sm h-auto rounded-lg object-cover"
                    />
                </motion.div>

                {/* Text container */}
                <motion.div
                    className="w-full lg:w-3/5 mt-8 lg:mt-0"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                        நிகழ்வைப் பற்றி
                    </h2>
                    <div
                        className="h-1 w-20 mx-auto lg:mx-0 mb-6"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)",
                        }}
                    ></div>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        விடுதலை - இதை விரும்பாதோர் யார்? விடுதலை விதையைக்
                        கணினிக்குள் விதைக்கும் ஓர் ஒப்பற்ற திருவிழாவே இம்மாநாடு!
                        "எது செய்க நாட்டுக்கே எனத் துடித்த சிங்கமே! இன்றே, இன்னே
                        புது நாளை உண்டாக்கித் தமிழ் காப்பாய் புத்துணர்வைக்
                        கொணர்வாய் இங்கே!" என்னும் பாவேந்தரின் வைர வரிகளை
                        வாழ்வாக்கும் ஒரு நல் தொடக்கம்! கட்டற்ற கணித்தமிழை
                        விரும்பும் அத்துணை நல்லுள்ளங்களும் இதில் அடக்கம்!
                        வாருங்கள்! நிகழ்வைப் பாருங்கள்! பங்கு பெறுங்கள்! சங்கம்
                        வளர்த்த தமிழைக் கணினியிலும் வளர்த்தெடுப்போம்!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
