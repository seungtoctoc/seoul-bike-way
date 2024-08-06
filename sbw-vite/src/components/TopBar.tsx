import React, { useEffect, useState } from 'react';

export default function TopBar(props) {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  const [icon, setIcon] = useState('▲');

  return (
    <div className='absolute flex left-2 top-2 w-80 h-12 bg-white z-10 justify-between p-2 rounded-xl'>
      <p
        className='pl-2 pr-2 text-3xl text-gray-500'
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            setIcon('▼');
            return;
          }
          setIsOpen(true);
          setIcon('▲');
        }}
      >
        {icon}
      </p>
      <p className='text-xl mr-2'>Seoul Bike Way</p>
    </div>
  );
}
