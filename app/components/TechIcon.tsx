import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechIconProps {
    Icon: LucideIcon;
    name: string;
    index: number;
    size?: "sm" | "md" | "lg";
    orbitRadius?: number;
    orbitDuration?: number;
    floatDelay?: number;
}

const sizeClasses = {
    sm: "w-10 h-10 md:w-12 md:h-12",
    md: "w-12 h-12 md:w-14 md:h-14",
    lg: "w-14 h-14 md:w-16 md:h-16",
};

const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
};

export default function TechIcon({
    Icon,
    name,
    index,
    size = "md",
    floatDelay = 0,
}: TechIconProps) {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.05,
            }}
        >
            <motion.div
                className={`
          ${sizeClasses[size]}
          relative flex items-center justify-center
          rounded-xl bg-tech-icon
          backdrop-blur-sm
          border border-tech-border
          cursor-pointer
          transition-all duration-300
          group-hover:border-primary/50
          group-hover:bg-tech-icon-hover
        `}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatDelay,
                }}
                whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                }}
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />

                {/* Icon */}
                <Icon
                    size={iconSizes[size]}
                    className="text-primary relative z-10 transition-colors duration-300 group-hover:text-primary-foreground"
                />

                {/* Shimmer effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100"
                    initial={false}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                            x: ["-200%", "200%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Tooltip */}
            <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
          px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          whitespace-nowrap pointer-events-none z-20"
                initial={{ y: -5 }}
                whileHover={{ y: 0 }}
            >
                {name}
            </motion.div>
        </motion.div>
    );
}
