"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProgramDetailPricingProps {
  program: any;
}

const ProgramDetailPricing = ({ program }: ProgramDetailPricingProps) => {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  return (
    <section className="py-20 lg:py-25 xl:py-30">
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
          className="animate_top mb-12 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            INVESTMENT IN YOUR FUTURE
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Flexible
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Pricing Options
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Choose the plan that best fits your learning goals and budget. All plans include our complete curriculum and lifetime access to course materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
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
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`rounded-3xl p-8 transition-all duration-300 ${
              selectedPlan === "standard"
                ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl scale-105"
                : "bg-white/80 backdrop-blur-sm border border-stroke hover:border-primary dark:border-strokedark dark:bg-blacksection/80"
            }`}>
              {selectedPlan === "standard" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  selectedPlan === "standard" ? "text-white" : "text-black dark:text-white"
                }`}>
                  Standard Plan
                </h3>
                <p className={`${
                  selectedPlan === "standard" ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                }`}>
                  Complete program with essential support
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className={`text-4xl font-bold mb-2 ${
                  selectedPlan === "standard" ? "text-white" : "text-black dark:text-white"
                }`}>
                  ${program.pricing.standard.price.toLocaleString()}
                </div>
                <div className={`text-sm line-through mb-2 ${
                  selectedPlan === "standard" ? "text-white/60" : "text-gray-400"
                }`}>
                  ${program.pricing.standard.originalPrice.toLocaleString()}
                </div>
                <div className={`text-sm font-medium ${
                  selectedPlan === "standard" ? "text-white" : "text-green-600"
                }`}>
                  Save ${program.pricing.standard.savings.toLocaleString()}
                </div>
                <p className={`text-sm mt-2 ${
                  selectedPlan === "standard" ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                }`}>
                  One-time payment or 6-month plan available
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {program.pricing.standard.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedPlan === "standard" ? "bg-white/20" : "bg-primary/10"
                    }`}>
                      <svg className={`h-3 w-3 ${
                        selectedPlan === "standard" ? "text-white" : "text-primary"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`${
                      selectedPlan === "standard" ? "text-white/90" : "text-titlebgdark dark:text-waterloo"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setSelectedPlan("standard")}
                className={`w-full rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
                  selectedPlan === "standard"
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg hover:shadow-primary/25"
                }`}
              >
                {selectedPlan === "standard" ? "Selected Plan" : "Choose Standard"}
              </button>
            </div>
          </motion.div>

          {/* Premium Plan (if available) */}
          {program.pricing.premium && (
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
              className="relative"
            >
              <div className={`rounded-3xl p-8 transition-all duration-300 ${
                selectedPlan === "premium"
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105"
                  : "bg-white/80 backdrop-blur-sm border border-stroke hover:border-primary dark:border-strokedark dark:bg-blacksection/80"
              }`}>
                {selectedPlan === "premium" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Premium Experience
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    selectedPlan === "premium" ? "text-white" : "text-black dark:text-white"
                  }`}>
                    Premium Plan
                  </h3>
                  <p className={`${
                    selectedPlan === "premium" ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                  }`}>
                    Enhanced support and career services
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className={`text-4xl font-bold mb-2 ${
                    selectedPlan === "premium" ? "text-white" : "text-black dark:text-white"
                  }`}>
                    ${program.pricing.premium.price.toLocaleString()}
                  </div>
                  <div className={`text-sm line-through mb-2 ${
                    selectedPlan === "premium" ? "text-white/60" : "text-gray-400"
                  }`}>
                    ${program.pricing.premium.originalPrice.toLocaleString()}
                  </div>
                  <div className={`text-sm font-medium ${
                    selectedPlan === "premium" ? "text-white" : "text-green-600"
                  }`}>
                    Save ${program.pricing.premium.savings.toLocaleString()}
                  </div>
                  <p className={`text-sm mt-2 ${
                    selectedPlan === "premium" ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                  }`}>
                    One-time payment or 8-month plan available
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {program.pricing.premium.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedPlan === "premium" ? "bg-white/20" : "bg-primary/10"
                      }`}>
                        <svg className={`h-3 w-3 ${
                          selectedPlan === "premium" ? "text-white" : "text-primary"
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`${
                        selectedPlan === "premium" ? "text-white/90" : "text-titlebgdark dark:text-waterloo"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedPlan("premium")}
                  className={`w-full rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
                    selectedPlan === "premium"
                      ? "bg-white text-purple-600 hover:bg-white/90"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                  }`}
                >
                  {selectedPlan === "premium" ? "Selected Plan" : "Choose Premium"}
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Additional Info */}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 p-8 dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Flexible Payment Plans
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  Split your investment into manageable monthly payments with 0% interest
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  30-Day Money-Back Guarantee
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  Not satisfied? Get a full refund within the first 30 days, no questions asked
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  ROI Guarantee
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  95% of our graduates see career advancement within 12 months of completion
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-titlebgdark dark:text-waterloo mb-4">
                Questions about pricing or payment plans?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href={`/enrollment?program=${program.slug}`}
                  className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Enroll Now - ${selectedPlan === "premium" ? program.pricing.premium?.price.toLocaleString() : program.pricing.standard.price.toLocaleString()}
                </a>
                <button 
                  onClick={() => window.location.href = '/support/schedule-consultation?type=advisor'}
                  className="rounded-full border border-stroke px-8 py-3 font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  Speak with Advisor
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetailPricing;