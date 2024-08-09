'use client'
import React from 'react'

import { motion } from 'framer-motion'

const SectionHeading = ({ heading, className }) => {
  return (
    <motion.div
      initial={{ y: 76, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='mb-12 md:mb-16 xl:mb-24'
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 text-center font-heading ${className}`}>{heading}</h2>
    </motion.div >
  )
}

export default SectionHeading