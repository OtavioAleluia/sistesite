import React from 'react';

const Navbar = () => {
  return (
    
    <div className='fixed top-0 w-screen bg-blue-950 text-white h-16 m-0  items-center justify-center px-4 shadow-md'>
      <div className='items-center w-screen justify-center'>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          <img src="logo.png" alt="Logo" className='h-10' />
        </div>

      </div>

      {/* Menu */}
      <div className='flex space-x-7 justify-center mx-4'>
        <i className='cursor-pointer hover:text-gray- font-[Libre-franklin]'>Home</i>
        <i className='cursor-pointer hover:text-gray- font-[Libre-franklin]'>Sobre</i>
        <i className='cursor-pointer hover:text-gray- font-[Libre-franklin]'>Serviços</i>
        <i className='cursor-pointer hover:text-gray- font-[Libre-franklin]'>Contato</i>
      </div>
    </div>
  );
}

export default Navbar;

