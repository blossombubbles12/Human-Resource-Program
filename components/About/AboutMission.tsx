"use client";
import { motion } from "framer-motion";

const AboutMission = () => {
  return (
    <section id="mission" className="overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32.5">
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
            className="animate_left lg:w-1/2"
          >
            <span className="font-medium uppercase text-primary dark:text-white">
              OUR MISSION
            </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Empowering Tomorrow's
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
                HR Leaders
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
              At GIHCR, we believe that human capital is the most valuable asset of any organization. Our mission is to develop visionary HR leaders who can navigate the complexities of modern business, drive organizational transformation, and create workplaces where people thrive.
            </p>
            
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">Educational Excellence</h3>
                <p className="text-titlebgdark dark:text-waterloo">
                  We deliver world-class education through innovative curricula, expert faculty, and cutting-edge learning technologies that prepare professionals for real-world challenges.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">Global Impact</h3>
                <p className="text-titlebgdark dark:text-waterloo">
                  Our graduates create positive change in organizations across 85+ countries, driving innovation, inclusion, and sustainable business practices worldwide.
                </p>
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
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_right lg:w-1/2"
          >
            <div className="space-y-8">
              <div className="text-center">
                <span className="font-medium uppercase text-primary dark:text-white">
                  OUR VISION
                </span>
                <h3 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                  A World Where Human Potential is Unlimited
                </h3>
                <p className="text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
                  We envision a future where every organization is powered by exceptional human capital management, where diversity drives innovation, and where technology enhances rather than replaces human connection.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black dark:text-white">Innovation</h4>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Pioneering new approaches to HR education</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black dark:text-white">Inclusion</h4>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Building diverse and equitable learning communities</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black dark:text-white">Impact</h4>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Creating measurable positive change</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-black dark:text-white">Community</h4>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">Fostering global professional networks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;