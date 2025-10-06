"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 pt-18.5 lg:pb-22.5 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 xl:text-sectiontitle2">
              Explore Our
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-primary/20 before:to-blue-600/20 ml-2">
                Learning Pathways
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover specialized programs designed to advance your career and transform your professional capabilities through innovative learning approaches.
            </p>
          </div>
          
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden opacity-30"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block opacity-30"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-2xl border border-stroke bg-white/80 backdrop-blur-sm shadow-solid-5 dark:border-strokedark dark:bg-blacksection/80 dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-4 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-6 transition-all duration-300 hover:bg-primary/5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-gradient-to-r before:from-primary before:to-blue-600 bg-primary/10"
                  : ""
              }`}
            >
              <div className={`flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentTab === "tabOne" 
                  ? "border-primary bg-gradient-to-br from-primary/10 to-blue-600/10" 
                  : "border-stroke dark:border-strokedark dark:bg-blacksection"
              }`}>
                <p className={`text-metatitle3 font-bold transition-colors duration-300 ${
                  currentTab === "tabOne" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className={`text-sm font-semibold xl:text-regular transition-colors duration-300 ${
                  currentTab === "tabOne" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  Leadership Development
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-4 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-6 transition-all duration-300 hover:bg-primary/5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-gradient-to-r before:from-primary before:to-blue-600 bg-primary/10"
                  : ""
              }`}
            >
              <div className={`flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentTab === "tabTwo" 
                  ? "border-primary bg-gradient-to-br from-primary/10 to-blue-600/10" 
                  : "border-stroke dark:border-strokedark dark:bg-blacksection"
              }`}>
                <p className={`text-metatitle3 font-bold transition-colors duration-300 ${
                  currentTab === "tabTwo" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className={`text-sm font-semibold xl:text-regular transition-colors duration-300 ${
                  currentTab === "tabTwo" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  Digital Transformation
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-4 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-6 transition-all duration-300 hover:bg-primary/5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-gradient-to-r before:from-primary before:to-blue-600 bg-primary/10"
                  : ""
              }`}
            >
              <div className={`flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentTab === "tabThree" 
                  ? "border-primary bg-gradient-to-br from-primary/10 to-blue-600/10" 
                  : "border-stroke dark:border-strokedark dark:bg-blacksection"
              }`}>
                <p className={`text-metatitle3 font-bold transition-colors duration-300 ${
                  currentTab === "tabThree" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className={`text-sm font-semibold xl:text-regular transition-colors duration-300 ${
                  currentTab === "tabThree" ? "text-primary dark:text-blue-400" : "text-black dark:text-white"
                }`}>
                  Strategic HR Management
                </button>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
