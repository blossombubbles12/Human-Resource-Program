"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
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
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Advancing Human Capital
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
                Globally
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
              For over two decades, the Global Institute of Human Capital and Resources (GIHCR) has been at the forefront of transforming careers and organizations through innovative education, cutting-edge research, and strategic consulting.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">Global Recognition</h3>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Accredited by leading international bodies</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">Expert Faculty</h3>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Industry leaders and academic pioneers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">Impact-Driven</h3>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Transforming lives and organizations worldwide</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#mission"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Learn Our Story
                <svg
                  className="fill-white"
                  width="14"
                  height="14"
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
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-black px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Contact Us
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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto hidden aspect-[700/444] md:block md:w-1/2"
          >
            <Image
              src="/images/about/about-light-01.png"
              alt="About GIHCR"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/about/about-dark-01.png"
              alt="About GIHCR"
              className="hidden dark:block"
              fill
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;