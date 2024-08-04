'use client'
import { inquirySteps } from '@/public/data/form-data';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { useInquiry } from '@/context/Inquiry-context';

const InquiryForm = () => {
  const {
    currentStep,
    setCurrentStep,
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
    isSubmitted,
    setIsSubmitted
  } = useInquiry();
  const [errors, setErrors] = useState({});



  const validateStep = () => {
    let valid = true;
    let newErrors = {};

    if (inquirySteps[currentStep].inputType) {
      const value = formData[inquirySteps[currentStep].inputName];
      if (!value) {
        newErrors[inquirySteps[currentStep].inputName] = "This field is required.";
        valid = false;
      }
    } else if (inquirySteps[currentStep].inputs) {
      inquirySteps[currentStep].inputs.forEach(input => {
        const value = formData[input.inputName];
        if (!value) {
          newErrors[input.inputName] = "This field is required.";
          valid = false;
        }
      });
    }
    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleOptionSelect = (option) => {
    setFormData({
      ...formData,
      [inquirySteps[currentStep].title]: option,
    });
    setErrors({});
    setTimeout(() => {
      handleNext();
    }, 1000);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result.message);
        setCurrentStep(0);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);

    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({});
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
  };

  console.log(formData);

  return (
    <> {
      <div className='bg-[#444] py-10 md:py-14 xl:py-20'>
        <div className='layout'>
          {isSubmitted ?
            <div>
              <h2 className='font-heading font-bold text-offWhite text-center text-5xl capitalize'>{formData?.fullName ? `${formData.fullName},` : ''} your request has been <span className='text-primary'>Approved</span>🎉</h2>
            </div> :
            <>
              <h2 className='font-heading font-bold text-primary text-center text-5xl'>Let us know your need</h2>
              <div className='max-w-screen-md mx-auto bg-gray-50 rounded-xl shadow-md px-5 py-5 md:px-8 md:py-7 xl:px-16 xl:py-10 mt-10'>
                <div className='h-2 w-1/2 mx-auto bg-gray-300 rounded-full'>
                  <div className={`h-full bg-primary rounded-full`}
                    style={{ width: `${(currentStep + 1) * (100 / inquirySteps.length)}%` }}
                  >
                  </div>
                </div>
                <p className='text-center mt-1 font-bold text-sm md:text-base xl:text-lg'> {currentStep + 1} / {inquirySteps.length} </p>

                <form onSubmit={handleSubmit}>
                  <h2 className='text-center font-heading text-3xl font-semibold my-10'>{inquirySteps[currentStep].title}</h2>
                  <div className='flex justify-center flex-wrap gap-2 md:gap-3'>
                    {inquirySteps[currentStep].options && inquirySteps[currentStep].options.map((option, index) => (
                      <button
                        type="button"
                        key={index}
                        className={`relative text-xl font-semibold font-heading text-black-2 px-5 md:px-7 xl:px-16 py-3 md:py-4 border-4 bg-white shadow rounded-xl hover:border-primary hover:bg-primary/20 transition duration-300 ${formData[inquirySteps[currentStep].title] === option ? 'border-primary !bg-primary/20' : 'border-gray-300'}`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                        {formData[inquirySteps[currentStep].title] === option &&
                          <div className='absolute top-1 right-1 text-primary'>
                            <FaCheckCircle className="text" />
                          </div>
                        }
                      </button>
                    ))}

                    <div>
                      {inquirySteps[currentStep].inputType && (
                        <div>
                          <p className='text-base font-semibold mb-1'>{inquirySteps[currentStep].label}</p>
                          <div className='relative w-full max-w-xs mx-auto'>
                            <input
                              type={inquirySteps[currentStep].inputType}
                              name={inquirySteps[currentStep].inputName}
                              value={formData[inquirySteps[currentStep].inputName] || ''}
                              onChange={handleInputChange}
                              placeholder='Enter your ZIP Code'
                              // required/
                              className='w-full pl-10 border-2 border-gray-300 rounded-md px-3 py-2 bg-white shadow focus:outline-none  focus:border-primary transition duration-300'
                            />
                            <FaMapMarkerAlt className='absolute top-0 bottom-0 left-3 text-primary h-full' />
                          </div>
                        </div>
                      )}
                      {errors[inquirySteps[currentStep].inputName] && (
                        <p className='text-red-500 text-sm mt-2'>{errors[inquirySteps[currentStep].inputName]}</p>
                      )}
                    </div>

                    <div className='flex flex-col gap-4'>
                      {inquirySteps[currentStep].inputs && inquirySteps[currentStep].inputs.map((input, index) => (
                        <div>
                          <p className='text-base font-semibold mb-1'>{input.label}</p>
                          <div key={index} className='relative w-full sm:w-[350px] mx-auto'>
                            <input
                              type={input.inputType}
                              name={input.inputName}
                              placeholder={input.placeholder}
                              value={formData[input.inputName] || ''}
                              onChange={handleInputChange}
                              // required
                              className='text-base w-full pl-10 border-2 border-gray-300 rounded-md px-3 py-2 bg-white shadow focus:outline-none  focus:border-primary transition duration-300'
                            />
                            {index == 0 && <IoPerson className='absolute top-0 bottom-0 left-3 text-primary text-xl h-full' />}
                            {index == 1 && <IoIosMail className='absolute top-0 bottom-0 left-3 text-primary text-xl h-full' />}
                            {index == 2 && <FaPhoneAlt className='absolute top-0 left-3 text-primary text-xl h-full' />}
                          </div>
                          {errors[input.inputName] && (
                            <p className='text-red-500 text-sm mt-0'>{errors[input.inputName]}</p>
                          )}
                        </div>
                      ))}
                    </div>


                  </div>
                  <div className='w-full flex justify-center gap-4 md:gap-5 xl:gap-6 items-center mt-8 md:mt-12 xl:mt-16'>
                    {currentStep > 0 && <button type="button" onClick={handlePrevious} className='btn'>
                      <FaArrowLeft className='inline-block mr-2' />
                      Previous
                    </button>}
                    {currentStep < inquirySteps.length - 1 && <button type="button" onClick={handleNext} className='btn'>
                      Next <FaArrowRight className='inline-block ml-2' />
                    </button>}
                    {currentStep === inquirySteps.length - 1 && <button type="submit" className='btn disabled:opacity-50'
                      disabled={isSubmitting}
                    >
                      Submit <LuSend className='inline-block ml-1 text-xl' />
                    </button>}
                  </div>
                </form>
              </div>
            </>}
        </div>
      </div>
    }
    </>
  )
}

export { InquiryForm };
