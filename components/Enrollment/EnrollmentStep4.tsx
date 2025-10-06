"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onSubmit: () => void;
  onPrev: () => void;
  isValid: boolean;
  isLoading: boolean;
}

const EnrollmentStep4 = ({ data, updateData, onSubmit, onPrev, isValid, isLoading }: Props) => {
  const [payment, setPayment] = useState(data.payment);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const paymentMethods = [
    {
      id: "credit-card",
      title: "Credit/Debit Card",
      description: "Pay securely with Visa, MasterCard, or American Express",
      icon: "💳",
      popular: true
    },
    {
      id: "bank-transfer",
      title: "Bank Transfer",
      description: "Direct bank transfer with 2% discount",
      icon: "🏦",
      discount: true
    },
    {
      id: "paypal",
      title: "PayPal",
      description: "Pay with your PayPal account",
      icon: "💰"
    }
  ];

  const installmentOptions = [
    {
      id: "full",
      title: "Full Payment",
      description: "Pay the full amount upfront",
      discount: "5% discount",
      amount: Math.round(data.programPrice * 0.95)
    },
    {
      id: "3-months",
      title: "3 Monthly Installments",
      description: "Split into 3 equal payments",
      amount: Math.round(data.programPrice / 3),
      monthly: true
    },
    {
      id: "6-months",
      title: "6 Monthly Installments",
      description: "Split into 6 equal payments",
      amount: Math.round(data.programPrice / 6),
      monthly: true
    }
  ];

  const handlePaymentMethodChange = (method: string) => {
    const newPayment = { ...payment, method };
    setPayment(newPayment);
    updateData({ payment: newPayment });
  };

  const handleInstallmentChange = (installmentType: string) => {
    const newPayment = { ...payment, installments: installmentType !== 'full' };
    setPayment(newPayment);
    updateData({ payment: newPayment });
  };

  const handleSubmit = () => {
    if (isValid && acceptTerms) {
      onSubmit();
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
            Payment Information
          </h2>
          <p className="text-titlebgdark dark:text-waterloo">
            Complete your enrollment by selecting your payment method and reviewing your order.
          </p>
        </div>

        {/* Order Summary */}
        <div className="mb-8 rounded-lg bg-primary/5 p-6 border border-primary/20">
          <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Order Summary
          </h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold text-black dark:text-white">
                {data.programTitle}
              </div>
              <div className="text-sm text-titlebgdark dark:text-waterloo">
                Duration: {data.programDuration} | Format: {data.programFormat}
              </div>
              <div className="text-sm text-titlebgdark dark:text-waterloo">
                Start Date: {new Date(data.startDate).toLocaleDateString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                ${data.programPrice?.toLocaleString()}
              </div>
              <div className="text-sm text-green-600">
                💰 Best Value Program
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Payment Method
          </h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                  payment.method === method.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-stroke hover:border-primary/50 dark:border-strokedark dark:hover:border-primary/50"
                }`}
                onClick={() => handlePaymentMethodChange(method.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      payment.method === method.id
                        ? "border-primary bg-primary"
                        : "border-stroke dark:border-strokedark"
                    }`}>
                      {payment.method === method.id && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-black dark:text-white">
                          {method.title}
                        </span>
                        {method.popular && (
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            Popular
                          </span>
                        )}
                        {method.discount && (
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                            2% Discount
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-titlebgdark dark:text-waterloo">
                        {method.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installment Options */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Payment Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {installmentOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all duration-300 ${
                  (!payment.installments && option.id === 'full') || 
                  (payment.installments && option.id !== 'full')
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-stroke hover:border-primary/50 dark:border-strokedark dark:hover:border-primary/50"
                }`}
                onClick={() => handleInstallmentChange(option.id)}
              >
                <div className="mb-2">
                  <div className="font-semibold text-black dark:text-white">
                    {option.title}
                  </div>
                  {option.discount && (
                    <div className="text-sm font-medium text-green-600">
                      {option.discount}
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  ${option.amount.toLocaleString()}
                  {option.monthly && <span className="text-sm">/month</span>}
                </div>
                <div className="text-sm text-titlebgdark dark:text-waterloo">
                  {option.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-blacksection">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-stroke text-primary focus:ring-primary dark:border-strokedark"
            />
            <label htmlFor="terms" className="text-sm text-black dark:text-white">
              I accept the{" "}
              <a href="/terms" className="text-primary hover:underline" target="_blank">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline" target="_blank">
                Privacy Policy
              </a>
              . I understand the enrollment terms, refund policy, and program requirements.
            </label>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mb-8 flex items-center gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-900/10">
          <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-green-800 dark:text-green-200">
            <strong>🔒 Secure Payment:</strong> Your payment information is encrypted and secure. We never store your payment details.
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={onPrev}
            className="inline-flex items-center rounded-lg border-2 border-stroke px-6 py-3 font-semibold text-black hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Background
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid || !acceptTerms || isLoading}
            className={`rounded-lg px-8 py-3 font-semibold text-white transition-all duration-300 ${
              isValid && acceptTerms && !isLoading
                ? "bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/25"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <>
                <svg className="mr-2 inline h-4 w-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Complete Enrollment
                <svg className="ml-2 inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnrollmentStep4;