"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            className="flex lg:items-center lg:gap-8 xl:gap-32.5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="md:w-1/2">
              <motion.div
                className="mb-4.5 inline-flex items-center rounded-full bg-gray-100 px-4 py-2 dark:bg-blacksection"
                variants={textVariants}
              >
                <span className="mr-2 text-lg">🏛️</span>
                <span className="text-sm font-medium text-black dark:text-white">
                  Global Institute of Human Capital and Resources
                </span>
              </motion.div>

              <motion.h1
                className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl xl:text-6xl"
                variants={textVariants}
              >
                Empowering People.<br />
                <span className="text-primary">
                  Advancing Nations.
                </span>
              </motion.h1>

              <motion.p
                className="mb-8 text-black dark:text-white"
                variants={textVariants}
              >
                The Global Institute of Human Capital and Resources (GIHCR) equips
                professionals and leaders with the knowledge, skills, and certifications
                to shape the future of work across 120+ countries worldwide.
              </motion.p>

              {/* Statistics */}
              <motion.div
                className="mb-10 grid grid-cols-3 gap-6"
                variants={textVariants}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">50K+</div>
                  <div className="text-sm text-black dark:text-white">Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">120+</div>
                  <div className="text-sm text-black dark:text-white">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">95%</div>
                  <div className="text-sm text-black dark:text-white">Success Rate</div>
                </div>
              </motion.div>

              <motion.div className="mt-10" variants={textVariants}>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                  <Link
                    href="/programs"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Explore Programs
                  </Link>
                  <Link
                    href="/enrollment"
                    className="flex rounded-full border border-stroke px-7.5 py-2.5 text-black duration-300 ease-in-out hover:bg-black hover:text-white dark:border-strokedark dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    Start Enrollment
                  </Link>
                </div>

                <div className="mt-8">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-5">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email for updates"
                        className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      />
                      <button
                        type="submit"
                        aria-label="subscribe to newsletter"
                        className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primaryho"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>

                  <p className="mt-5 text-black dark:text-white">
                    Join our global network of professionals.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="animate_right hidden md:w-1/2 lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative 2xl:-mr-7.5">
                <div className="relative mx-auto h-[500px] max-w-lg">
                  {/* Main geometric composition */}
                  <div className="absolute inset-0">
                    {/* Central hexagonal core */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-2xl backdrop-blur-sm" />
                      <div className="absolute inset-2 rounded-2xl bg-gradient-to-tl from-slate-600/30 to-slate-800/30 backdrop-blur-md" />
                      
                      {/* Central icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-4xl"
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          ⚡
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Orbiting elements with sophisticated design */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Knowledge node */}
                      <motion.div
                        className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-1 rounded-lg bg-gradient-to-tl from-slate-500/20 to-slate-700/20" />
                        <div className="flex h-full items-center justify-center text-white/90">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Innovation node */}
                      <motion.div
                        className="absolute -right-6 top-1/2 h-12 w-12 -translate-y-1/2 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-1 rounded-lg bg-gradient-to-tl from-slate-500/20 to-slate-700/20" />
                        <div className="flex h-full items-center justify-center text-white/90">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Leadership node */}
                      <motion.div
                        className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-1 rounded-lg bg-gradient-to-tl from-slate-500/20 to-slate-700/20" />
                        <div className="flex h-full items-center justify-center text-white/90">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Excellence node */}
                      <motion.div
                        className="absolute -left-6 top-1/2 h-12 w-12 -translate-y-1/2 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-1 rounded-lg bg-gradient-to-tl from-slate-500/20 to-slate-700/20" />
                        <div className="flex h-full items-center justify-center text-white/90">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Connecting lines with pulse effect */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Vertical line */}
                      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                      {/* Horizontal line */}
                      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                      {/* Diagonal lines */}
                      <div className="absolute left-1/2 top-1/2 h-px w-full origin-center rotate-45 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
                      <div className="absolute left-1/2 top-1/2 h-px w-full origin-center -rotate-45 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
                    </motion.div>

                    {/* Outer rotating ring */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner rotating ring */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-600/40"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Floating metrics cards */}
                  <motion.div
                    className="absolute -top-8 right-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-xl backdrop-blur-sm"
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">Precision</div>
                      <div className="text-xs text-slate-400">Learning</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 left-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-xl backdrop-blur-sm"
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">Elite</div>
                      <div className="text-xs text-slate-400">Standards</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute right-4 top-1/3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-xl backdrop-blur-sm"
                    animate={{ x: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">Future</div>
                      <div className="text-xs text-slate-400">Ready</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;