"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Dynamic text arrays
  const changingWords = [
    "HR Career",
    "Leadership",
    "Business",
    "Future",
    "Potential",
    "Success"
  ];

  const changingPhrases = [
    "Intelligent Growth",
    "Strategic Excellence",
    "Professional Success", 
    "Career Advancement",
    "Digital Innovation",
    "Global Impact"
  ];

  const subTexts = [
    "Transform your human capital strategy with cutting-edge HR education and certifications. Drive innovation, boost your career, and lead organizational change with data-driven insights and AI-powered HR solutions trusted by professionals across 120+ countries.",
    "Master the art of strategic leadership with our comprehensive programs designed for today's dynamic workplace. Gain expertise in talent management, organizational development, and digital transformation to excel in your HR career.",
    "Join a global community of HR professionals advancing their careers through world-class education. From analytics to employee engagement, develop the skills that matter in modern human resources management.",
    "Unlock your potential with industry-leading certifications that open doors to executive opportunities. Learn from experts, network with peers, and gain the credentials that set you apart in the competitive HR landscape.",
    "Stay ahead of the curve with cutting-edge HR technologies and methodologies. Our programs integrate the latest in AI, data analytics, and digital tools to prepare you for the future of human resources.",
    "Make a lasting impact on organizations worldwide with our globally recognized HR programs. Develop cross-cultural competencies and international best practices that drive business success across borders."
  ];

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

  // Text rotation effects
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
        setIsTyping(false);
      }, 200);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(wordInterval);
  }, [changingWords.length]);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % changingPhrases.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(phraseInterval);
  }, [changingPhrases.length]);

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay - Reduced opacity for better menu visibility */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.2) 0%, 
              rgba(59, 130, 246, 0.1) 25%, 
              rgba(16, 185, 129, 0.05) 50%, 
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

        {/* Floating particles - Reduced opacity for better menu visibility */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern - Reduced opacity for better menu visibility */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16 md:px-8 md:pt-20">
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
              🏛️ Global Institute of Human Capital and Resources
            </span>
            {/* Text rotation indicator */}
            <div className="ml-4 flex space-x-1">
              {changingWords.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-4 rounded-full transition-all duration-300 ${
                    index === currentWordIndex ? 'bg-blue-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl text-center"
          >
            <span className="block mb-4">Empower Your</span>
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {changingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </span>
            <span className="block mt-6">
              with{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
                  >
                    {changingPhrases[currentPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          {/* Dynamic Subtext */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {subTexts[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                href="/programs"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 text-center font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 hover:from-blue-700 hover:to-emerald-700 md:px-10 md:py-5"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Explore Programs
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
              <Link
                href="/enrollment"
                className="group flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 md:px-10 md:py-5"
              >
                <motion.div
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 md:h-8 md:w-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="h-4 w-4 md:h-5 md:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-sm md:text-base">Start Enrollment</span>
              </Link>
            </motion.div>
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

export default Hero;