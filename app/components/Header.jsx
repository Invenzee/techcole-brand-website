"use client";

import { Phone } from "lucide-react";
import Button from "./global/Button";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[1140px] mx-auto fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-2"
            >
                <img src="/logo.png" className="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <NavMenu />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <Button icon={Phone} text="Lets Talk" />
            </motion.div>
        </motion.nav>
    )
}
