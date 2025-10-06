"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  data: any;
}

const EnrollmentSuccess = ({ data }: Props) => {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const generateApplicationId = () => {
    return `GIHCR-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const nextSteps = [
    {
      step: "1",
      title: "Welcome Email",
      description: "Check your email for welcome materials and program details",
      timeframe: "Within 24 hours",
      icon: "📧"
    },
    {
      step: "2",
      title: "Program Access",
      description: "Receive your learning platform credentials and course materials",
      timeframe: "2-3 business days",
      icon: "🔑"
    },
    {
      step: "3",
      title: "Orientation Session",
      description: "Join the program orientation and meet your cohort",
      timeframe: "1 week before start date",
      icon: "👥"
    },
    {
      step: "4",
      title: "Program Begins",
      description: "Start your learning journey with live sessions and coursework",
      timeframe: new Date(data.startDate).toLocaleDateString(),
      icon: "🚀"
    }
  ];

  const supportResources = [
    {
      title: "Student Support Center",
      description: "24/7 academic and technical support",
      action: "Get Help",
      link: "/support"
    },
    {
      title: "Program Community",
      description: "Connect with fellow students and alumni",
      action: "Join Community",
      link: "/community"
    },
    {
      title: "Download Mobile App",
      description: "Access your courses on-the-go",
      action: "Download App",
      link: "/app"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Confetti Animation */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl bg-white p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection"
      >
        {/* Success Header */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
          >
            <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-4xl"
          >
            🎉 Enrollment Successful!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-titlebgdark dark:text-waterloo"
          >
            Welcome to GIHCR! Your journey to HR excellence begins now.
          </motion.p>
        </div>

        {/* Application Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 rounded-lg bg-primary/5 p-6 border border-primary/20"
        >
          <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
            Application Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-titlebgdark dark:text-waterloo">Application ID</div>
              <div className="font-mono font-semibold text-primary">{generateApplicationId()}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-titlebgdark dark:text-waterloo">Program</div>
              <div className="font-semibold text-black dark:text-white">{data.programTitle}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-titlebgdark dark:text-waterloo">Start Date</div>
              <div className="font-semibold text-black dark:text-white">
                {new Date(data.startDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-titlebgdark dark:text-waterloo">Student Name</div>
              <div className="font-semibold text-black dark:text-white">
                {data.personalInfo.firstName} {data.personalInfo.lastName}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-8"
        >
          <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
            What Happens Next?
          </h2>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm border border-stroke dark:border-strokedark dark:bg-blacksection"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-semibold text-black dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-titlebgdark dark:text-waterloo mb-1">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-primary">
                    {step.timeframe}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mb-8"
        >
          <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
            Support & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="rounded-lg bg-white p-4 text-center shadow-sm border border-stroke dark:border-strokedark dark:bg-blacksection"
              >
                <h3 className="mb-2 font-semibold text-black dark:text-white">
                  {resource.title}
                </h3>
                <p className="mb-3 text-sm text-titlebgdark dark:text-waterloo">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {resource.action}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Access Student Dashboard
            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-stroke px-8 py-3 font-semibold text-black hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            Return to Homepage
          </a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 text-center border-t border-stroke pt-6 dark:border-strokedark"
        >
          <p className="text-sm text-titlebgdark dark:text-waterloo mb-2">
            Questions? Contact our Student Success Team
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:support@gihcr.edu" className="text-primary hover:underline">
              📧 support@gihcr.edu
            </a>
            <a href="tel:+1-800-GIHCR-EDU" className="text-primary hover:underline">
              📞 1-800-GIHCR-EDU
            </a>
            <a href="/chat" className="text-primary hover:underline">
              💬 Live Chat
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnrollmentSuccess;