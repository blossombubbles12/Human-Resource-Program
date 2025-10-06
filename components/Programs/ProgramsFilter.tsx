"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProgramsFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  const filters = [
    { id: "all", label: "All Programs", count: "3" },
    { id: "certification", label: "Certification", count: "2" },
    { id: "diploma", label: "Diploma", count: "1" }
  ];

  const levels = [
    { id: "all", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" }
  ];

  return (
    <section id="programs" className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
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
          className="animate_top mb-8 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            FIND YOUR PERFECT FIT
          </span>
          <h2 className="relative mb-4 text-2xl font-bold text-black dark:text-white xl:text-3xl">
            Choose Your
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Learning Path
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          <div className="rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Program Type Filters */}
              <div className="flex-1">
                <h3 className="mb-3 text-sm font-semibold text-black dark:text-white">Program Type</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeFilter === filter.id
                          ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                          : "bg-white border border-stroke text-black hover:border-primary hover:text-primary dark:bg-blacksection dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                      }`}
                    >
                      {filter.label}
                      <span className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                        activeFilter === filter.id
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="flex-1">
                <h3 className="mb-3 text-sm font-semibold text-black dark:text-white">Experience Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setActiveLevel(level.id)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeLevel === level.id
                          ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                          : "bg-white border border-stroke text-black hover:border-primary hover:text-primary dark:bg-blacksection dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Compare
                </button>
                <button className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Advisor
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsFilter;