"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your inquiry! We will contact you within 24 hours.'
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your form. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-primary/5 dark:bg-gradient-to-t dark:to-primary/10"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full opacity-30">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          {/* Section Header */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -30,
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
              GET IN TOUCH
            </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Start Your Learning
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-2">
                Journey Today
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-titlebgdark dark:text-waterloo">
              Ready to advance your HR career? Contact our admissions team for personalized guidance and program recommendations.
            </p>
          </motion.div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-2xl bg-white/80 backdrop-blur-sm p-7.5 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-4 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Get Program Information
              </h2>
              <p className="mb-8 text-titlebgdark dark:text-waterloo">
                Fill out the form below and our education consultants will contact you within 24 hours to discuss your goals and recommend the best program for you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg border ${submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' 
                    : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-medium">{submitStatus.message}</span>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white"
                    />
                  </div>

                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white"
                    />
                  </div>

                  <div className="group">
                    <select name="program" className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-primary text-black dark:text-white">
                      <option value="">Program of Interest</option>
                      <option value="certificate">HR Certificate Program</option>
                      <option value="diploma">Professional HR Diploma</option>
                      <option value="masters">Master's in HR Management</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="group">
                    <select name="experience" className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-primary text-black dark:text-white">
                      <option value="">Current Experience Level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior Level (6+ years)</option>
                      <option value="executive">Executive Level</option>
                    </select>
                  </div>

                  <div className="group">
                    <select name="startDate" className="w-full border-b-2 border-stroke bg-transparent pb-3 pt-2 transition-colors focus:border-primary focus-visible:outline-none dark:border-strokedark dark:focus:border-primary text-black dark:text-white">
                      <option value="">Preferred Start Date</option>
                      <option value="immediate">Immediate</option>
                      <option value="next-month">Next Month</option>
                      <option value="next-quarter">Next Quarter</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your career goals and how we can help you achieve them..."
                    rows={4}
                    className="w-full border-b-2 border-stroke bg-transparent pt-2 transition-colors focus:border-primary focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded-sm peer-checked:bg-primary">
                      <svg
                        className="opacity-0 in-[.group]:peer-checked:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="fill-white"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                            fill=""
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

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
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-8 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
                  <h3 className="mb-4 text-xl font-medium text-black dark:text-white">
                    Admissions Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-black dark:text-white">Global Campus</p>
                        <p className="text-sm text-titlebgdark dark:text-waterloo">123 Education Boulevard<br />Learning District, LD 12345<br />United States</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <p className="font-medium text-black dark:text-white">Email</p>
                        <p className="text-sm text-titlebgdark dark:text-waterloo">
                          <a href="mailto:admissions@gihcr.edu" className="hover:text-primary transition-colors">admissions@gihcr.edu</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <p className="font-medium text-black dark:text-white">Phone</p>
                        <p className="text-sm text-titlebgdark dark:text-waterloo">
                          <a href="tel:+1-800-GIHCR-EDU" className="hover:text-primary transition-colors">+1 (800) 444-2738</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10 p-6 border border-primary/20">
                  <h3 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-titlebgdark dark:text-waterloo">Monday - Friday</span>
                      <span className="font-medium text-black dark:text-white">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-titlebgdark dark:text-waterloo">Saturday</span>
                      <span className="font-medium text-black dark:text-white">9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-titlebgdark dark:text-waterloo">Sunday</span>
                      <span className="font-medium text-black dark:text-white">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-titlebgdark dark:text-waterloo mb-4">
                    Need immediate assistance?
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white dark:bg-blacksection px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Live Chat Support
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
