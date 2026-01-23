"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
    return (
        <section className="w-full h-[400px] md:h-[500px] relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
            >
                <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=12508%20Center%20St%20Suite%20%23%2021%20South%20Gate%2C%20CA%2090280&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                    title="Google Map Location"
                >
                </iframe>
            </motion.div>
        </section>
    );
}
