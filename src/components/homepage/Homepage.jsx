import React from "react";
import Banner from "./banner/Banner";
import AllBooks from "./loadBook/AllBooks";

const Homepage = () => {
  return (
    <section className="mt-10 mb-40 mx-auto">
      <Banner />
      <AllBooks />
    </section>
  );
};

export default Homepage;
