"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  isValid: boolean;
}

const EnrollmentStep1 = ({ data, updateData, onNext, isValid }: Props) => {
  const [formData, setFormData] = useState({
    selectedProgram: data.selectedProgram || "",
    programPrice: data.programPrice || 0,
    startDate: data.startDate || "",
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || ""
  });

  const programs = [
    {
      id: "hr-analytics-certificate",
      title: "HR Analytics & People Data Certificate",
      duration: "6 months",
      format: "100% Online",
      price: 2499,
      originalPrice: 3499,
      description: "Master data-driven HR decision making with advanced analytics"
    },
    {
      id: "strategic-hr-diploma", 
      title: "Strategic HR Management Diploma",
      duration: "12 months",
      format: "Hybrid",
      price: 4999,
      originalPrice: 6999,
      description: "Develop strategic HR leadership skills for senior roles"
    },
    {
      id: "diversity-inclusion-certificate",
      title: "Diversity, Equity & Inclusion Certificate", 
      duration: "4 months",
      format: "100% Online",
      price: 2299,
      originalPrice: 2999,
      description: "Build inclusive workplaces through evidence-based strategies"
    }
  ];

  const startDates = [
    { value: "2025-01-15", label: "January 15, 2025" },
    { value: "2025-02-15", label: "February 15, 2025" },
    { value: "2025-03-15", label: "March 15, 2025" },
    { value: "2025-04-15", label: "April 15, 2025" }
  ];

  useEffect(() => {
    updateData(formData);
  }, [formData]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProgramSelect = (program: any) => {
    setFormData(prev => ({
      ...prev,
      selectedProgram: program.id,
      programPrice: program.price
    }));
  };

  const selectedProgramData = programs.find(p => p.id === formData.selectedProgram);

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
            Program Selection & Personal Details
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Choose your program and provide your contact information
          </p>
        </div>

        {/* Program Selection */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Select Your Program
          </h3>
          <div className="space-y-4">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 ${
                  formData.selectedProgram === program.id
                    ? 'border-primary bg-primary/5'
                    : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                }`}
                onClick={() => handleProgramSelect(program)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {program.title}
                    </h4>
                    <p className="mt-1 text-titlebgdark dark:text-waterloo">
                      {program.description}
                    </p>
                    <div className="mt-3 flex gap-4 text-sm">
                      <span className="text-primary font-medium">
                        {program.duration}
                      </span>
                      <span className="text-titlebgdark dark:text-waterloo">
                        {program.format}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-black dark:text-white">
                      ${program.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-titlebgdark line-through">
                      ${program.originalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Start Date Selection */}
        {formData.selectedProgram && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8"
          >
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Choose Your Start Date
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {startDates.map((date) => (
                <motion.div
                  key={date.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all duration-300 ${
                    formData.startDate === date.value
                      ? 'border-primary bg-primary text-white'
                      : 'border-stroke hover:border-primary dark:border-strokedark'
                  }`}
                  onClick={() => handleInputChange('startDate', date.value)}
                >
                  <div className="font-semibold">{date.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Personal Information */}
        {formData.selectedProgram && formData.startDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8"
          >
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Summary */}
        {selectedProgramData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-lg bg-gradient-to-r from-primary/10 to-blue-50 p-6 dark:from-primary/20 dark:to-blacksection"
          >
            <h4 className="mb-2 font-semibold text-black dark:text-white">
              Selected Program
            </h4>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-black dark:text-white">
                  {selectedProgramData.title}
                </div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">
                  Start Date: {startDates.find(d => d.value === formData.startDate)?.label}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">
                  ${selectedProgramData.price.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">
                  Save ${(selectedProgramData.originalPrice - selectedProgramData.price).toLocaleString()}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            disabled={!isValid}
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primaryho disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Background Information
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep1;