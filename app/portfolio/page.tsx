import React from 'react'
import Header from '../components/Header'
import PortfolioStack from '../components/portfolio/PortfolioStack'
import Footer from '../components/Footer'

export default function page() {
    return (
        <main className="bg-white">
            <Header />
            <PortfolioStack />
            <Footer />
        </main>
    )
}
