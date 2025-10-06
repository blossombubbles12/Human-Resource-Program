"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top group rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        <Link href={`/resources/`} className="relative block aspect-[16/10] overflow-hidden rounded-xl mb-6">
          <Image 
            src={mainImage} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Resource Type Badge */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
              Guide
            </span>
          </div>
          
          {/* Download/View Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Link>

        <div className="space-y-4">
          <h3 className="line-clamp-2 text-xl font-semibold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary leading-tight">
            <Link href={`/resources/performance-management-guide`}>
              {title}
            </Link>
          </h3>
          
          <p className="line-clamp-3 text-titlebgdark dark:text-waterloo leading-relaxed">
            {metadata}
          </p>
          
          {/* Resource Meta Information */}
          <div className="flex items-center justify-between pt-4 border-t border-stroke dark:border-strokedark">
            <div className="flex items-center gap-4 text-sm text-titlebgdark dark:text-waterloo">
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free</span>
              </div>
            </div>
            
            <Link 
              href="/resources/performance-management-guide"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:bg-primary/20"
            >
              <span>Access</span>
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
