"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProgramDetailCTAProps {
  program: any;
}

const ProgramDetailCTA = ({ program }: ProgramDetailCTAProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    timeline: "",
    questions: ""
  });

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid-Level (3-7 years)",
    "Senior Level (8-15 years)",
    "Executive Level (15+ years)"
  ];

  const timelines = [
    "I want to start immediately",
    "Within the next month",
    "Within the next 3 months",
    "I'm just exploring options"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.experience || !formData.timeline) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate API call to submit consultation request
    const consultationData = {
      ...formData,
      program: program.title,
      programId: program.id,
      submittedAt: new Date().toISOString(),
      type: 'consultation_request'
    };
    
    console.log("Consultation request submitted:", consultationData);
    
    // Show success message
    alert(`Thank you ${formData.name}! Your consultation request has been submitted. Our team will contact you within 24 hours.`);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      timeline: "",
      questions: ""
    });
    
    // Optionally redirect to a thank you page
    // window.location.href = `/support/consultation-submitted?program=${program.slug}`;
  };

  const handleEnrollNow = () => {
    window.location.href = `/enrollment?program=${program.id}`;
  };

  const handleDownloadSyllabus = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = `/api/download/syllabus/${program.slug}`;
    link.download = `${program.title}-Syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download event
    console.log(`Downloaded syllabus for ${program.title}`);
  };

  const handleScheduleCall = () => {
    // Redirect to scheduling page with program context
    window.location.href = `/support/schedule-consultation?program=${program.slug}&type=call`;
  };

  const handleDownloadBrochure = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = `/api/download/brochure/${program.slug}`;
    link.download = `${program.title}-Program-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download event
    console.log(`Downloaded brochure for ${program.title}`);
  };

  return (
    <section className="relative py-20 lg:py-25 xl:py-30 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${program.color}`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/images/shape/shape-dotted-light.svg')] opacity-20" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-16 h-32 w-32 rounded-full bg-white/5 backdrop-blur-sm"
        />
      </div>

      <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            className="text-white"
          >
            <span className="font-medium uppercase text-white/80 mb-4 block">
              READY TO START YOUR JOURNEY?
            </span>
            <h2 className="text-4xl font-bold mb-6 lg:text-5xl">
              Transform Your
              <span className="relative inline-block ml-3">
                Career Today
                <span className="absolute bottom-2.5 left-0 -z-1 h-3 w-full bg-white/20 rounded" />
              </span>
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Join {program.students.toLocaleString()}+ professionals who have advanced their careers with {program.title}. 
              The next cohort starts {program.nextStart}.
            </p>

            {/* Program Benefits Recap */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Why Choose This Program?
              </h3>
              {[
                `Complete in just ${program.duration} with flexible scheduling`,
                "Learn from industry-leading experts and practitioners",
                "Gain practical, job-ready skills through hands-on projects",
                "Join an exclusive network of HR professionals worldwide",
                "Receive ongoing career support and mentorship"
              ].map((benefit, index) => (
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
                  className="flex items-center gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Urgency & Social Proof */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse" />
                <span className="font-semibold text-white">Limited Spots Available</span>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Only 25 spots remaining for the {program.nextStart} cohort. Classes fill up quickly due to our low student-to-instructor ratio.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25</div>
                  <div className="text-white/80 text-xs">Spots Left</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{program.rating}</div>
                  <div className="text-white/80 text-xs">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">94%</div>
                  <div className="text-white/80 text-xs">Career Growth</div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleEnrollNow}
                className="w-full rounded-full bg-white px-8 py-4 font-bold text-primary transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
              >
                Enroll Now - ${program.price.toLocaleString()} 
                <span className="text-sm font-normal ml-2">(Save ${(program.originalPrice - program.price).toLocaleString()})</span>
              </button>
              <div className="flex gap-4">
                <button 
                  onClick={handleDownloadSyllabus}
                  className="flex-1 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20"
                >
                  Download Syllabus
                </button>
                <button 
                  onClick={handleScheduleCall}
                  className="flex-1 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
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
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Get Your Free Program Consultation
                </h3>
                <p className="text-titlebgdark">
                  Speak with an education advisor and get a personalized learning plan for your career goals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Current Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                    required
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level, index) => (
                      <option key={index} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    When would you like to start? *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                    required
                  >
                    <option value="">Select your timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Questions or Specific Goals
                  </label>
                  <textarea
                    name="questions"
                    value={formData.questions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-black focus:border-primary focus:outline-none"
                    placeholder="Tell us about your career goals or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start Application Process
                </button>

                {/* Additional Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleEnrollNow}
                    className="rounded-lg bg-primary/10 border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Skip to Enrollment
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    className="rounded-lg border border-stroke px-6 py-3 font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    Download Brochure
                  </button>
                </div>

                {/* Privacy & Guarantee */}
                <div className="space-y-3 text-center">
                  <p className="text-xs text-titlebgdark">
                    By submitting this form, you agree to receive communications from GIHCR. 
                    Your information is secure and will never be shared.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-green-600">
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      30-Day Guarantee
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Data Protected
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailCTA;