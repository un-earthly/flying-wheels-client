import BusinessSummary from "@/app/Home/BusinessSummary";
import HomeAbout from "@/app/Home/HomeAbout";
import HomeBanner from "@/app/Home/HomeBanner";
import HomeProduction from "@/app/Home/HomeProduction";
import HomeReviews from "@/app/Home/HomeReviews";
import HowWeWork from "@/app/Home/HowWeWork";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeProduction />
      <HowWeWork />
      <HomeAbout />
      <BusinessSummary />
      <HomeReviews />
    </div>
  )
}
