import Image from 'next/image';
import React from 'react';
import spinner from '../public/spinner.gif';
import fondo from '../public/fondo.jpg';

const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
      
     
          
     
     
      <Image
          src={fondo}
          layout="fill"
          className="object-cover"
          alt="City Background"
        />
      
    </>
  );
};

export default Spinner;
