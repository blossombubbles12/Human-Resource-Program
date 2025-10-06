"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-2xl bg-gradient-to-br from-primary/5 via-blue-50 to-primary/10 py-22.5 dark:bg-gradient-to-br dark:from-primary/10 dark:via-blacksection dark:to-blue-900/20 dark:stroke-strokedark xl:py-27.5 shadow-2xl border border-primary/10 dark:border-primary/20">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Educational Excellence"
            className="absolute -left-15 -top-25 -z-1 lg:left-0 opacity-30"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Achievement"
            className="absolute bottom-0 right-0 -z-1 opacity-30"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-2 text-sm font-medium uppercase text-white shadow-lg">
              Global Impact
            </span>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Transforming Lives Through
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-primary/30 before:to-blue-600/30 ml-2">
                Educational Excellence
              </span>
            </h2>
            <p className="mx-auto lg:w-11/12 text-gray-600 dark:text-gray-300 leading-relaxed">
              Over a decade of empowering professionals worldwide, GIHCR has established itself as the premier destination for human capital development and strategic leadership education.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 xl:gap-24">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center group cursor-pointer"
            >
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-4xl font-bold text-primary dark:text-blue-400 xl:text-sectiontitle3 group-hover:scale-105 transition-transform duration-300">
                25,000+
              </h3>
              <p className="text-lg lg:text-para2 font-medium text-gray-700 dark:text-gray-300">Global Alumni Network</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center group cursor-pointer"
            >
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-4xl font-bold text-primary dark:text-blue-400 xl:text-sectiontitle3 group-hover:scale-105 transition-transform duration-300">
                85+
              </h3>
              <p className="text-lg lg:text-para2 font-medium text-gray-700 dark:text-gray-300">Countries Reached</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center group cursor-pointer"
            >
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-4xl font-bold text-primary dark:text-blue-400 xl:text-sectiontitle3 group-hover:scale-105 transition-transform duration-300">
                150+
              </h3>
              <p className="text-lg lg:text-para2 font-medium text-gray-700 dark:text-gray-300">Industry Awards</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="animate_top text-center group cursor-pointer"
            >
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-4xl font-bold text-primary dark:text-blue-400 xl:text-sectiontitle3 group-hover:scale-105 transition-transform duration-300">
                98.5%
              </h3>
              <p className="text-lg lg:text-para2 font-medium text-gray-700 dark:text-gray-300">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
