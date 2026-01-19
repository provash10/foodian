import Banner from "@/Components/HomePages/Banner";
import Features from "@/Components/HomePages/Features";
import NewsLetter from "@/Components/HomePages/NewsLetter";
import OrdersNow from "@/Components/HomePages/OrdersNow";
import PopularRecipes from "@/Components/HomePages/PopularRecipes";
import Stats from "@/Components/HomePages/Stats";
import { Testimonials } from "@/Components/HomePages/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <PopularRecipes></PopularRecipes>
      <Testimonials></Testimonials>
      <Stats></Stats>
      <NewsLetter></NewsLetter>
      <OrdersNow></OrdersNow>
    </div>
  );
}
