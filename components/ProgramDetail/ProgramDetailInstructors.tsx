"use client";
import { motion } from "framer-motion";

interface ProgramDetailInstructorsProps {
  program: any;
}

const ProgramDetailInstructors = ({ program }: ProgramDetailInstructorsProps) => {
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
            EXPERT FACULTY
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Learn From
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Industry Leaders
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Our world-class instructors bring decades of real-world experience from leading organizations to provide you with practical, actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {program.instructors.map((instructor: any, index: number) => (
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
              className="group"
            >
              <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-solid-8 border border-stroke transition-all duration-300 hover:shadow-solid-10 dark:border-strokedark dark:bg-blacksection/80">
                {/* Instructor Image & Basic Info */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-blue-100 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                    {instructor.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {instructor.title}
                    </p>
                    <p className="text-sm text-titlebgdark dark:text-waterloo">
                      {instructor.credentials}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-titlebgdark dark:text-waterloo leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black dark:text-white mb-3 uppercase tracking-wider">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill: string, skillIndex: number) => (
                      <span
                        key={skillIndex}
                        className="rounded-full bg-gradient-to-r from-primary/10 to-blue-50 px-3 py-1 text-sm font-medium text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Teaching Approach */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-50/50 border border-primary/10 dark:from-primary/10 dark:to-blue-900/10">
                  <h5 className="font-semibold text-black dark:text-white mb-2">
                    Teaching Approach
                  </h5>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">
                    {index === 0 
                      ? "Combines theoretical foundations with hands-on practical applications, using real-world case studies and interactive problem-solving sessions."
                      : "Focuses on strategic thinking and practical implementation, with emphasis on building actionable skills through collaborative learning experiences."
                    }
                  </p>
                </div>

                {/* Student Feedback */}
                <div className="mt-6 pt-6 border-t border-stroke dark:border-strokedark">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-black dark:text-white">
                          {index === 0 ? "4.9" : "4.8"}/5
                        </span>
                      </div>
                      <p className="text-xs text-titlebgdark dark:text-waterloo">
                        Student Rating
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {index === 0 ? "850+" : "620+"}
                      </div>
                      <p className="text-xs text-titlebgdark dark:text-waterloo">
                        Students Taught
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Quote */}
                <div className="mt-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/60">
                  <svg className="h-6 w-6 text-primary/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-sm italic text-titlebgdark dark:text-waterloo">
                    {index === 0 
                      ? "The future of HR lies in data-driven decision making. I'm passionate about teaching professionals how to harness the power of analytics to transform their organizations."
                      : "Strategic HR leadership requires both vision and practical execution. I help students develop both the mindset and the skills to drive meaningful organizational change."
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Faculty Info */}
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
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 p-8 dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
              Why Our Faculty Makes the Difference
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Academic Excellence
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  PhD-level credentials from top universities combined with practical industry experience
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Industry Leadership
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  Current and former executives from Fortune 500 companies bringing real-world insights
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Personalized Mentoring
                </h4>
                <p className="text-titlebgdark dark:text-waterloo">
                  Direct access to instructors for guidance, career advice, and ongoing professional development
                </p>
              </div>
            </div>

            {/* Faculty Contact */}
            <div className="mt-8 text-center">
              <p className="text-titlebgdark dark:text-waterloo mb-4">
                Want to connect with our faculty before enrolling?
              </p>
              <button 
                onClick={() => window.location.href = '/support/schedule-consultation?type=faculty-meet'}
                className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule Faculty Meet & Greet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetailInstructors;