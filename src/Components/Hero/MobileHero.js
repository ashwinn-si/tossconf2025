import logo from "./../../Assets/Logo.jpg";
import { motion } from "framer-motion";

export default function MobileHero() {
    return (
        <div className="flex justify-center items-center w-full h-full relative z-10 flex-col px-4 py-6">
            <motion.img
                src={logo}
                alt="Logo"
                className="w-[40vw] h-auto mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            />
            <div className="flex flex-col justify-center items-center w-full text-center space-y-4">
                <motion.h3
                    className="text-zinc-200 text-2xl font-black leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    தமிழ் கட்டற்ற மென்பொருள் மாநாடு 2025
                </motion.h3>

                <motion.p
                    className="text-zinc-300 text-lg font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <span className="font-black text-2xl">நாள்</span> : ஜூலை
                    18,19 2025
                </motion.p>

                <motion.div
                    className="bg-slate-200/20 rounded-lg p-4 mt-2 max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <p className="text-zinc-200 text-md leading-relaxed">
                        <span className="font-bold">இடம்</span>: St. Joseph's
                        Institute of Technology, Old Mahabalipuram Road, Kamaraj
                        Nagar, Semmancheri, Chennai, Tamil Nadu 600119
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
