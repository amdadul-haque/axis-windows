import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full pt-5'>
      <Link href={'/'} className='w-full mx-auto flex justify-center'>
        <Image src='/images/logo.png' alt='logo' width={300} height={96} className='h-16 md:h-20 xl:h-24 w-auto' />
      </Link>
    </div>
  )
}

export { Navbar }