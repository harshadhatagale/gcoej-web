import KeyPeoplesSection from "@/components/KeyPeoplesSection";
import Tabs from "@/components/Tabs";
import Image from "next/image";
import Carousel from "@/components/Corousel";
export default function Home() {

  return (
    <>
      <Carousel/>
      <KeyPeoplesSection />
      <Tabs />
    </>
  );
}
