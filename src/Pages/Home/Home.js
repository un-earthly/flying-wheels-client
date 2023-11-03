import React from 'react'
import BusinessSummary from './BusinessSummary'
import HomeBanner from './HomeBanner'
import HomeReviews from './HomeReviews'
import HowWeWork from './HowWeWork'
import HomeProduction from './HomeProduction'
import Footer from '../../SharedComponents/Footer'
import HomeAbout from './HomeAbout'
export default function Home() {
    return (
        <div>
            <HomeBanner />
            <HomeProduction />
            <HowWeWork />
            <HomeAbout />
            <BusinessSummary />
            <HomeReviews />
            <Footer />
        </div>
    )
}
