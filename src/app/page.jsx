import Cardshome from "@/components/Cardshome";
import Hero from "@/components/Hero";
import JoinCommunity from "@/components/JoinCommunity";
import Slider from "@/components/Slider";
import TopArtists from "@/components/TopArtists";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Slider></Slider>
      <JoinCommunity></JoinCommunity>
      <Cardshome></Cardshome>
      <TopArtists></TopArtists>
    </div>
  );
}
