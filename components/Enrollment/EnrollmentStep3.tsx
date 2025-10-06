"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onSubmit: () => void;
  onPrev: () => void;
  isValid: boolean;
  isLoading: boolean;
}

const EnrollmentStep3 = ({ data, updateData, onSubmit, onPrev, isValid, isLoading }: Props) => {
  const [paymentData, setPaymentData] = useState({
    method: data.payment?.method || "",
    installments: data.payment?.installments || false
  });

  const paymentMethods = [
    {
      id: "credit_card",
      title: "Credit Card",
      description: "Pay with Visa, MasterCard, or American Express",
      icon: "💳",
      available: true
    },
    {
      id: "bank_transfer",
      title: "Bank Transfer",
      description: "Direct bank transfer (ACH)",
      icon: "🏦",
      available: true
    },
    {
      id: "paypal",
      title: "PayPal",
      description: "Pay securely with your PayPal account",
      icon: "💰",
      available: true
    },
    {
      id: "employer_sponsored",
      title: "Employer Sponsored",
      description: "Your employer will be billed directly",
      icon: "🏢",
      available: true
    }
  ];

  const programs = [
    {
      id: "hr-analytics-certificate",
      title: "HR Analytics & People Data Certificate",
      price: 2499,
      originalPrice: 3499
    },
    {
      id: "strategic-hr-diploma", 
      title: "Strategic HR Management Diploma",
      price: 4999,
      originalPrice: 6999
    },
    {
      id: "diversity-inclusion-certificate",
      title: "Diversity, Equity & Inclusion Certificate",
      price: 2299,
      originalPrice: 2999
    }
  ];

  const selectedProgram = programs.find(p => p.id === data.selectedProgram);

  useEffect(() => {
    updateData({ payment: paymentData });
  }, [paymentData]);

  const handlePaymentMethodChange = (method: string) => {
    setPaymentData(prev => ({ ...prev, method }));
  };

  const handleInstallmentChange = (installments: boolean) => {
    setPaymentData(prev => ({ ...prev, installments }));
  };

  const calculateInstallmentAmount = () => {
    if (!selectedProgram) return 0;
    return paymentData.installments ? Math.ceil(selectedProgram.price / 12) : selectedProgram.price;
  };

  const handleSubmit = () => {
    if (isValid && selectedProgram) {
      onSubmit();
    }
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
            Payment & Final Review
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Choose your payment method and review your enrollment details
          </p>
        </div>

        {/* Enrollment Summary */}
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 rounded-lg bg-gradient-to-r from-primary/10 to-blue-50 p-6 dark:from-primary/20 dark:to-blacksection"
          >
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Enrollment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-black dark:text-white">Program:</span>
                <span className="font-medium text-black dark:text-white">{selectedProgram.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black dark:text-white">Student:</span>
                <span className="font-medium text-black dark:text-white">
                  {data.firstName} {data.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black dark:text-white">Email:</span>
                <span className="font-medium text-black dark:text-white">{data.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black dark:text-white">Start Date:</span>
                <span className="font-medium text-black dark:text-white">
                  {new Date(data.startDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black dark:text-white">Experience Level:</span>
                <span className="font-medium text-black dark:text-white">{data.experience}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Payment Method Selection */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Payment Method *
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                  paymentData.method === method.id
                    ? 'border-primary bg-primary/5'
                    : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                } ${!method.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => method.available && handlePaymentMethodChange(method.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{method.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className={`h-4 w-4 rounded-full border-2 ${
                        paymentData.method === method.id
                          ? 'border-primary bg-primary'
                          : 'border-stroke dark:border-strokedark'
                      }`}>
                        {paymentData.method === method.id && (
                          <div className="h-full w-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <h4 className="font-semibold text-black dark:text-white">
                        {method.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm text-titlebgdark dark:text-waterloo">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        {selectedProgram && paymentData.method && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8"
          >
            <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Payment Options
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                  !paymentData.installments
                    ? 'border-primary bg-primary/5'
                    : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                }`}
                onClick={() => handleInstallmentChange(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full border-2 ${
                      !paymentData.installments
                        ? 'border-primary bg-primary'
                        : 'border-stroke dark:border-strokedark'
                    }`}>
                      {!paymentData.installments && (
                        <div className="h-full w-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Pay in Full
                      </h4>
                      <p className="text-sm text-titlebgdark dark:text-waterloo">
                        One-time payment with maximum savings
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      ${selectedProgram.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-600">
                      Save ${(selectedProgram.originalPrice - selectedProgram.price).toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                  paymentData.installments
                    ? 'border-primary bg-primary/5'
                    : 'border-stroke hover:border-primary/50 dark:border-strokedark'
                }`}
                onClick={() => handleInstallmentChange(true)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full border-2 ${
                      paymentData.installments
                        ? 'border-primary bg-primary'
                        : 'border-stroke dark:border-strokedark'
                    }`}>
                      {paymentData.installments && (
                        <div className="h-full w-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Monthly Installments
                      </h4>
                      <p className="text-sm text-titlebgdark dark:text-waterloo">
                        12 monthly payments, 0% interest
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      ${calculateInstallmentAmount().toLocaleString()}/month
                    </div>
                    <div className="text-sm text-titlebgdark dark:text-waterloo">
                      Total: ${selectedProgram.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Security & Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 rounded-lg border border-stroke p-6 dark:border-strokedark"
        >
          <h4 className="mb-4 font-semibold text-black dark:text-white">
            Your Investment is Protected
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="text-green-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-black dark:text-white">Secure Payment</div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">256-bit SSL encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-green-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-black dark:text-white">30-Day Guarantee</div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">Full refund if not satisfied</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-green-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-black dark:text-white">Lifetime Access</div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">Materials & alumni network</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            disabled={isLoading}
            className="rounded-full border border-stroke px-8 py-3 font-semibold text-black hover:border-primary hover:text-primary transition-colors duration-300 disabled:opacity-50 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            ← Previous Step
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid || isLoading}
            className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              `Complete Enrollment - ${selectedProgram ? `$${paymentData.installments ? calculateInstallmentAmount().toLocaleString() : selectedProgram.price.toLocaleString()}` : ''}`
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep3;