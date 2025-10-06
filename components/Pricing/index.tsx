"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PROGRAM PRICING`,
                subtitle: `Invest in Your Future`,
                description: `Choose from our comprehensive educational programs designed to advance your career in human resources. Flexible payment options and scholarship opportunities available.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full opacity-30">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Certificate Program --> */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-stroke bg-white/80 backdrop-blur-sm p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection/80 dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-7.5">
                <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $2,499
                </h3>
                <span className="text-regular text-waterloo dark:text-manatee">
                  One-time payment
                </span>
              </div>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                HR Certificate Program
              </h4>
              <p className="text-titlebgdark dark:text-waterloo">
                Comprehensive 6-month certification program covering core HR fundamentals and modern practices.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4">
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    6 Core HR Modules
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Industry Certification
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Career Support
                  </li>
                  <li className="flex items-center text-black opacity-40 dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Advanced Specializations
                  </li>
                </ul>
              </div>

              <button
                aria-label="Enroll Now button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary hover:gap-4"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Enroll Now
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </motion.div>

            {/* <!-- Professional Diploma --> */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-primary bg-white/90 backdrop-blur-sm p-7.5 shadow-solid-10 dark:border-primary dark:bg-blacksection/90 dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-gradient-to-r from-primary to-secondary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white shadow-lg">
                Popular
              </div>

              <div className="mb-7.5">
                <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $4,999
                </h3>
                <span className="text-regular text-waterloo dark:text-manatee">
                  Or $599/month
                </span>
              </div>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Professional HR Diploma
              </h4>
              <p className="text-titlebgdark dark:text-waterloo">
                Advanced 12-month diploma program with specialized tracks and hands-on project experience.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4">
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    12 Advanced HR Modules
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional Certification
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Internship Placement
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Specialized Tracks
                  </li>
                </ul>
              </div>

              <a
                href="/enrollment"
                aria-label="Enroll Now button"
                className="group/btn inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primaryho hover:shadow-lg hover:gap-4"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Enroll Now
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            {/* <!-- Master's Program --> */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top group relative rounded-lg border border-stroke bg-white/80 backdrop-blur-sm p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection/80 dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-7.5">
                <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $12,999
                </h3>
                <span className="text-regular text-waterloo dark:text-manatee">
                  Or $899/month
                </span>
              </div>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Master's in HR Management
              </h4>
              <p className="text-titlebgdark dark:text-waterloo">
                Comprehensive 18-month master's program with research component and executive mentorship.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4">
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    18 Graduate-Level Modules
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Master's Degree
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Executive Mentorship
                  </li>
                  <li className="flex items-center text-black dark:text-manatee">
                    <svg className="mr-3 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Research Project
                  </li>
                </ul>
              </div>

              <a
                href="/enrollment"
                aria-label="Enroll Now button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary hover:gap-4"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Enroll Now
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="mx-auto max-w-3xl rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-solid-8 dark:bg-blacksection/80 dark:border dark:border-strokedark">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Flexible Payment Options Available
              </h3>
              <p className="mb-6 text-titlebgdark dark:text-waterloo">
                We offer scholarships, employer sponsorship programs, and flexible payment plans to make our education accessible to everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Merit-based Scholarships</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Employer Partnerships</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Interest-free Installments</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
