"use client";
import { motion } from "framer-motion";

interface ProgramDetailOverviewProps {
  program: any;
}

const ProgramDetailOverview = ({ program }: ProgramDetailOverviewProps) => {
  // Early return if program is not loaded
  if (!program) {
    return (
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
          >
            <span className="font-medium uppercase text-primary dark:text-white mb-4 block">
              PROGRAM OVERVIEW
            </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              What You'll
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
                Learn
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-titlebgdark dark:text-waterloo mb-8">
              {program?.overview?.description || 'This comprehensive program is designed to advance your career with industry-leading education and practical skills development.'}
            </p>

            {/* What You'll Learn */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Key Learning Areas
              </h3>
              <div className="space-y-3">
                {(program?.overview?.highlights || [
                  'Master essential professional skills and industry best practices',
                  'Gain hands-on experience through practical projects and case studies',
                  'Learn from expert instructors with real-world experience',
                  'Build a professional network with peers and industry leaders',
                  'Develop critical thinking and problem-solving abilities',
                  'Earn industry-recognized certification upon completion'
                ]).map((highlight: string, index: number) => (
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
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-titlebgdark dark:text-waterloo">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program Format Details */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Program Format
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black dark:text-white">Learning Mode</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">{program?.format || 'Online'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black dark:text-white">Time Commitment</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">
                      {(program?.type || '').includes('Certificate') ? "8-10 hours/week" : "12-15 hours/week"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black dark:text-white">Experience Level</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">{program?.level || 'All Levels'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black dark:text-white">Next Cohort</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">{program?.nextStart || 'Rolling Admissions'}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Learning Outcomes */}
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
            <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 p-8 dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Learning Outcomes
              </h3>
              <p className="text-titlebgdark dark:text-waterloo mb-6">
                Upon successful completion of this program, you will be able to:
              </p>
              
              <div className="space-y-4">
                {(program?.overview?.outcomes || [
                  'Apply advanced professional principles and methodologies in real-world scenarios',
                  'Lead strategic initiatives and drive organizational transformation',
                  'Analyze complex business challenges and develop data-driven solutions',
                  'Build and manage high-performing teams in diverse environments',
                  'Communicate effectively with stakeholders at all organizational levels',
                  'Implement best practices and drive continuous improvement initiatives'
                ]).map((outcome: string, index: number) => (
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
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/60"
                  >
                    <div className="mt-0.5 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-black dark:text-white">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              {/* Career Impact */}
              <div className="mt-8 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stroke dark:border-strokedark dark:bg-blacksection/80">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Career Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">85%</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">Career Advancement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$15K</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">Average Salary Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">6 months</div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">Time to Promotion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Prerequisites
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-titlebgdark dark:text-waterloo">
                    {(program?.level || 'Beginner') === "Beginner" ? "No prior experience required" : 
                     (program?.level || '') === "Intermediate" ? "2+ years of HR experience recommended" :
                     "5+ years of HR experience in leadership roles"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-titlebgdark dark:text-waterloo">
                    Bachelor's degree or equivalent work experience
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-titlebgdark dark:text-waterloo">
                    {(program?.id || '').includes("analytics") ? "Basic Excel and statistical knowledge helpful" : "Strong communication and analytical skills"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailOverview;