"use client";
import { motion } from "framer-motion";

const AboutValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in education, research, and professional development, constantly evolving to meet the changing needs of the global workplace.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to create transformative learning experiences that prepare leaders for tomorrow's challenges.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Integrity",
      description: "We operate with unwavering ethical standards, fostering trust, transparency, and accountability in all our relationships and endeavors.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Inclusion",
      description: "We celebrate diversity and create inclusive environments where every voice is heard, valued, and empowered to contribute to our collective success.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership, working together with students, faculty, industry leaders, and communities to create meaningful impact.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Impact",
      description: "We measure our success by the positive change our graduates create in organizations and communities around the world.",
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
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
            OUR CORE VALUES
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Principles That
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Guide Us
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Our values are the foundation of everything we do, shaping our culture, driving our decisions, and inspiring our commitment to transformative education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {values.map((value, index) => (
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
              className="animate_top group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${value.color} shadow-lg`}>
                  {value.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="leading-relaxed text-titlebgdark dark:text-waterloo">
                  {value.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
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
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="animate_bottom mt-16"
        >
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10 p-8 text-center border border-primary/20">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Values in Action
            </h3>
            <p className="mb-6 text-titlebgdark dark:text-waterloo">
              These values aren't just words on a page—they're lived experiences that shape every interaction, program, and partnership at GIHCR.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/about/culture"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Our Culture
              </a>
              <a
                href="/about/leadership"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Leadership Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;