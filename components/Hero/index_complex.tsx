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
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const globeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-35 md:pt-40 xl:pt-46">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)
              `,
              backgroundSize: "120px 120px, 80px 80px",
            }}
          />

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-amber-400 to-blue-500 opacity-20 blur-xl"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-amber-400 opacity-15 blur-lg"
            animate={{
              y: [15, -15, 15],
              x: [8, -8, 8],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            className="flex min-h-[80vh] items-center lg:gap-8 xl:gap-32.5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="mb-6 inline-flex items-center rounded-full border border-amber-400 border-opacity-30 bg-white bg-opacity-10 px-4 py-2 backdrop-blur-md"
                variants={textVariants}
              >
                <span className="mr-2 text-lg">🏛️</span>
                <span className="text-sm font-medium text-amber-400">
                  Global Institute of Human Capital and Resources
                </span>
              </motion.div>

              <motion.h1
                className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
                variants={textVariants}
              >
                Empowering People.{" "}
                <span className="relative">
                  <span className="relative z-10">Advancing Nations.</span>
                  <motion.span
                    className="absolute bottom-2 left-0 -z-1 h-4 w-full bg-gradient-to-r from-amber-400 to-blue-500 opacity-40"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1.5 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl"
                variants={textVariants}
              >
                The Global Institute of Human Capital and Resources (GIHCR) equips
                professionals and leaders with the knowledge, skills, and certifications
                to shape the future of work across 120+ countries worldwide.
              </motion.p>

              {/* Interactive Statistics */}
              <motion.div
                className="mb-10 grid grid-cols-3 gap-6"
                variants={textVariants}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-2xl font-bold text-amber-400 md:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    50K+
                  </motion.div>
                  <div className="text-sm text-gray-300">Professionals</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-2xl font-bold text-blue-400 md:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                  >
                    120+
                  </motion.div>
                  <div className="text-sm text-gray-300">Countries</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-2xl font-bold text-green-400 md:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9, duration: 0.8 }}
                  >
                    95%
                  </motion.div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
                variants={textVariants}
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    href="/programs"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/25"
                  >
                    <span className="relative z-10">Explore Programs</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                </motion.div>

                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    href="/admissions"
                    className="group inline-flex items-center justify-center rounded-full border-2 border-amber-400 border-opacity-50 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-blue-900 hover:shadow-lg hover:shadow-amber-400/25"
                  >
                    Join the Institute
                    <motion.svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                className="mt-12 max-w-md"
                variants={textVariants}
              >
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="flex-1 rounded-full border border-white border-opacity-20 bg-white bg-opacity-10 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-md focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="rounded-full bg-white bg-opacity-20 p-3 text-amber-400 backdrop-blur-md transition-all hover:bg-amber-400 hover:text-blue-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </motion.button>
                </form>
                <p className="mt-2 text-sm text-gray-400">
                  Join our global network of professionals
                </p>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              className="hidden w-1/2 lg:block"
              variants={globeVariants}
            >
              <div className="relative">
                {/* 3D Holographic Globe */}
                <motion.div
                  className="relative mx-auto aspect-square max-w-lg"
                  animate={{
                    rotateY: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Globe Base */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-amber-400 opacity-60" />
                  
                  {/* Globe Rings */}
                  <motion.div
                    className="absolute inset-4 rounded-full border-2 border-amber-400 border-opacity-40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border border-white border-opacity-30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      🌍
                    </motion.div>
                  </div>

                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 rounded-full bg-amber-400 p-3 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-sm">🎓</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 rounded-full bg-white bg-opacity-20 p-3 backdrop-blur-md"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-sm">💼</span>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-0 rounded-full bg-blue-500 p-3 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-sm">🚀</span>
                  </motion.div>

                  {/* Connecting Light Trails */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute top-1/2 left-1/2 h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                  </motion.div>
                </motion.div>

                {/* Floating Achievement Cards */}
                <motion.div
                  className="absolute -top-8 right-8 rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur-md"
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">Global</div>
                    <div className="text-xs text-white">Network</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 left-8 rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur-md"
                  animate={{
                    y: [8, -8, 8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Expert</div>
                    <div className="text-xs text-white">Faculty</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400">Scroll to explore</span>
            <motion.div
              className="h-6 w-4 rounded-full border border-white border-opacity-30"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-amber-400"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
