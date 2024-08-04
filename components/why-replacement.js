import React from 'react';
import { FaDollarSign, FaHome, FaEye, FaPaintBrush, FaShapes } from 'react-icons/fa';

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
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 text-center font-heading'>Why Replace Windows?</h2>
        <div className="mx-auto bg-white rounded-xl shadow-md px-5 py-5 md:px-8 md:py-7 xl:px-12 xl:py-10 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
          <div>
            <p className="text-lg mb-6">
              A replacement window project has many benefits; adding value, improving comfort, lowering utility bills, etc. Replacing windows can also improve in-home health. Moldy and leaky windows can cause expensive repairs and hurt the respiratory system of everyone, especially children. Key benefits include:
            </p>
            <img src="/images/windows/7.webp" alt="Replacement Windows" className="rounded-xl shadow-md aspect-[1024/681]" />
          </div>
          <div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start mb-5">
                <div className='min-w-12 md:min-w-14 xl:min-w-16'>
                  <benefit.icon className="text-primary text-2xl md:text-3xl xl:text-4xl mr-3 mt-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export { WhyReplacement };
