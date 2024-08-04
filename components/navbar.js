import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full pt-5'>
      <div className='w-full mx-auto flex justify-center'>
        <Image src='/images/logo.png' alt='logo' width={300} height={96} className='h-16 md:h-20 xl:h-24 w-auto' />
      </div>
    </div>
  )
}

export { Navbar }