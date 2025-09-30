import React from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fresh-groceries.jpg";

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-[90vh]">
      {/* Background image with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* optional gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
      </motion.div>

      <div className="absolute top-[50%] md:top-0 md:relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl bg-white/95 p-8 rounded-2xl shadow-lg"
        >
          {/* Heading with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-4 leading-tight"
          >
            Farm Fresh
            <span className="text-meat-red block">Groceries</span>
            <span className="text-sunny-yellow">Delivered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-body text-neutral-gray mb-8 leading-relaxed"
          >
            Fresh meat, organic vegetables, seasonal fruits, and local groceries
            delivered straight from our farm to your table.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.6, staggerChildren: 0.2 },
              },
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-fresh text-white font-heading font-semibold rounded-xl shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Shop Now
            </motion.button>

            <motion.button
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-fresh-green font-heading font-semibold rounded-xl border-2 border-fresh-green hover:bg-fresh-green hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
