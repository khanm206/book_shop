import React from "react";
import Banner from "./banner/Banner";
import AllBooks from "./loadBook/AllBooks";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.section
      className="mt-10 mb-40 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Banner />
      <AllBooks />
    </motion.section>
  );
};

export default Homepage;
