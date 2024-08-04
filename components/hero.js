import { windowsFeatures } from '@/public/data/hero'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full pb-20'>
      <div className='layout'>
        
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 text-center'> <span className='text-primary'>High-Quality Window</span> Replacement Services</h1>

        <div className='shadow w-full rounded-xl md:rounded-2xl xl:rounded-3xl'>
          {/* <iframe
            // width="1058"
            // height="595"
            src="https://www.youtube.com/embed/YY86bzH6QII?rel=0&autoplay=1&mute=1&loop=1&showinfo=0&modestbranding=1"
            title="I Resurfaced My Old Wood Deck With Tanzite STONEDECKS. It Looks AMAZING!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className='w-full aspect-video rounded-t-xl md:rounded-t-2xl xl:rounded-t-3xl'
          >
          </iframe> */}
          <video className='w-full aspect-video rounded-t-xl md:rounded-t-2xl xl:rounded-t-3xl' autoPlay loop muted controls>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 rounded-b-xl md:rounded-b-2xl xl:rounded-b-3xl'>
            {windowsFeatures && windowsFeatures.map((item, index) => (
              <div key={index} className='flex items-center gap-3 md:gap-4 xl:gap-6 p-4 md:p-6 xl:p-8 border-b border-gray-200'>
                <div className='w-14 md:w-16 xl:w-20 h-14 md:h-16 xl:h-20'>
                  <Image src={item.icon} alt={item.title} width={50} height={50} className='svg h-10 w-10 xl:h-14 xl:w-14' />
                </div>
                <div>
                  <h3 className='text-lg md:text-xl xl:text-2xl font-semibold '>{item.title}</h3>
                  <p className='text-sm md:text-base xl:text-lg'>{item.description}</p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export { Hero }