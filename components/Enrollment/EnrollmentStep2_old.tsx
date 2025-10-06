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

const EnrollmentStep2 = ({ data, updateData, onNext, onPrev, isValid }: Props) => {
  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", 
    "France", "Netherlands", "Singapore", "UAE", "Other"
  ];

  const handleInputChange = (field: string, value: string, isAddress = false) => {
    if (isAddress) {
      const newPersonalInfo = {
        ...personalInfo,
        address: {
          ...personalInfo.address,
          [field]: value
        }
      };
      setPersonalInfo(newPersonalInfo);
      updateData({ personalInfo: newPersonalInfo });
    } else {
      const newPersonalInfo = {
        ...personalInfo,
        [field]: value
      };
      setPersonalInfo(newPersonalInfo);
      updateData({ personalInfo: newPersonalInfo });
    }
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
            Personal Information
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Please provide your personal details for enrollment and certification purposes.
          </p>
        </div>

        <form className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={personalInfo.firstName}
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
                value={personalInfo.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={personalInfo.email}
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
                value={personalInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                Nationality
              </label>
              <select
                value={personalInfo.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
              >
                <option value="">Select your nationality</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Address Information */}
          <div className="border-t border-stroke dark:border-strokedark pt-6">
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Address Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  value={personalInfo.address.street}
                  onChange={(e) => handleInputChange('street', e.target.value, true)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                  placeholder="Enter your street address"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={personalInfo.address.city}
                    onChange={(e) => handleInputChange('city', e.target.value, true)}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={personalInfo.address.state}
                    onChange={(e) => handleInputChange('state', e.target.value, true)}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="State/Province"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    value={personalInfo.address.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value, true)}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    placeholder="ZIP/Postal Code"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Country
                </label>
                <select
                  value={personalInfo.address.country}
                  onChange={(e) => handleInputChange('country', e.target.value, true)}
                  className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
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
            Back to Program Selection
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
            Continue to Background
            <svg className="ml-2 inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep2;