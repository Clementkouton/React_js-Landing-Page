import React from 'react'
import Container from './Container';
import { social } from '../constants';
const Footer = () => {
  return (
    <div className=' mt-10 lg:mt-20'>
      <Container className=' border-t border-n-6 py-5 lg:py-10 flex flex-col items-center gap-5'>
        <div className=' flex items-center gap-4'>
            {social.map((link, index) => (
              <a key={link.id} title={link.alt} href={link.link} target="_blank" rel="noopener noreferrer" className=' text-n-3 body-2 hover:text-p-3 transition duration-300'>
                <img src={link.ico} alt={link.alt} width={24} height={24} />
              </a>
            ))}

        </div>
        <div className=' space-x-4'>
            <a href="#" className=' text-n-3 body-2 hover:text-p-3 transition duration-300' target='_blank' rel="noopener noreferrer">Terms of Service</a>
            <a href="#" className=' text-n-3 body-2 hover:text-p-3 transition duration-300' target='_blank' rel="noopener noreferrer">Privacy Policy</a>
            <a href="#" className=' text-n-3 body-2 hover:text-p-3 transition duration-300' target='_blank' rel="noopener noreferrer">Contact Us</a>
        </div>
        <div className=' py-5 lg:py-10 text-center text-n-3 body-2'>
          &copy; {new Date().getFullYear()} Foxart. All rights reserved.
        </div>
      </Container>
    </div>
  )
}

export default Footer
