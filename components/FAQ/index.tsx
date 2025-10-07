"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  // Filter FAQs based on search term and category
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch = faq.quest.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.ans.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (selectedCategory === "all") return matchesSearch;
      
      // Categorize FAQs based on keywords
      const faqText = (faq.quest + " " + faq.ans).toLowerCase();
      switch (selectedCategory) {
        case "admissions":
          return matchesSearch && (faqText.includes("admission") || faqText.includes("requirement") || faqText.includes("apply"));
        case "programs":
          return matchesSearch && (faqText.includes("program") || faqText.includes("curriculum") || faqText.includes("course"));
        case "payment":
          return matchesSearch && (faqText.includes("cost") || faqText.includes("payment") || faqText.includes("tuition") || faqText.includes("fee"));
        case "support":
          return matchesSearch && (faqText.includes("support") || faqText.includes("help") || faqText.includes("career") || faqText.includes("network"));
        default:
          return matchesSearch;
      }
    });
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: "all", label: "All Questions", count: faqData.length },
    { id: "admissions", label: "Admissions", count: faqData.filter(f => (f.quest + " " + f.ans).toLowerCase().includes("admission") || (f.quest + " " + f.ans).toLowerCase().includes("requirement")).length },
    { id: "programs", label: "Programs", count: faqData.filter(f => (f.quest + " " + f.ans).toLowerCase().includes("program") || (f.quest + " " + f.ans).toLowerCase().includes("curriculum")).length },
    { id: "payment", label: "Payment & Tuition", count: faqData.filter(f => (f.quest + " " + f.ans).toLowerCase().includes("cost") || (f.quest + " " + f.ans).toLowerCase().includes("payment")).length },
    { id: "support", label: "Support & Career", count: faqData.filter(f => (f.quest + " " + f.ans).toLowerCase().includes("support") || (f.quest + " " + f.ans).toLowerCase().includes("career")).length },
  ];

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-32 md:pt-36 lg:pb-25 lg:pt-44 xl:pb-30 xl:pt-48 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full opacity-30">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="mx-auto max-w-4xl">
            {/* Section Header */}
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
              <span className="font-medium uppercase text-black dark:text-white">
                OUR FAQS
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Frequently Asked
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Questions
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-base text-titlebgdark dark:text-waterloo">
                Get answers to common questions about GIHCR programs, admissions, and career support.
              </p>
            </motion.div>

            {/* Search and Filter Section */}
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
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-stroke rounded-full leading-5 bg-white dark:bg-blacksection placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary dark:border-strokedark dark:text-white transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white dark:bg-blacksection text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 border border-stroke dark:border-strokedark"
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                {searchTerm && (
                  <p>Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"</p>
                )}
              </div>
            </motion.div>

            {/* FAQ Items */}
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
              className="animate_bottom"
            >
              {filteredFAQs.length > 0 ? (
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection/80 overflow-hidden">
                  {filteredFAQs.map((faq, key) => (
                    <FAQItem
                      key={faq.id}
                      faqData={{ ...faq, activeFaq, handleFaqToggle }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-24 h-24 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0120 12a8 8 0 11-16 0 8 8 0 018.027 8.006zM12 21a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Contact Support */}
              <div className="mt-8 text-center">
                <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-blue-50 dark:from-primary/10 dark:to-blue-900/10 p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our admissions team is here to help you find the perfect program for your career goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Contact Us
                    </a>
                    <a
                      href="tel:+1-800-444-2738"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
