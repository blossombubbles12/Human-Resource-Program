"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
  isValid: boolean;
}

const EnrollmentStep2 = ({ data, updateData, onNext, onPrev, isValid }: Props) => {
  const [formData, setFormData] = useState({
    experience: data.experience || "",
    goals: data.goals || "",
    hearAboutUs: data.hearAboutUs || ""
  });

  const experienceLevels = [
    "Entry Level (0-2 years in HR)",
    "Mid-Level (3-7 years in HR)",
    "Senior Level (8-15 years in HR)",
    "Executive Level (15+ years in HR)",
    "Transitioning to HR from another field",
    "Recent graduate/Student"
  ];

  const referralSources = [
    "Google Search",
    "Social Media (LinkedIn, Facebook, etc.)",
    "Professional Network/Colleague",
    "University/Educational Institution",
    "Industry Event/Conference",
    "Online Advertisement",
    "Employer Recommendation",
    "Other"
  ];

  useEffect(() => {
    updateData(formData);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-blacksection"
      >
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Background Information
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Tell us about your experience and goals to help us personalize your learning journey
          </p>
        </div>

        <div className="space-y-8">
          {/* Experience Level */}
          <div>
            <label className="block text-lg font-semibold text-black dark:text-white mb-4">
              Current Experience Level *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceLevels.map((level) => (
                <motion.div
                  key={level}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                    formData.experience === level
                      ? 'border-primary bg-primary/5'
                      : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                  }`}
                  onClick={() => handleInputChange('experience', level)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full border-2 ${
                      formData.experience === level
                        ? 'border-primary bg-primary'
                        : 'border-stroke dark:border-strokedark'
                    }`}>
                      {formData.experience === level && (
                        <div className="h-full w-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                    <span className="font-medium text-black dark:text-white">
                      {level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <div>
            <label className="block text-lg font-semibold text-black dark:text-white mb-4">
              Career Goals & Learning Objectives *
            </label>
            <textarea
              value={formData.goals}
              onChange={(e) => handleInputChange('goals', e.target.value)}
              rows={6}
              className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              placeholder="Tell us about your career goals and what you hope to achieve with this program. For example:
              
• I want to transition to a strategic HR role
• I'm looking to develop data analytics skills for HR
• I aim to become an HR director within 3 years
• I want to start my own HR consulting business

This helps us tailor the program content and provide relevant career guidance."
              required
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-lg font-semibold text-black dark:text-white mb-4">
              How did you hear about GIHCR? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {referralSources.map((source) => (
                <motion.div
                  key={source}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                    formData.hearAboutUs === source
                      ? 'border-primary bg-primary/5'
                      : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                  }`}
                  onClick={() => handleInputChange('hearAboutUs', source)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full border-2 ${
                      formData.hearAboutUs === source
                        ? 'border-primary bg-primary'
                        : 'border-stroke dark:border-strokedark'
                    }`}>
                      {formData.hearAboutUs === source && (
                        <div className="h-full w-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                    <span className="font-medium text-black dark:text-white">
                      {source}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-lg bg-gradient-to-r from-primary/10 to-blue-50 p-6 dark:from-primary/20 dark:to-blacksection"
          >
            <h4 className="mb-4 font-semibold text-black dark:text-white">
              What You'll Get Based on Your Profile
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-black dark:text-white">
                  Personalized learning path based on your experience level
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-black dark:text-white">
                  Career coaching aligned with your goals
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-black dark:text-white">
                  Industry connections and networking opportunities
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-black dark:text-white">
                  Job placement assistance and resume optimization
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={onPrev}
            className="rounded-full border border-stroke px-8 py-3 font-semibold text-black hover:border-primary hover:text-primary transition-colors duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            ← Previous Step
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primaryho disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Payment
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep2;