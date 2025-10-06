"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProgramsList = () => {
  const programs = [
    {
      id: 1,
      type: "Certificate",
      title: "HR Analytics & People Data",
      duration: "6 months",
      level: "Intermediate",
      format: "100% Online",
      price: 2499,
      originalPrice: 3499,
      rating: 4.9,
      students: 2850,
      slug: "hr-analytics-certificate",
      highlights: [
        "Python for HR Analytics",
        "Predictive Modeling",
        "Workforce Planning",
        "Dashboard Creation"
      ],
      skills: [
        "Data Visualization",
        "Statistical Analysis",
        "Predictive Analytics",
        "HR Metrics"
      ],
      instructor: "Dr. Sarah Chen",
      image: "/images/programs/hr-analytics.jpg",
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      type: "Diploma",
      title: "Strategic Human Resources Management",
      duration: "12 months",
      level: "Advanced",
      format: "Hybrid",
      price: 4999,
      originalPrice: 6999,
      rating: 4.8,
      students: 1750,
      slug: "strategic-hr-diploma",
      highlights: [
        "Strategic HR Planning",
        "Change Management",
        "Leadership Development",
        "Global HR Practices"
      ],
      skills: [
        "Strategic Thinking",
        "Change Leadership",
        "Global HR",
        "Executive Presence"
      ],
      instructor: "Prof. Michael Torres",
      image: "/images/programs/strategic-hr.jpg",
      badge: "Executive Track",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      type: "Certificate",
      title: "Diversity, Equity & Inclusion",
      duration: "4 months",
      level: "Beginner",
      format: "100% Online",
      price: 2299,
      originalPrice: 2999,
      rating: 4.7,
      students: 3200,
      slug: "diversity-inclusion-certificate",
      highlights: [
        "Unconscious Bias Training",
        "Inclusive Leadership",
        "DEI Metrics",
        "Cultural Competency"
      ],
      skills: [
        "Inclusive Leadership",
        "Cultural Intelligence",
        "DEI Strategy",
        "Bias Mitigation"
      ],
      instructor: "Dr. Aisha Patel",
      image: "/images/programs/dei.jpg",
      badge: "Hot Topic",
      color: "from-green-500 to-teal-500"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Most Popular":
        return "bg-gradient-to-r from-orange-500 to-orange-600";
      case "Executive Track":
        return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Degree Program":
        return "bg-gradient-to-r from-red-500 to-red-600";
      case "Hot Topic":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "Industry Focused":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Legal Focus":
        return "bg-gradient-to-r from-gray-600 to-gray-700";
      default:
        return "bg-gradient-to-r from-primary to-blue-600";
    }
  };

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-white shadow-solid-8 border border-stroke overflow-hidden hover:shadow-solid-10 transition-all duration-500 dark:border-strokedark dark:bg-blacksection"
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${getBadgeColor(program.badge)}`}>
                {program.badge}
              </div>

              {/* Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${program.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    {program.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-titlebgdark dark:text-waterloo">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Key Learning Areas:</h4>
                  <div className="space-y-1">
                    {program.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-titlebgdark dark:text-waterloo">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {program.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                        {skill}
                      </span>
                    ))}
                    {program.skills.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        +{program.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating & Students */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-titlebgdark dark:text-waterloo">{program.rating}</span>
                  </div>
                  <span className="text-titlebgdark dark:text-waterloo">{program.students.toLocaleString()} students</span>
                </div>

                {/* Instructor */}
                <div className="mb-4">
                  <span className="text-sm text-titlebgdark dark:text-waterloo">
                    Instructor: <span className="font-medium text-black dark:text-white">{program.instructor}</span>
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-black dark:text-white">
                      ${program.price.toLocaleString()}
                    </span>
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ${program.originalPrice.toLocaleString()}
                    </span>
                    <div className="text-xs text-green-600 font-medium">
                      Save ${(program.originalPrice - program.price).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-titlebgdark dark:text-waterloo">{program.format}</div>
                    <div className="text-xs text-green-600">✓ Certificate Included</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href={`/enrollment?program=${program.slug}`}
                    className="block w-full rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Enroll Now
                  </a>
                  <div className="flex gap-2">
                    <a
                      href={`/programs/${program.slug}`}
                      className="flex-1 rounded-full border border-stroke px-4 py-2 text-sm font-medium text-black text-center hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                    >
                      View Details
                    </a>
                    <button className="flex-1 rounded-full border border-stroke px-4 py-2 text-sm font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary">
                      Free Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Explore More Programs
          </button>
          <p className="mt-3 text-sm text-titlebgdark dark:text-waterloo">
            Showing all 3 featured programs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsList;