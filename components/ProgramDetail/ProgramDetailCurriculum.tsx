"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProgramDetailCurriculumProps {
  program: any;
}

const ProgramDetailCurriculum = ({ program }: ProgramDetailCurriculumProps) => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
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
          className="animate_top mb-12 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            CURRICULUM
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Program
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Structure
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Our comprehensive curriculum is designed by industry experts to ensure you gain practical, job-ready skills through hands-on learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module Navigation */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
                Course Modules
              </h3>
              <div className="space-y-3">
                {program.curriculum.modules.map((module: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveModule(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeModule === index
                        ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                        : "bg-white border border-stroke hover:border-primary dark:bg-blacksection dark:border-strokedark dark:hover:border-primary"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        activeModule === index
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold mb-1 ${
                          activeModule === index ? "text-white" : "text-black dark:text-white"
                        }`}>
                          {module.title}
                        </h4>
                        <p className={`text-sm ${
                          activeModule === index ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                        }`}>
                          {module.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Program Stats */}
              <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Program Stats
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-titlebgdark dark:text-waterloo">Total Modules</span>
                    <span className="font-semibold text-black dark:text-white">{program.curriculum.modules.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-titlebgdark dark:text-waterloo">Live Sessions</span>
                    <span className="font-semibold text-black dark:text-white">
                      {program.curriculum.modules.length * 2} hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-titlebgdark dark:text-waterloo">Self-Paced Learning</span>
                    <span className="font-semibold text-black dark:text-white">
                      {program.curriculum.modules.length * 4} hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-titlebgdark dark:text-waterloo">Practical Projects</span>
                    <span className="font-semibold text-black dark:text-white">
                      {Math.floor(program.curriculum.modules.length / 2)} projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module Content */}
          <motion.div
            key={activeModule}
            variants={{
              hidden: {
                opacity: 0,
                x: 30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
              {/* Module Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                    {activeModule + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {program.curriculum.modules[activeModule].title}
                    </h3>
                    <p className="text-titlebgdark dark:text-waterloo">
                      Duration: {program.curriculum.modules[activeModule].duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lessons */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Learning Objectives
                </h4>
                <div className="space-y-3">
                  {program.curriculum.modules[activeModule].lessons.map((lesson: string, index: number) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-50/50 border border-primary/10 dark:from-primary/10 dark:to-blue-900/10"
                    >
                      <div className="mt-1 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-black dark:text-white">{lesson}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Module Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <h5 className="font-semibold text-black dark:text-white mb-3">
                    Learning Format
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Live instructor sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Interactive presentations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Hands-on exercises</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <h5 className="font-semibold text-black dark:text-white mb-3">
                    Assessment Methods
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Weekly assignments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h2a2 2 0 002-2V3a2 2 0 012 2v6h-3V8a1 1 0 10-2 0v3H4V5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Practical projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-titlebgdark dark:text-waterloo">Peer discussions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Navigation */}
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setActiveModule(Math.max(0, activeModule - 1))}
                  disabled={activeModule === 0}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Previous Module
                </button>

                <span className="text-titlebgdark dark:text-waterloo">
                  Module {activeModule + 1} of {program.curriculum.modules.length}
                </span>

                <button
                  onClick={() => setActiveModule(Math.min(program.curriculum.modules.length - 1, activeModule + 1))}
                  disabled={activeModule === program.curriculum.modules.length - 1}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Module
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailCurriculum;