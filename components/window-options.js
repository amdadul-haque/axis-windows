'use client'
import { windowOptions } from '@/public/data/data';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Button from './utils/button';
import SectionHeading from './utils/section-heading';


const WindowOptions = () => {
  const [showMore, setShowMore] = useState(false);

  const buttonRef = useRef(null);
  const handleToggle = () => {
    setShowMore(!showMore);
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 300);
  };




  const itemsToShow = showMore ? windowOptions.length : 4;

  return (
    <div className='py-16 md:py-20'>
      <div className='layout'>
        {/* <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 text-center font-heading'>Popular Window Options</h2> */}
        <SectionHeading heading='Choose from a variety of window options'  />
        <div className='flex flex-col gap-5'>
          {windowOptions && windowOptions.slice(0, itemsToShow).map((item, index) => (
            <motion.div key={index} className='p-3 rounded-lg shadow-xl'
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={300}
                  className='w-full md:w-1/2 rounded-lg'
                />
                <div className='w-full md:w-1/2 py-5 md:p-10 lg:p-16 xl:p-20'>
                  <h3 className='text-xl md:text-2xl lg:text-3xl font-bold mb-2 flex items-center font-heading'>
                    <div className='p-3 flex items-center justify-center bg-primary/20 mr-3 rounded-lg md:rounded-xl'>
                      <item.icon className='text-primary' /> {/* Icon added here */}
                    </div>
                    {item.title}
                  </h3>
                  <p className='text-sm md:text-base xl:text-lg font-paragraph text-black-3'>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-center mx-auto md:pt-12 py-8'
          ref={buttonRef}
        >
          <button
            onClick={handleToggle}
            className='btn'
          >
            {showMore ? 'See Less' : 'See More'}
            {showMore ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
          </button>
        </div>
      </div>
    </div>
  )
}

export { WindowOptions }





{/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {windowOptions && windowOptions.map((item, index) => (
            <div key={index} className='shadow-lg rounded-xl p-6 hover:shadow-2xl transition'>
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={300}
                className='w-full aspect-[4/3] object-cover rounded-xl mb-4' />
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm md:text-base xl:text-lg'>{item.description}</p>
            </div>
          ))
          }
        </div> */}