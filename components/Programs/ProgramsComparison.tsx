"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProgramsComparison = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const comparisonData = {
    overview: {
      title: "Program Overview Comparison",
      programs: [
        {
          type: "HR Analytics Certificate",
          duration: "6 months",
          format: "100% Online",
          commitment: "6-8 hours/week",
          cost: "$2,499",
          bestFor: "Data-driven HR professionals",
          features: [
            "Python & SQL for HR",
            "Predictive analytics",
            "Dashboard creation",
            "Statistical modeling"
          ]
        },
        {
          type: "Strategic HR Diploma",
          duration: "12 months",
          format: "Hybrid",
          commitment: "10-12 hours/week",
          cost: "$4,999",
          bestFor: "Aspiring HR leaders and executives",
          features: [
            "Strategic planning",
            "Change management",
            "Leadership development",
            "Global HR practices"
          ]
        },
        {
          type: "DEI Certificate",
          duration: "4 months",
          format: "100% Online",
          commitment: "5-7 hours/week",
          cost: "$2,299",
          bestFor: "Diversity & inclusion champions",
          features: [
            "Unconscious bias training",
            "Inclusive leadership",
            "DEI metrics & analytics",
            "Cultural competency"
          ]
        }
      ]
    },
    curriculum: {
      title: "Curriculum & Learning Outcomes",
      programs: [
        {
          type: "HR Analytics Certificate",
          coreSubjects: "6 core modules",
          practicalWork: "Python projects & dashboards",
          capstone: "Workforce analytics project",
          skills: "Data analysis & visualization",
          outcomes: [
            "Advanced analytics skills",
            "Industry certification",
            "Portfolio of projects",
            "Data-driven decision making"
          ]
        },
        {
          type: "Strategic HR Diploma",
          coreSubjects: "12 comprehensive modules",
          practicalWork: "Strategic consulting projects",
          capstone: "Organizational transformation project",
          skills: "Leadership & strategic planning",
          outcomes: [
            "Managerial competencies",
            "Strategic thinking",
            "Change leadership",
            "Professional advancement"
          ]
        },
        {
          type: "DEI Certificate",
          coreSubjects: "8 specialized modules",
          practicalWork: "DEI assessment & strategy",
          capstone: "Inclusion transformation project",
          skills: "Cultural intelligence & inclusion",
          outcomes: [
            "DEI expertise",
            "Inclusive leadership skills",
            "Cultural competency",
            "Measurable impact"
          ]
        }
      ]
    },
    support: {
      title: "Student Support & Resources",
      programs: [
        {
          type: "HR Analytics Certificate",
          mentorship: "Data analytics expert mentor",
          support: "24/7 technical support",
          resources: "Python/SQL development environment",
          networking: "Analytics professionals community",
          features: [
            "Code review sessions",
            "Career guidance",
            "Industry webinars",
            "Alumni network access"
          ]
        },
        {
          type: "Strategic HR Diploma",
          mentorship: "Dedicated executive advisor",
          support: "Priority support channels",
          resources: "Extended library & case studies",
          networking: "Executive networking events",
          features: [
            "Personal academic advisor",
            "Career placement assistance",
            "Leadership workshops",
            "Executive mentorship"
          ]
        },
        {
          type: "DEI Certificate",
          mentorship: "Faculty supervisor & mentor",
          support: "Comprehensive student services",
          resources: "Full university resources",
          networking: "Alumni association membership",
          features: [
            "Faculty supervision",
            "Thesis guidance",
            "Research support",
            "Lifetime alumni benefits"
          ]
        }
      ]
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "curriculum", label: "Curriculum", icon: "📚" },
    { id: "support", label: "Support", icon: "🤝" }
  ];

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
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
            MAKE AN INFORMED DECISION
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Compare
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Programs
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Compare our educational programs side-by-side to find the perfect match for your career goals, time commitment, and learning preferences.
          </p>
        </motion.div>

        {/* Tab Navigation */}
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
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                    : "bg-white border border-stroke text-black hover:border-primary hover:text-primary dark:bg-blacksection dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
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
          className="animate_top"
        >
          <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80">
            <div className="bg-gradient-to-r from-primary to-blue-600 px-8 py-6">
              <h3 className="text-xl font-bold text-white">
                {comparisonData[activeTab].title}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <th className="px-6 py-4 text-left font-semibold text-black dark:text-white">
                      Features
                    </th>
                    {comparisonData[activeTab].programs.map((program, index) => (
                      <th key={index} className="px-6 py-4 text-center font-semibold text-black dark:text-white min-w-[250px]">
                        {program.type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeTab === "overview" && (
                    <>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Duration</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.duration}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Format</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.format}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Time Commitment</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.commitment}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Investment</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center">
                            <span className="font-semibold text-primary">{program.cost}</span>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Best For</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.bestFor}
                          </td>
                        ))}
                      </tr>
                    </>
                  )}

                  {activeTab === "curriculum" && (
                    <>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Core Subjects</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.coreSubjects}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Practical Work</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.practicalWork}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Capstone Project</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.capstone}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Skill Focus</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.skills}
                          </td>
                        ))}
                      </tr>
                    </>
                  )}

                  {activeTab === "support" && (
                    <>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Mentorship</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.mentorship}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Support Channels</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.support}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Learning Resources</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.resources}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-6 py-4 font-medium text-black dark:text-white">Networking</td>
                        {comparisonData[activeTab].programs.map((program, index) => (
                          <td key={index} className="px-6 py-4 text-center text-titlebgdark dark:text-waterloo">
                            {program.networking}
                          </td>
                        ))}
                      </tr>
                    </>
                  )}

                  {/* Features/Outcomes Row */}
                  <tr>
                    <td className="px-6 py-4 font-medium text-black dark:text-white">
                      {activeTab === "overview" ? "Key Features" : activeTab === "curriculum" ? "Learning Outcomes" : "Additional Support"}
                    </td>
                    {comparisonData[activeTab].programs.map((program, index) => (
                      <td key={index} className="px-6 py-4">
                        <div className="space-y-2">
                          {(activeTab === "overview" ? program.features : activeTab === "curriculum" ? program.outcomes : program.features).map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-titlebgdark dark:text-waterloo">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Section */}
            <div className="border-t border-stroke p-8 dark:border-strokedark">
              <div className="flex flex-col items-center gap-4 text-center">
                <h4 className="text-lg font-semibold text-black dark:text-white">
                  Still Not Sure Which Program is Right for You?
                </h4>
                <p className="text-titlebgdark dark:text-waterloo max-w-2xl">
                  Our education advisors are here to help you choose the perfect program based on your career goals, experience level, and schedule.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                    Talk to an Advisor
                  </button>
                  <button className="rounded-full border border-stroke px-8 py-3 font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary">
                    Download Comparison Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsComparison;