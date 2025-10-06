"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import EnrollmentStep1 from "./EnrollmentStep1";
import EnrollmentStep2 from "./EnrollmentStep2";
import EnrollmentStep3 from "./EnrollmentStep3";
import EnrollmentSuccess from "./EnrollmentSuccess";

interface EnrollmentData {
  // Step 1: Program & Personal Info
  selectedProgram: string;
  programPrice: number;
  startDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 2: Background Info
  experience: string;
  goals: string;
  hearAboutUs: string;
  
  // Step 3: Payment
  payment: {
    method: string;
    installments: boolean;
  };
}

const EnrollmentFlow = () => {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData>({
    selectedProgram: searchParams?.get('program') || '',
    programPrice: 0,
    startDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    hearAboutUs: '',
    payment: {
      method: '',
      installments: false
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

    const steps = [
    { id: 1, title: "Program & Personal", description: "Select program and enter your details" },
    { id: 2, title: "Background", description: "Experience and goals information" },
    { id: 3, title: "Payment", description: "Payment method and confirmation" }
  ];

  const updateEnrollmentData = (stepData: any) => {
    setEnrollmentData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === 3) {
      submitEnrollment();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(enrollmentData.selectedProgram && 
                 enrollmentData.startDate && 
                 enrollmentData.firstName && 
                 enrollmentData.lastName && 
                 enrollmentData.email);
      case 2:
        return !!(enrollmentData.experience && enrollmentData.goals);
      case 3:
        return !!(enrollmentData.payment.method);
      default:
        return true;
    }
  };

  const submitEnrollment = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(4); // Success page
      console.log('Enrollment submitted:', enrollmentData);
    } catch (error) {
      console.error('Enrollment submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EnrollmentStep1
            data={enrollmentData}
            updateData={updateEnrollmentData}
            onNext={nextStep}
            isValid={validateStep(1)}
          />
        );
      case 2:
        return (
          <EnrollmentStep2
            data={enrollmentData}
            updateData={updateEnrollmentData}
            onNext={nextStep}
            onPrev={prevStep}
            isValid={validateStep(2)}
          />
        );
      case 3:
        return (
          <EnrollmentStep3
            data={enrollmentData}
            updateData={updateEnrollmentData}
            onSubmit={nextStep}
            onPrev={prevStep}
            isValid={validateStep(3)}
            isLoading={isLoading}
          />
        );
      case 4:
        return <EnrollmentSuccess data={enrollmentData} />;
      default:
        return null;
    }
  };

  return (
    <section className="overflow-hidden py-20 md:py-25 lg:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-medium uppercase text-primary dark:text-primary">
              SECURE ENROLLMENT
            </span>
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-4xl">
              Complete Your
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
                Application
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-titlebgdark dark:text-waterloo">
              Follow our simple enrollment process to secure your spot in your chosen program.
            </p>
          </motion.div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1 max-w-xs' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 ${
                      currentStep >= step.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-stroke bg-white text-titlebgdark dark:border-strokedark dark:bg-blacksection dark:text-waterloo'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-primary' : 'text-titlebgdark dark:text-waterloo'}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-titlebgdark dark:text-waterloo">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block flex-1 h-0.5 mx-4 ${currentStep > step.id ? 'bg-primary' : 'bg-stroke dark:bg-strokedark'}`} />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnrollmentFlow;