"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProgramDetailFAQProps {
  program: any;
}

const ProgramDetailFAQ = ({ program }: ProgramDetailFAQProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
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
          className="animate_top mb-12 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Common
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Get answers to the most common questions about this program. Can't find what you're looking for? Contact our admissions team.
          </p>
        </motion.div>

        <motion.div
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
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {program.faq.map((faqItem: any, index: number) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stroke shadow-solid-3 transition-all duration-300 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection/80"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="text-lg font-semibold text-black dark:text-white pr-8">
                    {faqItem.question}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <svg
                      className={`h-4 w-4 text-primary transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-stroke pt-4 dark:border-strokedark">
                      <p className="text-titlebgdark dark:text-waterloo leading-relaxed">
                        {faqItem.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Support */}
        <motion.div
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 p-8 text-center dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-titlebgdark dark:text-waterloo mb-8 max-w-2xl mx-auto">
              Our admissions advisors are here to help you understand every aspect of the program and ensure it's the right fit for your career goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Phone Support</h4>
                <p className="text-sm text-titlebgdark dark:text-waterloo mb-3">
                  Speak directly with an advisor
                </p>
                <a href="tel:+1-800-GIHCR-EDU" className="text-primary font-semibold">
                  1-800-GIHCR-EDU
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Email Support</h4>
                <p className="text-sm text-titlebgdark dark:text-waterloo mb-3">
                  Get detailed responses within 24 hours
                </p>
                <a href="mailto:admissions@gihcr.edu" className="text-primary font-semibold">
                  admissions@gihcr.edu
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Live Chat</h4>
                <p className="text-sm text-titlebgdark dark:text-waterloo mb-3">
                  Available Monday-Friday 9AM-6PM EST
                </p>
                <button 
                  onClick={() => window.location.href = '/support'}
                  className="text-primary font-semibold"
                >
                  Start Chat
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/support/schedule-consultation?type=call'}
                className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule a Call
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/download/info-packet';
                  link.download = 'GIHCR-Info-Packet.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="rounded-full border border-stroke px-8 py-3 font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
              >
                Request Info Packet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetailFAQ;