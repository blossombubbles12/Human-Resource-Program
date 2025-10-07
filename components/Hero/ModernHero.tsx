"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "backOut",
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

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 25%, 
              rgba(16, 185, 129, 0.1) 50%, 
              transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-8">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3"
          >
            <div className="mr-3 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 50,000+ Professionals Worldwide
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Empower Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Business
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </span>
            <br />
            with{" "}
            <motion.span
              className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Intelligent Growth
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl"
          >
            Transform your human capital strategy with our cutting-edge platform that connects
            people, processes, and performance. Drive innovation, boost productivity, and scale
            your business intelligently with data-driven insights and AI-powered solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                href="/enrollment"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-blue-500/25"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M8.293 4.293a1 1 0 011.414 0L12 6.586V4a1 1 0 112 0v5a1 1 0 01-1 1H8a1 1 0 110-2h2.586L8.293 5.707a1 1 0 010-1.414z" />
                  </motion.svg>
                </span>
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover">
              <button className="group flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 0L2 12L10 6L2 0Z" />
                  </svg>
                </motion.div>
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Visual Elements */}
          <motion.div
            className="relative mx-auto max-w-4xl"
            variants={itemVariants}
            style={{ y: y1 }}
          >
            {/* Central Hub */}
            <motion.div
              className="relative mx-auto h-64 w-64 md:h-80 md:w-80"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Core circle */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500/30 to-emerald-500/30 backdrop-blur-md border border-white/20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <motion.div
                    className="text-4xl md:text-6xl"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    🎯
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 72, 144, 216, 288].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute h-12 w-12 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 backdrop-blur-md border border-white/20 flex items-center justify-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-100px)`,
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                >
                  <span className="text-xl">
                    {["💼", "📊", "🚀", "⚡", "🎨"][index]}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Connection lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ transform: `translateY(${y2}px)` }}
            >
              {[0, 72, 144, 216, 288].map((angle, index) => (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "50K+", label: "Professionals" },
              { value: "120+", label: "Countries" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/60 md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm">Scroll to explore</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="currentColor">
            <path d="M8 0L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHero;