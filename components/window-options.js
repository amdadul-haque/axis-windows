import Image from 'next/image'
import React from 'react'

const WindowOptions = () => {
  const windowOptions = [
    {
      title: "Double-Hung",
      description: "Double-hung windows feature two operable sashes that move up and down independently, allowing for versatile ventilation options. Their classic design complements various home styles, and the vertical sliding mechanism saves space.",
      image: "/images/windows/1.webp",
    },

    {
      title: "Sliding",
      description: "Sliding windows have one or more sashes that slide horizontally within the frame. They are easy to operate, provide ample ventilation, and are ideal for spaces with horizontal openings.",
      image: "/images/windows/2.webp",
    },
    {
      title: "Casement ",
      description: "Casement windows are hinged at the side and open outward like a door, usually operated by a crank. They offer excellent ventilation and unobstructed views, making them a great choice for hard-to-reach areas.",
      image: "/images/windows/3.webp",
    },
    {
      title: "Picture",
      description: "Picture windows are large, fixed-pane windows that provide expansive views and allow maximum natural light. They do not open, offering excellent insulation and energy efficiency, ideal for framing outdoor scenes in living areas.",
      image: "/images/windows/4.webp",
    },
    {
      title: "Awning ",
      description: "Awning windows are hinged at the top and open outward from the bottom, creating an awning-like effect. They provide good ventilation and protection from the rain, making them ideal for bathrooms and kitchens.",
      image: "/images/windows/5.jpg",
    },
    {
      title: "Garden ",
      description: "Garden windows extend outward from the home, creating a small, greenhouse-like space. They are perfect for growing plants and herbs indoors, adding light and a touch of nature to kitchens and dining areas.",
      image: "/images/windows/6.webp",
    },
    {
      title: "Bay ",
      description: "Bay windows project outward from the home's exterior wall, usually consisting of a central fixed window flanked by two operable windows. They create additional interior space and offer panoramic views, enhancing the room's aesthetics.",
      image: "/images/windows/7.webp",
    },
    {
      title: "Bow ",
      description: "Bow windows are similar to bay windows but consist of four or more equal-sized windows, creating a gentle, curved arch. They provide expansive views and a larger seating or display area, adding elegance to any room.",
      image: "/images/windows/8.webp",
    },
  ]
  return (
    <div className='py-16 md:py-20'>
      <div className='layout'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 text-center font-heading'>Popular Window Options</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
        </div>
      </div>
    </div>
  )
}

export { WindowOptions }