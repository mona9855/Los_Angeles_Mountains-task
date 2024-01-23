import React from 'react'

const Navbar = ({ Logo, Item1, Item2 }) => {


  return (
    <div className='flex sm:flex-col sm:items-center sm:gap-4 py-4 w-4/5 mx-auto'>
         {/* Navbar Logo Image */}
         <div className='flex-1'>
                <img src={Logo} alt="logo" />
            </div>

            {/* Navbar Items */}
            <div className='flex-1 flex justify-end gap-8  uppercase font-lora text-inherit'>
                <p className='pointer hover:scale-110 hover:text-linksHover'><a href='#history' className="border-b-2">{Item1}</a></p>
                <p className='pointer hover:scale-110 hover:text-linksHover'><a href='#team' className="border-b-2">{Item2}</a></p>
            </div>
    </div>
  )
}

export default Navbar