"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutAccreditation = () => {
  const accreditations = [
    {
      name: "AACSB International",
      description: "Business Education Accreditation",
      logo: "/images/brand/brand-light-01.svg",
      darkLogo: "/images/brand/brand-dark-01.svg"
    },
    {
      name: "SHRM Education",
      description: "HR Curriculum Alignment",
      logo: "/images/brand/brand-light-02.svg",
      darkLogo: "/images/brand/brand-dark-02.svg"
    },
    {
      name: "CIPD Recognition",
      description: "Professional HR Standards",
      logo: "/images/brand/brand-light-03.svg",
      darkLogo: "/images/brand/brand-dark-03.svg"
    },
    {
      name: "ISO 21001:2018",
      description: "Educational Quality Management",
      logo: "/images/brand/brand-light-04.svg",
      darkLogo: "/images/brand/brand-dark-04.svg"
    },
    {
      name: "CHEA Recognition",
      description: "Higher Education Accreditation",
      logo: "/images/brand/brand-light-05.svg",
      darkLogo: "/images/brand/brand-dark-05.svg"
    },
    {
      name: "EFMD Quality",
      description: "Global Management Education",
      logo: "/images/brand/brand-light-06.svg",
      darkLogo: "/images/brand/brand-dark-06.svg"
    }
  ];

  const certifications = [
    {
      title: "Global Recognition",
      description: "Our degrees and certificates are recognized by employers and educational institutions worldwide.",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Industry Standards",
      description: "Our curricula meet and exceed industry standards set by leading HR professional organizations.",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      description: "Continuous improvement through rigorous quality assurance processes and regular audits.",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
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
            ACCREDITATION & RECOGNITION
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Globally Recognized
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Excellence
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Our commitment to excellence is validated by prestigious accreditations and recognitions from leading educational and professional organizations worldwide.
          </p>
        </motion.div>

        {/* Accreditation Logos */}
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
          className="animate_top mb-20"
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
            <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
              Our Accreditations & Partnerships
            </h3>
            
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.8,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <div className="relative mb-4 flex h-16 items-center justify-center">
                    <Image
                      src={accreditation.logo}
                      alt={accreditation.name}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
                    />
                    <Image
                      src={accreditation.darkLogo}
                      alt={accreditation.name}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
                    />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">
                    {accreditation.name}
                  </h4>
                  <p className="text-xs text-titlebgdark dark:text-waterloo">
                    {accreditation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quality Features */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:gap-10">
          {certifications.map((cert, index) => (
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
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="animate_top group rounded-2xl bg-white/80 backdrop-blur-sm p-8 text-center shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-blue-50 group-hover:from-primary group-hover:to-blue-600 transition-all duration-300 dark:from-primary/20 dark:to-blue-900/10">
                <div className="group-hover:text-white transition-colors duration-300">
                  {cert.icon}
                </div>
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="leading-relaxed text-titlebgdark dark:text-waterloo">
                {cert.description}
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
              Commitment to Excellence
            </h3>
            <p className="mb-6 text-titlebgdark dark:text-waterloo">
              Our accreditations ensure that you receive education of the highest caliber, recognized and respected by employers and institutions globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/accreditation"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View All Accreditations
              </a>
              <a
                href="/quality-assurance"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Quality Standards
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAccreditation;