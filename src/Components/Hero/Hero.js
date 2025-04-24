import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";


export default function Header() {
    const [rotation, setRotation] = useState(145);
    const [hovered, setHovered] = useState(false);

    // Animation speed control
    const rotationSpeed = hovered ? 3 : 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + rotationSpeed) % 360);
        }, 100);

        return () => clearInterval(interval);
    }, [rotationSpeed]);

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                    background: `linear-gradient(${rotation}deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)`,
                }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                }}
            />
            {window.innerWidth < 768 ? <MobileHero /> : <DesktopHero />}

            <motion.div
                className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white opacity-10"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: rotation * 0.5,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-20 left-20 w-16 md:w-20 h-16 md:h-20 rounded-full bg-white opacity-10"
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: rotation * -0.5,
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
