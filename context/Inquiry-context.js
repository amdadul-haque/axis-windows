'use client'
import React, { createContext, useState, useContext } from 'react';

const InquiryContext = createContext();

export const InquiryProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');

  return (
    <InquiryContext.Provider value={{
      currentStep,
      setCurrentStep,
      formData,
      setFormData,
      isSubmitting,
      setIsSubmitting,
      isSubmitted,
      setIsSubmitted,
      fullName,
      setFullName
    }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  return useContext(InquiryContext);
};
