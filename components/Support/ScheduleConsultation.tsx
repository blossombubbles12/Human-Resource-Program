"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const ScheduleConsultation = () => {
  const searchParams = useSearchParams();
  const programSlug = searchParams.get('program');
  const consultationType = searchParams.get('type') || 'consultation';
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: programSlug || "",
    consultationType: consultationType,
    preferredDate: "",
    preferredTime: "",
    timeZone: "",
    experience: "",
    goals: "",
    questions: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const programs = [
    "HR Certificate Program",
    "Professional HR Diploma", 
    "Master's in HR Management",
    "Organizational Development",
    "Talent Management",
    "Compensation & Benefits",
    "Not sure yet - need guidance"
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid-Level (3-7 years)", 
    "Senior Level (8-15 years)",
    "Executive Level (15+ years)"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const timeZones = [
    "EST (Eastern Time)",
    "CST (Central Time)", 
    "MST (Mountain Time)",
    "PST (Pacific Time)",
    "GMT (Greenwich Mean Time)",
    "CET (Central European Time)"
  ];

  useEffect(() => {
    // Set default timezone based on user's location
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setFormData(prev => ({
      ...prev,
      timeZone: userTimeZone.includes('New_York') ? 'EST (Eastern Time)' :
                userTimeZone.includes('Chicago') ? 'CST (Central Time)' :
                userTimeZone.includes('Denver') ? 'MST (Mountain Time)' :
                userTimeZone.includes('Los_Angeles') ? 'PST (Pacific Time)' : 'EST (Eastern Time)'
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime) {
      alert('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const consultationRequest = {
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };

      console.log("Consultation scheduled:", consultationRequest);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error scheduling consultation:", error);
      alert("There was an error scheduling your consultation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary/10 to-blue-50 p-12 shadow-2xl">
              <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h1 className="mb-6 text-3xl font-bold text-black">
                Consultation Scheduled Successfully!
              </h1>
              
              <p className="mb-8 text-lg text-titlebgdark">
                Thank you {formData.name}! Your consultation has been scheduled for{" "}
                <strong>{formData.preferredDate}</strong> at{" "}
                <strong>{formData.preferredTime}</strong> ({formData.timeZone}).
              </p>
              
              <div className="mb-8 rounded-2xl bg-white/80 p-6 text-left">
                <h3 className="mb-4 font-semibold text-black">What happens next?</h3>
                <ul className="space-y-3 text-titlebgdark">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    You'll receive a confirmation email with meeting details within 10 minutes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    Our education advisor will prepare a personalized discussion based on your goals
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    You'll receive a calendar invite with Zoom meeting link 24 hours before
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    After the call, you'll get a customized learning plan and next steps
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/programs"
                  className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primaryho transition-colors duration-300"
                >
                  Explore Programs
                </a>
                <a
                  href="/enrollment"
                  className="rounded-full border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Start Enrollment
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
              Schedule Your Free Consultation
            </h1>
            <p className="text-lg text-titlebgdark dark:text-waterloo">
              Get personalized guidance from our education advisors. Discuss your career goals, 
              explore program options, and create a customized learning plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-blue-50 p-8 dark:from-primary/10 dark:to-blacksection">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                  What You'll Get
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Personalized Guidance", 
                      description: "Career assessment and program recommendations tailored to your goals"
                    },
                    {
                      icon: "📚",
                      title: "Program Deep Dive",
                      description: "Detailed overview of curriculum, schedule, and learning outcomes"
                    },
                    {
                      icon: "💰", 
                      title: "Financial Planning",
                      description: "Discussion of tuition, payment options, and scholarship opportunities"
                    },
                    {
                      icon: "🚀",
                      title: "Career Roadmap",
                      description: "Clear next steps and timeline for achieving your professional goals"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-titlebgdark dark:text-waterloo">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-white/80 p-6 dark:bg-blacksection/80">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    100% Free Consultation
                  </h4>
                  <p className="text-sm text-titlebgdark dark:text-waterloo">
                    No cost, no obligation. Just expert guidance to help you make the best decision for your career.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-blacksection">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
                  Book Your Session
                </h3>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                      Current Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                    >
                      <option value="">Select your experience level</option>
                      {experienceLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                        Time Zone
                      </label>
                      <select
                        name="timeZone"
                        value={formData.timeZone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                      >
                        {timeZones.map((zone, index) => (
                          <option key={index} value={zone}>{zone}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black dark:text-white mb-2">
                      Career Goals & Questions
                    </label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-blacksection dark:text-white"
                      placeholder="Tell us about your career goals, any specific questions you have, or what you'd like to discuss during the consultation..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Scheduling..." : "Schedule My Free Consultation"}
                  </button>

                  <p className="text-center text-xs text-titlebgdark dark:text-waterloo">
                    By scheduling a consultation, you agree to receive communications from GIHCR. 
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleConsultation;