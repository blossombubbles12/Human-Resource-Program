"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-gradient-to-r from-primary to-blue-600 px-4.5 py-1 text-metatitle uppercase text-white shadow-lg">
                  Est. 2015
                </span>{" "}
                Global Institute of Human Capital & Resources
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Transforming Careers Through
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-primary/20 before:to-blue-600/20">
                  Excellence in Education
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At GIHCR, we believe in the power of knowledge to transform lives and organizations. Our comprehensive approach to human capital development combines cutting-edge research, practical application, and global best practices.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-blue-600/10 shadow-lg">
                  <p className="text-metatitle2 font-bold text-primary dark:text-blue-400">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 font-semibold text-black dark:text-white">
                    World-Class Faculty & Industry Experts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Learn from globally recognized leaders with real-world experience.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-blue-600/10 shadow-lg">
                  <p className="text-metatitle2 font-bold text-primary dark:text-blue-400">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 font-semibold text-black dark:text-white">
                    Globally Recognized Certifications
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Earn credentials that are valued by employers worldwide.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-blue-600/10 shadow-lg">
                  <p className="text-metatitle2 font-bold text-primary dark:text-blue-400">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 font-semibold text-black dark:text-white">
                    Innovative Learning Technologies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Experience cutting-edge digital platforms and immersive learning environments.</p>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-blue-600/5 border-l-4 border-primary">
                <blockquote className="italic text-gray-700 dark:text-gray-300 mb-3">
                  "GIHCR doesn't just teach you skills; it transforms your entire approach to professional growth and leadership."
                </blockquote>
                <cite className="text-sm font-medium text-primary dark:text-blue-400">— Dr. Sarah Chen, Harvard Business School</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 bg-white dark:bg-black">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              <h4 className="font-medium uppercase text-primary dark:text-blue-400 mb-4">
                Comprehensive Learning Experience
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Designed for Tomorrow's {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-primary/20 before:to-blue-600/20">
                  Leaders
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our innovative curriculum combines theoretical foundations with practical applications, ensuring graduates are equipped with the skills and knowledge needed to excel in today's dynamic business environment.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-3xl font-bold text-primary dark:text-blue-400 mb-1">15,000+</h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Alumni Worldwide</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-3xl font-bold text-primary dark:text-blue-400 mb-1">98%</h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Employment Rate</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-3xl font-bold text-primary dark:text-blue-400 mb-1">50+</h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Countries Served</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-3xl font-bold text-primary dark:text-blue-400 mb-1">95%</h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-white font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Explore Programs
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
                <a
                  href="/support/schedule-consultation"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Schedule Consultation
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="./images/about/about-light-02.svg"
                  alt="GIHCR Educational Excellence"
                  className="dark:hidden transition-transform duration-300 group-hover:scale-105"
                  fill
                />
                <Image
                  src="./images/about/about-dark-02.svg"
                  alt="GIHCR Educational Excellence"
                  className="hidden dark:block transition-transform duration-300 group-hover:scale-105"
                  fill
                />
                
                {/* Overlay with additional info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="font-bold text-lg mb-2">Global Learning Network</h4>
                    <p className="text-sm opacity-90">Connecting learners worldwide through innovation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
