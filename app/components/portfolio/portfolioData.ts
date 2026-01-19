export interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    category: string;
    video?: string;
    externalLink?: string;
    details?: string;
}

export const categories = [
    "Branding",
    "Logo Design",
    "Website Development",
    "App Development",
    "Content Writing",
    "Social Media Marketing",
    "SEO"
];

export const portfolioData: Project[] = [
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 100 + i,
        title: `Brand Identity ${i + 1}`,
        subtitle: "Premium branding for modern businesses",
        image: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop&sig=${i}`,
        category: "Branding",
        details: "This project involved creating a full visual identity system, including color palettes, typography, and brand guidelines to ensure consistency across all platforms."
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 200 + i,
        title: `Minimal Logo ${i + 1}`,
        subtitle: "Clean and impactful logo design",
        image: `https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop&sig=${i + 10}`,
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 300 + i,
        title: `Web Project ${i + 1}`,
        subtitle: "High-performance website development",
        image: `https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop&sig=${i + 20}`,
        category: "Website Development",
        externalLink: "https://techcole.com"
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 400 + i,
        title: `Mobile App ${i + 1}`,
        subtitle: "Intuitive iOS & Android applications",
        image: `https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2000&auto=format&fit=crop&sig=${i + 30}`,
        category: "App Development",
        externalLink: "https://techcole.com"
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 500 + i,
        title: `Content Strategy ${i + 1}`,
        subtitle: "Engaging copy and strategic content",
        image: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop&sig=${i + 40}`,
        category: "Content Writing",
        details: "Crafted compelling narratives and high-converting copy tailored to the target audience, boosting engagement and brand authority."
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 600 + i,
        title: `Social Growth ${i + 1}`,
        subtitle: "Dynamic social media management",
        image: `https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2000&auto=format&fit=crop&sig=${i + 50}`,
        category: "Social Media Marketing",
        details: "Developed a comprehensive social media strategy focusing on viral content, community management, and targeted ad campaigns."
    })),
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 700 + i,
        title: `SEO Optimization ${i + 1}`,
        subtitle: "Ranking #1 on search engines",
        image: `https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop&sig=${i + 60}`,
        category: "SEO",
        details: "Implemented advanced on-page and off-page SEO techniques to drive organic traffic and improve search engine visibility significantly."
    }))
];
