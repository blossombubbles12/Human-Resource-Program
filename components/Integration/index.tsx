"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30 bg-white dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `LEARNING ECOSYSTEM`,
              subtitle: `Advanced Technology Platform for Modern Education`,
              description: `Experience seamless learning through our integrated digital ecosystem. From AI-powered personalization to collaborative virtual classrooms, our technology enhances every aspect of your educational journey.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative z-50 mx-auto mt-15 max-w-c-1390 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full opacity-30">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          
          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Virtual Classroom */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Virtual Classrooms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Interactive HD video conferencing with breakout rooms, screen sharing, and real-time collaboration tools.
              </p>
            </motion.div>

            {/* AI Learning Assistant */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                AI Learning Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Personalized learning paths powered by machine learning algorithms that adapt to your pace and style.
              </p>
            </motion.div>

            {/* Mobile Learning App */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Mobile Learning App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Learn on-the-go with our mobile app featuring offline content, progress tracking, and push notifications.
              </p>
            </motion.div>

            {/* Analytics Dashboard */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Progress Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive dashboards with detailed insights into learning progress, performance metrics, and achievements.
              </p>
            </motion.div>

            {/* Digital Library */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Digital Library
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Access thousands of e-books, research papers, case studies, and multimedia resources from industry leaders.
              </p>
            </motion.div>

            {/* Collaboration Suite */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-blacksection rounded-2xl p-8 shadow-solid-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-strokedark"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Collaboration Suite
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Team projects, peer reviews, discussion forums, and networking tools to connect with global classmates.
              </p>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <span>Experience Our Platform</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Integration;
