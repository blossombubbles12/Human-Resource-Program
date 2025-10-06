"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHistory = () => {
  const milestones = [
    {
      year: "2003",
      title: "Foundation",
      description: "GIHCR was established with a vision to transform HR education globally.",
      highlight: true
    },
    {
      year: "2007",
      title: "International Expansion",
      description: "Launched programs in 15 countries, establishing our global presence."
    },
    {
      year: "2012",
      title: "Digital Innovation",
      description: "Pioneered online learning platforms and digital HR transformation curricula."
    },
    {
      year: "2016",
      title: "Research Excellence",
      description: "Established our Research Institute for Future of Work studies.",
      highlight: true
    },
    {
      year: "2020",
      title: "Global Leadership",
      description: "Reached 25,000+ graduates and 85+ countries, becoming a global leader."
    },
    {
      year: "2025",
      title: "Next Generation",
      description: "Launching AI-powered personalized learning and sustainability focus.",
      highlight: true
    }
  ];

  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
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
          className="animate_top mb-16 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            OUR JOURNEY
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Two Decades of
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Innovation
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            From a small institute with big dreams to a global leader in HR education, our journey reflects our unwavering commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`animate_timeline flex items-center lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2">
                  <div className={`rounded-2xl p-8 shadow-solid-8 border transition-all duration-300 hover:shadow-xl ${
                    milestone.highlight 
                      ? 'bg-gradient-to-br from-primary/10 to-blue-50 border-primary/20 dark:from-primary/20 dark:to-blue-900/10' 
                      : 'bg-white/80 backdrop-blur-sm border-stroke dark:border-strokedark dark:bg-blacksection/80'
                  }`}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-white ${
                        milestone.highlight ? 'bg-gradient-to-r from-primary to-blue-600' : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      }`}>
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary">{milestone.year}</p>
                        <h3 className="text-xl font-bold text-black dark:text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="leading-relaxed text-titlebgdark dark:text-waterloo">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot for large screens */}
                <div className="hidden lg:flex h-6 w-6 items-center justify-center">
                  <div className={`h-4 w-4 rounded-full ${
                    milestone.highlight ? 'bg-primary' : 'bg-gray-400'
                  }`}></div>
                </div>
                
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

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
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_bottom mt-16 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10 p-8 border border-primary/20">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              The Future Continues
            </h3>
            <p className="mb-6 text-titlebgdark dark:text-waterloo">
              As we look ahead, GIHCR remains committed to pioneering the future of HR education, embracing emerging technologies and evolving workplace dynamics.
            </p>
            <a
              href="/about/future-vision"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span>Our Vision for 2030</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHistory;