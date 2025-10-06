"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProgramsCTA = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const programs = [
    "HR Analytics Certificate",
    "Strategic HR Diploma", 
    "Diversity & Inclusion Certificate"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedProgram, ...formData });
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-[url('/images/shape/shape-dotted-light.svg')] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="font-medium uppercase text-white/80 mb-4 block">
              READY TO TRANSFORM YOUR CAREER?
            </span>
            <h2 className="text-3xl font-bold mb-6 xl:text-hero">
              Start Your HR
              <span className="relative inline-block ml-3">
                Excellence Journey
                <span className="absolute bottom-2.5 left-0 -z-1 h-3 w-full bg-white/20 rounded" />
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-white/90 mb-8">
              Join thousands of HR professionals who have transformed their careers with our world-class programs. Get personalized guidance to choose the perfect program for your goals.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Expert faculty from top organizations",
                "100% online or hybrid learning options",
                "Industry-recognized certifications",
                "Lifetime career support and networking",
                "Flexible payment plans available"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit}</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white xl:text-4xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mb-6 text-lg text-white/90">
              Get personalized guidance from our education advisors and find the perfect program for your goals.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <div className="text-xl font-bold text-white">15,000+</div>
                <div className="text-white/80 text-sm">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">98.5%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">4.9/5</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-2xl dark:bg-blacksection/95">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Get Your Free Consultation
                </h3>
                <p className="text-titlebgdark dark:text-waterloo">
                  Speak with an advisor to find your perfect program.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Program Selection */}
                <div>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    required
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                    <option value="not-sure">I'm not sure yet</option>
                  </select>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="Phone Number (Optional)"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Free Consultation
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-titlebgdark dark:text-waterloo text-center">
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Contact Section */}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
            <h3 className="text-lg font-bold text-white mb-3">
              Need Help Choosing?
            </h3>
            <p className="text-white/90 mb-4">
              Our admissions team is available to help you find the perfect program.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+1-800-GIHCR-EDU"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: 1-800-GIHCR-EDU
              </a>
              <a
                href="mailto:admissions@gihcr.edu"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email: admissions@gihcr.edu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsCTA;