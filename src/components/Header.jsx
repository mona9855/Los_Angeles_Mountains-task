import React from 'react';
import { Logo } from '.';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='bg-heroBg sm:bg-heroBgSm bg-cover bg-center h-screen w-full text-white'>
        <Navbar Logo={Logo} Item1='01. History' Item2='02. Team'/>
    </div>
  )
}

export default Header;