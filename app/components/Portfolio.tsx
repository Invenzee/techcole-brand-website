"use client";
import { motion } from "framer-motion";
import Button from "./global/Button";
import { useRouter } from "next/navigation";

const portfolioItems = [
    { id: 1, title: "Fintech Dashboard", category: "App Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Fashion Store", category: "Web Design", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Modern Interior", category: "Branding", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Travel App", category: "UX Research", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Crypto Wallet", category: "Development", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop" },
];

const items = [...portfolioItems, ...portfolioItems, ...portfolioItems];

export default function Portfolio() {
    return (
        <section className="w-full bg-white py-24 overflow-hidden relative z-20">
            <div className="max-w-[1300px] mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
                        Portfolio <span className="text-primary">Highlights</span>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-md"
                >
                    <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                        Over 100+ Clients Trust Us Because We Deliver What We Promise!
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="w-full self-end overflow-hidden origin-center -ml-4">
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {items.map((item, idx) => (
                            <PortfolioCard key={`row1-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                <div className="w-full overflow-hidden origin-center -ml-4">
                    <motion.div
                        className="flex gap-6 w-max"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    >
                        {items.map((item, idx) => (
                            <PortfolioCard key={`row2-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1140px] mx-auto flex items-center justify-center mt-12 text-center">
                <Button link="/portfolio" text="View All Projects" className="!bg-primary text-white !px-12" transitionClassName="!via-white/30" />
            </div>
        </section>
    );
}

function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
    const router = useRouter();
    return (
        <div className="relative w-[300px] md:w-[450px] h-[350px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer bg-gray-100 flex-shrink-0">
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6">
                <p className="text-white text-xl hover:underline" onClick={() => router.push("/portfolio")}>Click to view</p>
            </div>
        </div>
    )
}
