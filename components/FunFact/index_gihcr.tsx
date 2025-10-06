"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  const stats = [
    {
      number: "50K+",
      label: "Certified Professionals",
      icon: "🎓",
      delay: 0.5
    },
    {
      number: "120+",
      label: "Countries Served",
      icon: "🌍",
      delay: 0.7
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: "📈",
      delay: 0.9
    },
    {
      number: "15+",
      label: "Years of Excellence",
      icon: "🏆",
      delay: 1.1
    }
  ];

  return (
    <>
      {/* <!-- ===== GIHCR Stats Start ===== --> */}
      <section id="certifications" className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-br from-navy to-royal-blue py-22.5 overflow-hidden xl:py-27.5">
          
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, #F5C542 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 left-10 text-4xl opacity-20"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🌟
          </motion.div>

          <motion.div
            className="absolute top-20 right-20 text-4xl opacity-20"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            💼
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-20 text-4xl opacity-20"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🚀
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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <motion.h2 
              className="mb-4 font-playfair text-3xl font-bold text-white xl:text-sectiontitle3"
              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Careers Globally
            </motion.h2>
            <motion.p 
              className="mx-auto text-gray-200 lg:w-11/12"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join thousands of professionals who have advanced their careers through GIHCR's 
              world-class programs and certifications. Our impact spans across industries and continents.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.9,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ 
                  duration: 0.8, 
                  delay: stat.delay,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                className="animate_top text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold bg-opacity-20 text-4xl backdrop-blur-md"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "rgba(245, 197, 66, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h3 
                  className="mb-2.5 text-3xl font-bold text-gold xl:text-sectiontitle3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: stat.delay + 0.2, 
                    type: "spring", 
                    bounce: 0.5,
                    duration: 0.8
                  }}
                >
                  {stat.number}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-white group-hover:text-gold transition-colors duration-300 lg:text-para2"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: stat.delay + 0.4, duration: 0.6 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-all duration-300 hover:bg-goldho hover:shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245, 197, 66, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Certification Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== GIHCR Stats End ===== --> */}
    </>
  );
};

export default FunFact;
