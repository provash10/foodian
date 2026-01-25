import Banner from "@/Components/HomePages/Banner";
import Features from "@/Components/HomePages/Features";
import NewsLetter from "@/Components/HomePages/NewsLetter";
import OrdersNow from "@/Components/HomePages/OrdersNow";
import PopularRecipes from "@/Components/HomePages/PopularRecipes";
import Stats from "@/Components/HomePages/Stats";
import { Testimonials } from "@/Components/HomePages/Testimonials";

export default async function Home() {
  return (
    <div className="space-y-0">
      <Banner />
      <Features />
      <PopularRecipes />
      <Stats />
      <Testimonials />
      <NewsLetter />
      <OrdersNow />
    </div>
  );
}
