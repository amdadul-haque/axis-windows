'use client'
import React from 'react';
import { FaDollarSign, FaHome, FaEye, FaPaintBrush, FaShapes } from 'react-icons/fa';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './utils/section-heading';

const benefits = [
  {
    icon: FaDollarSign,
    title: "Lower Utility Bills",
    description: "Replacing inefficient windows can save you a lot of money! Some projects pay for themselves extremely fast!",
  },
  {
    icon: FaHome,
    title: "Add Property Value",
    description: "Replacement windows will increase the value of any home.",
  },
  {
    icon: FaEye,
    title: "Aesthetics",
    description: "Become the envy of your neighbors with beautiful new windows.",
  },
  {
    icon: FaPaintBrush,
    title: "Design",
    description: "Double or triple pane, vinyl or wood, custom interior and exterior colors.",
  },
  {
    icon: FaShapes,
    title: "Styles",
    description: "Double Hung, Sliding, Casement, Picture, Awning, Garden, Bay, and Bow.",
  }
];

const WhyReplacement = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-14 xl:py-20">
      <div className="layout transition">
        <SectionHeading heading="Why Replace Windows?" />
        <div className=" mx-auto h-full flex md:flex-row items-start justify-between gap-10 xl:gap-16">
          <div className='w-full'>
            <motion.p className="text-lg mb-6 text-black-3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              A replacement window project has many benefits; adding value, improving comfort, lowering utility bills, etc. Replacing windows can also improve in-home health. Moldy and leaky windows can cause expensive repairs and hurt the respiratory system of everyone, especially children. Key benefits include:
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              delay={0.2}
              className="rounded-xl shadow-md aspect-[1024/681]"
            >
              <Image
                src="/images/windows/7.webp"
                alt="Replacement Windows"
                className="rounded-xl shadow-md aspect-[1024/681]"
                width={1024}
                height={681}
              />
            </motion.div>
          </div>
          <div className='w-full h-full flex flex-col gap-5'>
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="flex gap-4 items-center shadow-xl rounded-lg p-3 h-full"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 + index * 0.15 }}
                delay={0.0 + index * 0.15}
              >
                <div className='min-w-12 md:min-w-16 xl:min-w-20 h-full flex items-center justify-center px-3 py-3 rounded-lg bg-primary/20'>
                  <benefit.icon className="text-primary text-2xl md:text-3xl xl:text-5xl mt-2" />
                </div>
                <div className='h-full'>
                  <h3 className="text-base md:text-xl font-semibold font-heading">{benefit.title}</h3>
                  <p className='font-paragraph text-black-3'>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export { WhyReplacement };
