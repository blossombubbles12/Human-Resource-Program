import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2 leading-tight">
            {title}
          </h2>
          <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">{desc1}</p>
          <p className="w-11/12 mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">{desc2}</p>
          
          {/* Program Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Industry-recognized certification upon completion</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Access to exclusive alumni network and mentorship</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Flexible learning schedule for working professionals</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-3 text-white font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>Download Brochure</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative mx-auto hidden aspect-562/366 max-w-[550px] md:block md:w-1/2 group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="dark:hidden transition-transform duration-300 group-hover:scale-105" 
            />
            <Image
              src={imageDark}
              alt={title}
              fill
              className="hidden dark:block transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay for enhanced visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
