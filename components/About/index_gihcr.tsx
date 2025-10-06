"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About GIHCR Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-20 lg:pb-25 xl:pb-30">
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
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-square md:block md:w-1/2"
            >
              {/* Professional Learning Illustration */}
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-navy to-royal-blue p-8">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #0A1A2F, #174AFF)",
                      "linear-gradient(45deg, #174AFF, #0A1A2F)",
                      "linear-gradient(45deg, #0A1A2F, #174AFF)",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Central Academy Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-8xl">🏛️</div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 left-8 text-3xl"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📚
                </motion.div>

                <motion.div
                  className="absolute top-8 right-8 text-3xl"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  🎯
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 text-3xl"
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  🌟
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 text-3xl"
                  animate={{
                    y: [15, -15, 15],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  🚀
                </motion.div>

                {/* Connecting Lines */}
                <motion.div
                  className="absolute inset-4 border border-gold border-opacity-30 rounded-xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
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
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <motion.span 
                className="font-medium uppercase text-navy dark:text-gold"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 mr-4 inline-flex rounded-full bg-gold px-4.5 py-1 text-metatitle uppercase text-navy font-semibold">
                  Excellence
                </span>{" "}
                Since 2010 - Global Recognition
              </motion.span>
              
              <motion.h2 
                className="relative mb-6 font-playfair text-3xl font-bold text-navy dark:text-white xl:text-hero"
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Empowering Leaders Through
                <span className="relative inline-block">
                  <motion.span
                    className="relative z-10"
                  >
                    {" "}Excellence
                  </motion.span>
                  <motion.span
                    className="absolute bottom-2.5 left-0 -z-1 h-3 w-full bg-gold opacity-30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p
                className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The Global Institute of Human Capital and Resources (GIHCR) stands at the forefront 
                of professional development, offering world-class leadership programs that transform 
                careers and organizations worldwide.
              </motion.p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-5"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-gold to-royal-blue text-white">
                    <span className="text-xl font-bold">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy dark:text-white">
                      Innovative Learning Methodologies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Cutting-edge digital platforms combined with proven traditional 
                      approaches for maximum learning impact.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-5"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-royal-blue to-navy text-white">
                    <span className="text-xl font-bold">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy dark:text-white">
                      Global Network & Recognition
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Join an exclusive community of certified professionals across 
                      120+ countries with internationally recognized credentials.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-5"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-navy to-gold text-white">
                    <span className="text-xl font-bold">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy dark:text-white">
                      Career Transformation Results
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      98% of our graduates report significant career advancement 
                      within 12 months of certification completion.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.a
                  href="#programs"
                  className="group inline-flex items-center gap-2.5 text-navy hover:text-royal-blue dark:text-gold dark:hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-semibold">Explore Our Programs</span>
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About GIHCR End ===== --> */}
    </>
  );
};

export default About;
