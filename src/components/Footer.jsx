import React from 'react';
import { LogoFooter } from '.';

const Footer = () => {
  return (
    <div className=' py-4 relative'>
        <div className="bg-mountains opacity-90 absolute w-full h-full left-0 bottom-0 z-10"></div>
        <div className='w-4/5 mx-auto flex items-center relative z-50 sm:flex-col sm:gap-4 sm:justify-center'>
            <div className='flex-1'>
                <img src={LogoFooter} alt="logo" />
            </div>
            <div className='flex-2 justify-end'>
                <p className='uppercase text-mountainNotActive italic'>copyright 2016. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer