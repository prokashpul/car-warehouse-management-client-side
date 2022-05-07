import React from "react";
import title from "../../../../Utilities/dynamicName";
import Banner from "../Banner/Banner";
import InventorySection from "../InventoeySection/InventorySection";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  title("Web Car Management | carManager");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <InventorySection></InventorySection>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
