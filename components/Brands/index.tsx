"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* ===== Partnerships & Accreditations Start ===== */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-16 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Section Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Trusted by Global Leaders
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              GIHCR is proud to partner with world-renowned institutions, prestigious organizations, 
              and industry leaders to deliver excellence in human capital development.
            </p>
          </motion.div>

          {/* Partnerships Slider */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of brands */}
              {brandData.map((brand, key) => (
                <motion.div
                  key={key}
                  className="flex-shrink-0"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-white/80 p-2 shadow-md backdrop-blur-sm dark:bg-gray-800/80 md:h-20 md:w-48">
                    <SingleBrand brand={brand} />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandData.map((brand, key) => (
                <motion.div
                  key={`duplicate-${key}`}
                  className="flex-shrink-0"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-white/80 p-2 shadow-md backdrop-blur-sm dark:bg-gray-800/80 md:h-20 md:w-48">
                    <SingleBrand brand={brand} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Recognition Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">120+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Global Partnerships</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">ISO</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certified Quality</div>
            </div>
          </motion.div>

          {/* Global Presence Indicator */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-sm font-medium text-primary">
              <span className="mr-2">🌍</span>
              Operating across 6 continents with local expertise and global standards
            </p>
          </motion.div>
        </div>
      </section>
      {/* ===== Partnerships & Accreditations End ===== */}
    </>
  );
};

export default Brands;
