"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
  isValid: boolean;
}

const EnrollmentStep3 = ({ data, updateData, onNext, onPrev, isValid }: Props) => {
  const [background, setBackground] = useState(data.background);

  const educationLevels = [
    "High School",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree",
    "Professional Certification"
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid-Level (3-7 years)",
    "Senior Level (8-15 years)",
    "Executive Level (15+ years)"
  ];

  const referralSources = [
    "Google Search",
    "Social Media",
    "Professional Network",
    "Former Student",
    "University Partnership",
    "HR Conference",
    "Industry Publication",
    "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    const newBackground = {
      ...background,
      [field]: value
    };
    setBackground(newBackground);
    updateData({ background: newBackground });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-white p-8 shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection"
      >
        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Background Information
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Help us understand your educational background and career goals to personalize your learning experience.
          </p>
        </div>

        <form className="space-y-6">
          {/* Education Level */}
          <div>
            <label className="block text-sm font-semibold text-black dark:text-white mb-2">
              Highest Level of Education *
            </label>
            <select
              value={background.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              required
            >
              <option value="">Select your education level</option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-semibold text-black dark:text-white mb-2">
              Professional Experience *
            </label>
            <select
              value={background.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              required
            >
              <option value="">Select your experience level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Current Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                Current Role/Position
              </label>
              <input
                type="text"
                value={background.currentRole}
                onChange={(e) => handleInputChange('currentRole', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                placeholder="e.g., HR Manager, Talent Acquisition Specialist"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                Current Organization
              </label>
              <input
                type="text"
                value={background.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                placeholder="Company/Organization name"
              />
            </div>
          </div>

          {/* Career Goals */}
          <div>
            <label className="block text-sm font-semibold text-black dark:text-white mb-2">
              Career Goals & Objectives
            </label>
            <textarea
              value={background.goals}
              onChange={(e) => handleInputChange('goals', e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              placeholder="Tell us about your career goals and what you hope to achieve with this program..."
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-sm font-semibold text-black dark:text-white mb-2">
              How did you hear about GIHCR?
            </label>
            <select
              value={background.hearAboutUs}
              onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
            >
              <option value="">Select an option</option>
              {referralSources.map((source) => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>

          {/* Motivation Statement */}
          <div className="rounded-lg bg-primary/5 p-6 border border-primary/20">
            <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
              Personal Statement (Optional)
            </h3>
            <p className="mb-3 text-sm text-titlebgdark dark:text-waterloo">
              Share your motivation for pursuing this program and how it aligns with your career aspirations.
            </p>
            <textarea
              rows={3}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              placeholder="Optional: Tell us about your motivation and aspirations..."
            />
          </div>
        </form>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={onPrev}
            className="inline-flex items-center rounded-lg border-2 border-stroke px-6 py-3 font-semibold text-black hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Personal Info
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className={`rounded-lg px-8 py-3 font-semibold text-white transition-all duration-300 ${
              isValid
                ? "bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/25"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Payment
            <svg className="ml-2 inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep3;