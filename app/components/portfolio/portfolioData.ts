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
    "App Development"
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
    {
        id: 201,
        title: "Cuzin's Duzin",
        subtitle: "Cuzin's Duzin is a donut shop",
        image: "/portfolio/logo-design/logo-1.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 202,
        title: "Carlos Tunning",
        subtitle: "Carlos Tunning is a car tuning shop",
        image: "/portfolio/logo-design/logo-2.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 203,
        title: "MS GENERAL & CLEANING MAINTAINENCE LTD",
        subtitle: "MS general and cleaning maintainence ltd which provides home services",
        image: "/portfolio/logo-design/logo-3.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 204,
        title: "KOOL",
        subtitle: "Kool is a amazing logo",
        image: "/portfolio/logo-design/logo-4.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 205,
        title: "The Hero Project",
        subtitle: "The hero project is a logo",
        image: "/portfolio/logo-design/logo-5.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 206,
        title: "Abritex LLC",
        subtitle: "Abritex llc is a marketing agency and this is the logo",
        image: "/portfolio/logo-design/logo-6.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 207,
        title: "Liberty Tax",
        subtitle: "Liberty tax is a tax firm and this is the logo",
        image: "/portfolio/logo-design/logo-7.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 208,
        title: "Just 4u",
        subtitle: "Just 4u is a product by Ell its a hair growth product and this is the logo",
        image: "/portfolio/logo-design/logo-8.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 209,
        title: "The Burger And Bowl",
        subtitle: "The burger and bowl is a fast food chain and this is the logo",
        image: "/portfolio/logo-design/logo-9.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 210,
        title: "Private Chef",
        subtitle: "Local sustainable ethical.",
        image: "/portfolio/logo-design/logo-10.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 211,
        title: "Western Foods",
        subtitle: "Western foods is an italian resturant and this is the logo",
        image: "/portfolio/logo-design/logo-11.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 212,
        title: "The Moving",
        subtitle: "The moving is a trasportation company and this is the logo",
        image: "/portfolio/logo-design/logo-12.jpg",
        category: "Logo Design",
        details: "Focusing on minimalism and scalability, this logo design captures the essence of the brand while remaining versatile for digital and print use."
    },
    {
        id: 301,
        title: "E-Commerce Solution",
        subtitle: "Custom online store development",
        image: "/portfolio/web-development/web-page-1.png",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 302,
        title: "Regina Wagner",
        subtitle: "Author Website",
        image: "/portfolio/web-development/web-page-2.jpg",
        category: "Website Development",
        externalLink: "https://reginawagnerauthor.us/"
    },
    {
        id: 303,
        title: "Event Portal",
        subtitle: "Event Management System Website",
        image: "/portfolio/web-development/web-page-3.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 304,
        title: "Vale",
        subtitle: "Takeback Control - Modern Doctor Website",
        image: "/portfolio/web-development/web-page-4.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 305,
        title: "Real Estate",
        subtitle: "Real Estate Property Finder Website",
        image: "/portfolio/web-development/web-page-5.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 306,
        title: "The Coffee Shop",
        subtitle: "The Coffee Shop is a coffee shop website",
        image: "/portfolio/web-development/web-page-6.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 307,
        title: "MS General Cleaning",
        subtitle: "MS General Cleaning is a house cleaning & maintenance website",
        image: "/portfolio/web-development/web-page-7.jpg",
        category: "Website Development",
        externalLink: "https://msgeneralcleaning.co.nz/"
    },
    {
        id: 308,
        title: "Tutor",
        subtitle: "Tutor is a learning management system website",
        image: "/portfolio/web-development/web-page-8.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 309,
        title: "Pickup Pals",
        subtitle: "Pickup Pals is a book website",
        image: "/portfolio/web-development/web-page-9.jpg",
        category: "Website Development",
        externalLink: "https://pick-up-pals.com/"
    },
    {
        id: 310,
        title: "Pampered Paws",
        subtitle: "Pampered Paws is a pet service website",
        image: "/portfolio/web-development/web-page-10.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 311,
        title: "Analysis Lab NZ",
        subtitle: "Analysis Lab is a lab website",
        image: "/portfolio/web-development/web-page-11.jpg",
        category: "Website Development",
        externalLink: "#"
    },
    {
        id: 312,
        title: "Book Store",
        subtitle: "Book Store is a book store website",
        image: "/portfolio/web-development/web-page-12.jpg",
        category: "Website Development",
        externalLink: "#"
    },
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
