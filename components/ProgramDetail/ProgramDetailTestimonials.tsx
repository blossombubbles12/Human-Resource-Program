"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProgramDetailTestimonialsProps {
  program: any;
}

const ProgramDetailTestimonials = ({ program }: ProgramDetailTestimonialsProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10">
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
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Real Impact,
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Real Results
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Hear from our alumni who have transformed their careers and organizations through this program.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Testimonial */}
          <motion.div
            key={activeTestimonial}
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
            animate="visible"
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/90">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="h-12 w-12 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed text-black dark:text-white mb-8">
                "{program.testimonials[activeTestimonial].quote}"
              </blockquote>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  Career Impact
                </h4>
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-50/50 border border-primary/10">
                  <p className="text-titlebgdark dark:text-waterloo font-medium">
                    {program.testimonials[activeTestimonial].results}
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-stroke pt-6 dark:border-strokedark">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center text-2xl font-bold text-primary">
                    {program.testimonials[activeTestimonial].name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      {program.testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-sm text-titlebgdark dark:text-waterloo">
                      {program.testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {program.testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-titlebgdark dark:text-waterloo">
                    Program Graduate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Controls & Stats */}
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
            className="space-y-6"
          >
            {/* Testimonial Navigation */}
            <div className="space-y-4">
              {program.testimonials.map((testimonial: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full rounded-xl p-4 text-left transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                      : "bg-white/60 border border-stroke hover:border-primary dark:border-strokedark dark:bg-blacksection/60 dark:hover:border-primary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === activeTestimonial
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${
                        index === activeTestimonial ? "text-white" : "text-black dark:text-white"
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm truncate ${
                        index === activeTestimonial ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                      }`}>
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Program Success Stats */}
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-6 border border-stroke dark:border-strokedark dark:bg-blacksection/60">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Program Success Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">94%</div>
                  <div className="text-sm text-titlebgdark dark:text-waterloo">Career Advancement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">$18K</div>
                  <div className="text-sm text-titlebgdark dark:text-waterloo">Avg Salary Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">89%</div>
                  <div className="text-sm text-titlebgdark dark:text-waterloo">Promotion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4.8/5</div>
                  <div className="text-sm text-titlebgdark dark:text-waterloo">Program Rating</div>
                </div>
              </div>
            </div>

            {/* Alumni Network */}
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-blue-50 p-6 dark:from-primary/20 dark:to-blue-900/10">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Join Our Alumni Network
              </h4>
              <p className="text-titlebgdark dark:text-waterloo mb-4 text-sm">
                Connect with {program.students.toLocaleString()}+ professionals across industries and continue learning together.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-primary">
                  Fortune 500 Companies
                </span>
                <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-primary">
                  Global Network
                </span>
                <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-primary">
                  Lifetime Access
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button 
                onClick={() => window.location.href = '/enrollment'}
                className="w-full rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Join These Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailTestimonials;