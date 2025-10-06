import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top group z-40 rounded-xl border border-white bg-white/80 backdrop-blur-sm p-7.5 shadow-solid-3 transition-all duration-300 hover:shadow-solid-4 hover:-translate-y-1 hover:bg-white dark:border-strokedark dark:bg-blacksection/80 dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <Image src={icon} width={36} height={36} alt="title" className="filter brightness-0 invert" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
