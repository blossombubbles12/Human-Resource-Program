"use client";
import { motion } from "framer-motion";

const AboutStats = () => {
  const stats = [
    {
      number: "25,000+",
      label: "Global Alumni",
      description: "Graduates leading organizations worldwide",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      number: "85+",
      label: "Countries Served",
      description: "Global reach across continents",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "98.5%",
      label: "Career Advancement",
      description: "Graduates achieving career growth",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "50+",
      label: "Industry Partnerships",
      description: "Leading organizations trust GIHCR",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "20+",
      label: "Years of Excellence",
      description: "Two decades of educational leadership",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Student and employer satisfaction",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
  ];

  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
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
            IMPACT BY NUMBERS
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Our Global
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Impact
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            These numbers represent more than statistics—they reflect the lives transformed, careers advanced, and organizations strengthened through GIHCR's commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top group rounded-2xl bg-white/80 backdrop-blur-sm p-8 text-center shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-blue-50 group-hover:from-primary group-hover:to-blue-600 transition-all duration-300 dark:from-primary/20 dark:to-blue-900/10">
                <div className="group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <h3 className="mb-2 text-4xl font-bold text-primary xl:text-sectiontitle1">
                {stat.number}
              </h3>
              
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                {stat.label}
              </h4>
              
              <p className="text-titlebgdark dark:text-waterloo">
                {stat.description}
              </p>
            </motion.div>
          ))}
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
              Be Part of Our Success Story
            </h3>
            <p className="mb-6 text-titlebgdark dark:text-waterloo">
              Join our global community of HR professionals and become part of the next generation of human capital leaders.
            </p>
            <a
              href="/programs"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span>Explore Programs</span>
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

export default AboutStats;