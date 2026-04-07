import React from 'react'
import Container from './Container'
import { features } from '../constants'


const Features = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col items-center gap-5 max-w-4xl w-full mx-auto py-5 lg:py-10'>
            <div className='flex flex-col items-center gap-5 text-center'>
                <h2 className=' h2'>
                    Features
                </h2>
                <p className=' body-1 text-n-3'>
                    Our landing page template work seamlessly on all devices.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  w-full'>
                {features.map((feature) => (
                    <div key={feature.id} className=' border border-stroke-1 space-y-8 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 cursor-pointer animate'>
                        <img src={feature.image} alt={feature.alt} width={48} height={48} />
                        <div className=' space-y-4'>

                            <h3 className='h4'>{feature.title}</h3>
                            <p className=' body-2 text-n-3'>{feature.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
