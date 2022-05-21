import React from 'react'
import BusinessSummary from './BusinessSummary'
import HomeBanner from './HomeBanner'
import HomeReviews from './HomeReviews'
import HowWeWork from './HowWeWork'
import HomeProduction from './HomeProduction'
import Footer from '../../SharedComponents/Footer'
import Industries from './Industries '

export default function Home() {
    return (
        <div>
            <HomeBanner />
            <HomeProduction />
            <BusinessSummary />
            <HowWeWork />
            <Industries />
            <HomeReviews />
            <Footer />
        </div>
    )
}
