"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProgramsTestimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior HR Manager",
      company: "Microsoft",
      program: "HR Analytics Certificate",
      image: "/images/testimonials/sarah.jpg",
      quote: "The HR Analytics program completely transformed how I approach workforce planning. The practical Python skills and data visualization techniques I learned are now central to my daily work. Within 6 months of graduation, I was promoted to Senior HR Manager.",
      results: [
        "Promoted to Senior HR Manager",
        "30% improvement in hiring efficiency",
        "Led company-wide analytics initiative"
      ],
      rating: 5,
      completion: "2023"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "VP of People Operations",
      company: "Stripe",
      program: "Strategic HR Management Diploma",
      image: "/images/testimonials/michael.jpg",
      quote: "GIHCR's Strategic HR program gave me the leadership framework I needed to scale our people operations from 200 to 2000+ employees. The change management modules were particularly valuable during our rapid growth phase.",
      results: [
        "Scaled HR ops 10x during growth",
        "Implemented global HR strategy",
        "Built high-performing HR team"
      ],
      rating: 5,
      completion: "2022"
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      role: "Chief People Officer",
      company: "Shopify",
      program: "Master of Human Resources",
      image: "/images/testimonials/aisha.jpg",
      quote: "The MHR program's research component allowed me to develop evidence-based HR practices that have been published in industry journals. The executive network I built continues to be invaluable for strategic partnerships and best practice sharing.",
      results: [
        "Appointed as Chief People Officer",
        "Published 3 research papers",
        "Speaker at 15+ HR conferences"
      ],
      rating: 5,
      completion: "2021"
    },
    {
      id: 4,
      name: "James Chen",
      role: "Director of Talent Acquisition",
      company: "Uber",
      program: "Talent Management Diploma",
      image: "/images/testimonials/james.jpg",
      quote: "The practical recruitment strategies and employer branding techniques I learned helped me reduce time-to-hire by 40% and improve candidate experience scores dramatically. The program's industry connections also opened doors to top talent.",
      results: [
        "40% reduction in time-to-hire",
        "95% candidate satisfaction rate",
        "Built award-winning employer brand"
      ],
      rating: 5,
      completion: "2023"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "DEI Director",
      company: "Airbnb",
      program: "Diversity & Inclusion Certificate",
      image: "/images/testimonials/lisa.jpg",
      quote: "This program gave me the tools and framework to build a comprehensive DEI strategy from the ground up. The cultural competency modules and bias training techniques have been instrumental in creating lasting organizational change.",
      results: [
        "Created company-wide DEI strategy",
        "50% increase in diverse hires",
        "Won industry DEI excellence award"
      ],
      rating: 5,
      completion: "2023"
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Employee Relations Specialist",
      company: "Tesla",
      program: "Employee Relations Certificate",
      image: "/images/testimonials/robert.jpg",
      quote: "The legal compliance and conflict resolution skills I gained have been crucial in my role. The program's case study approach prepared me for real-world challenges, and I've successfully resolved complex employee issues that might have escalated otherwise.",
      results: [
        "99% employee issue resolution rate",
        "Reduced legal complaints by 60%",
        "Mentoring 10+ junior HR professionals"
      ],
      rating: 5,
      completion: "2022"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

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
            SUCCESS STORIES
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Alumni
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Achievements
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Discover how our programs have transformed careers and organizations. Our alumni have achieved remarkable success across leading companies worldwide.
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
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-blue-600 flex-shrink-0" />
                      <span className="text-titlebgdark dark:text-waterloo">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-stroke pt-6 dark:border-strokedark">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center text-2xl font-bold text-primary">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-titlebgdark dark:text-waterloo">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-titlebgdark dark:text-waterloo">
                    Graduate of {currentTestimonial.completion}
                  </p>
                </div>
              </div>

              {/* Program Badge */}
              <div className="absolute -top-4 -right-4">
                <div className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  {currentTestimonial.program}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid & Controls */}
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
            <div className="grid grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`rounded-xl p-4 text-left transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                      : "bg-white/60 border border-stroke hover:border-primary dark:border-strokedark dark:bg-blacksection/60 dark:hover:border-primary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === activeTestimonial
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${
                        index === activeTestimonial ? "text-white" : "text-black dark:text-white"
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-xs truncate ${
                        index === activeTestimonial ? "text-white/80" : "text-titlebgdark dark:text-waterloo"
                      }`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-stroke dark:border-strokedark dark:bg-blacksection/60">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Next
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-sm p-4 text-center border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                <div className="text-2xl font-bold text-primary mb-1">98.5%</div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">Success Rate</div>
              </div>
              <div className="rounded-xl bg-white/60 backdrop-blur-sm p-4 text-center border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">Career Advancement</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsTestimonial;