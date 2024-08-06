import React from 'react';

import TopBar from './TopBar';
import Form from './Form';

export default function TabWindow(props) {
  const isOpen = props.isOpen;

  return (
    <div>
      {isOpen ? (
        <div className='absolute top-16 left-2 w-80 h-80 bg-teal-400 z-10'>
          <Form />
          <Form />
        </div>
      ) : null}
    </div>
  );
}
