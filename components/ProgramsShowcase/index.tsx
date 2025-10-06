"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ProgramsShowcase = () => {
  const featuredPrograms = [
    {
      id: 1,
      type: "Certificate",
      title: "HR Analytics & People Data",
      duration: "6 months",
      level: "Intermediate",
      price: 2499,
      originalPrice: 3499,
      rating: 4.9,
      students: 2850,
      slug: "hr-analytics-certificate",
      highlights: ["Python for HR Analytics", "Predictive Modeling", "Workforce Planning"],
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
      icon: "📊"
    },
    {
      id: 2,
      type: "Diploma",
      title: "Strategic Human Resources Management",
      duration: "12 months",
      level: "Advanced",
      price: 4999,
      originalPrice: 6999,
      rating: 4.8,
      students: 1750,
      slug: "strategic-hr-diploma",
      highlights: ["Strategic HR Planning", "Change Management", "Leadership Development"],
      badge: "Best Value",
      color: "from-purple-500 to-pink-500",
      icon: "🎯"
    },
    {
      id: 3,
      type: "Certificate",
      title: "Diversity, Equity & Inclusion",
      duration: "4 months",
      level: "All Levels",
      price: 1899,
      originalPrice: 2499,
      rating: 4.9,
      students: 3200,
      slug: "diversity-inclusion-certificate",
      highlights: ["Inclusive Leadership", "Bias Assessment", "Cultural Competency"],
      badge: "New",
      color: "from-green-500 to-teal-500",
      icon: "🤝"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 mb-4 shadow-lg dark:bg-gray-800/80">
            <span className="mr-2 text-lg">🎓</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Featured Programs
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl mb-4">
            Transform Your <span className="text-primary">HR Career</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our most popular HR programs designed by industry experts and trusted by 50,000+ professionals worldwide.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800">
                {/* Badge */}
                {program.badge && (
                  <div className={`absolute top-4 right-4 rounded-full bg-gradient-to-r ${program.color} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                    {program.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${program.color} text-white text-xl shadow-lg`}>
                      {program.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {program.type}
                      </span>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {program.duration} • {program.level}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {program.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="mb-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium text-gray-900 dark:text-white">{program.rating}</span>
                    <span className="text-gray-500">({program.students.toLocaleString()})</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${program.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${program.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Payment plans available
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    href={`/programs/${program.slug}`}
                    className={`block w-full rounded-xl bg-gradient-to-r ${program.color} px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    View Program
                  </Link>
                  <Link
                    href={`/enrollment?program=${program.slug}`}
                    className="block w-full rounded-xl border-2 border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:border-primary"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            <span>View All Programs</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.293 4.293a1 1 0 011.414 0L12 6.586V4a1 1 0 112 0v5a1 1 0 01-1 1H8a1 1 0 110-2h2.586L8.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;