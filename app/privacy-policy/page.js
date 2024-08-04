import { privacyPolicy } from '@/public/data/privacy-policy'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div className='pt-10'>
      <div className='layout leading-normal'>
        {
          privacyPolicy.map((item, index) => (
            <div key={index} className='privacy-policy-item mb-8 md:mb-10 xl:mb-12'>
              <h2 className='text-xl md:text-2xl xl:text-3xl font-bold mb-4 font-heading'>{item.title}</h2>
              <div>
                {
                  item.content.map((content, index) => (
                    <p key={index} className='font-paragraph text-sm md:text-base mb-3 xl:text-lg'>{content}</p>
                  ))
                }
                {item.title == "Contact Us" && <p key={index} className='font-paragraph text-sm md:text-base mb-3 xl:text-lg'>
                  Axis Remodeling <br />
                  1711 Ontario Road <br />
                  Green Bay, WI 54311</p>}
                {
                  item.points && (
                    <ul className='ml-2 md:ml-3 xl:ml-4'>
                      {
                        item.points.map((point, index) => (
                          <li key={index} className='mb-1'>
                            <span className='font-bold font-paragraph mr-1 xl:text-lg'>{point.title}</span>
                            <span className='font-paragraph mr-1 xl:text-lg'>{point.descrption}</span>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PrivacyPolicyPage