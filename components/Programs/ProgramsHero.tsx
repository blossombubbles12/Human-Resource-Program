"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProgramsHero = () => {
  return (
    <section className="overflow-hidden pb-16 pt-32 md:pt-36 xl:pb-20 xl:pt-40 bg-gradient-to-br from-primary/5 via-blue-25 to-purple-25 dark:from-primary/10 dark:via-blacksection dark:to-blue-900/5">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-20">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <span className="font-medium uppercase text-primary dark:text-primary">
              DISCOVER YOUR PATH
            </span>
            <h1 className="mb-4 pr-8 text-3xl font-bold text-black dark:text-white xl:text-5xl">
              Transform Your Career with
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
                Expert Programs
              </span>
            </h1>
            <p className="mb-6 text-base leading-relaxed text-titlebgdark dark:text-waterloo">
              Choose from our comprehensive HR programs designed by industry experts. Advance your career with flexible, online learning.
            </p>
            
            <div className="mb-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-3 text-center shadow-md border border-stroke/50 dark:border-strokedark/50 dark:bg-blacksection/90">
                <h3 className="mb-0.5 text-xl font-bold text-primary">3</h3>
                <p className="text-xs font-medium text-black dark:text-white">Programs</p>
              </div>
              
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-3 text-center shadow-md border border-stroke/50 dark:border-strokedark/50 dark:bg-blacksection/90">
                <h3 className="mb-0.5 text-xl font-bold text-primary">100%</h3>
                <p className="text-xs font-medium text-black dark:text-white">Online</p>
              </div>
              
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-3 text-center shadow-md border border-stroke/50 dark:border-strokedark/50 dark:bg-blacksection/90">
                <h3 className="mb-0.5 text-xl font-bold text-primary">98.5%</h3>
                <p className="text-xs font-medium text-black dark:text-white">Success</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Programs
                <svg
                  className="fill-white"
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                    fill=""
                  />
                </svg>
              </a>
              
              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white"
              >
                Compare Programs
              </a>
            </div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto hidden aspect-[700/444] md:block md:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/about/about-light-01.png"
                alt="GIHCR Programs"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="GIHCR Programs"
                className="hidden dark:block"
                fill
              />
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-stroke/20 dark:border-strokedark/20 dark:bg-blacksection/95">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Accredited</p>
                    <p className="text-xs text-titlebgdark dark:text-waterloo">Globally Recognized</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-stroke/20 dark:border-strokedark/20 dark:bg-blacksection/95">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">25,000+</p>
                    <p className="text-xs text-titlebgdark dark:text-waterloo">Successful Alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;