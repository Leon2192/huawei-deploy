import Hero from "@/components/shared/Hero/Hero"
import Banner from "@/components/shared/Banner/BannerPartners"
import Image from "next/image";
import ContainerHome from "@/components/ContainerHome";

export default function Home() {
  return (
    <>
      <Hero />
      <ContainerHome />
      <Banner
        imageUrl="/imagenes/banner-partners.png"
        leftTitle="Become a Distribution Partner and Join Us on the Way to Success"
        leftSubtitle="Become a certified distribution partner and gain more support from Huawei"
        leftButtonText="Register as a Sales Partner"
        leftButtonText2="Become a Certified Distribution Partner"
        rightTitle="Procurement Consulting"
        rightSubtitle="Please fill in the purchase request and we will contact you as soon as possible."
      />
    </>
  );
}
