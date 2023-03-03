import React from 'react';
import { MoonLoader } from 'react-spinners';
import "./Loader.css";

const Loader = () => {
  return (
    <div className= 'loader'>
      <MoonLoader className='simbolo'/>      
    </div>
  );
};

export default Loader;
