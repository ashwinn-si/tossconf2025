import image from "./../../Assets/Logo.jpg";
import { motion } from "framer-motion";

export default function DesktopHero() {
    return (
        <div className="flex justify-center items-center w-full h-full relative z-10 px-8">
            <motion.div
                className="flex justify-center items-center mr-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={image}
                    alt="Logo"
                    className="w-full h-auto object-contain"
                />
            </motion.div>
            <div className="flex justify-center items-start flex-col max-w-2xl">
                <motion.h3
                    className="text-zinc-200 text-4xl font-bold leading-tight mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    தமிழ் கட்டற்ற மென்பொருள் மாநாடு 2025
                </motion.h3>

                <motion.p
                    className="text-zinc-300 text-2xl font-medium mb-6"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    <span className="font-black">நாள்</span> : ஜூலை 18,19 2025
                </motion.p>

                <motion.div
                    className="bg-slate-200/20 rounded-lg p-6 max-w-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: "easeOut",
                    }}
                >
                    <p className="text-zinc-200 text-lg leading-relaxed">
                        <span className="font-black">இடம்</span>: St. Joseph's
                        Institute of Technology, Old Mahabalipuram Road, Kamaraj
                        Nagar, Semmancheri, Chennai, Tamil Nadu 600119
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
