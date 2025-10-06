"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `RESOURCE CENTER`,
              subtitle: `Knowledge Hub for HR Professionals`,
              description: `Access our comprehensive collection of HR resources, industry insights, career guides, and professional development materials to advance your expertise.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}

        {/* Resource Categories */}
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
          className="animate_top mx-auto mt-12 max-w-4xl"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Career Guides",
              "Industry Reports",
              "Best Practices",
              "Templates",
              "Webinars",
              "Case Studies"
            ].map((category, index) => (
              <button
                key={index}
                className="rounded-full border border-stroke bg-white px-6 py-2 text-sm font-medium text-black transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:bg-blacksection dark:text-white dark:hover:border-primary dark:hover:bg-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>

        {/* View All Resources Button */}
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
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="animate_bottom mt-12 text-center"
        >
          <a
            href="/resources"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span>Explore All Resources</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
