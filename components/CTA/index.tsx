"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
        <div className="mx-auto max-w-c-1390 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-50 to-primary/5 px-7.5 py-12.5 dark:bg-gradient-to-br dark:from-primary/20 dark:via-blacksection dark:to-blue-900/10 dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-16 shadow-2xl border border-primary/10 dark:border-primary/20 relative overflow-hidden">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
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
              className="animate_left md:w-[70%] lg:w-3/5 relative z-10"
            >
              <div className="mb-6">
                <span className="inline-flex rounded-full bg-gradient-to-r from-primary to-blue-600 px-4 py-2 text-sm font-medium uppercase text-white shadow-lg">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="mb-6 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4 leading-tight">
                Transform Your Career with
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-primary/30 before:to-blue-600/30 ml-2">
                  GIHCR Education
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                Join thousands of professionals who have advanced their careers through our world-class programs. Get started today with our comprehensive learning ecosystem and expert guidance.
              </p>
              
              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Global certification recognized by top employers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Flexible learning schedules for working professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Lifetime access to alumni network and resources</span>
                </div>
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
              className="animate_right lg:w-2/5 relative z-10"
            >
              <div className="flex flex-col items-center justify-center space-y-6 xl:space-y-8">
                {/* Educational Achievement Badge */}
                <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-primary/10 dark:bg-blacksection/80 dark:border-primary/20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Excellence Guaranteed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Top-rated programs with 98.5% satisfaction</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href="/enrollment"
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <span>Start Learning Today</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="/support"
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Free Consultation</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                {/* Trust indicators */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Trusted by professionals at</p>
                  <div className="flex items-center justify-center space-x-4 opacity-60">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Google</span>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Microsoft</span>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Amazon</span>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Apple</span>
                                    </div>                </div>           </div>            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
