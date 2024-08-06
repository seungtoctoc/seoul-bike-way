import React from 'react';

import Form from './Form';
import SubmitButton from './SubmitButton';

export default function TabWindow(props) {
  const isOpen = props.isOpen;

  return (
    <div>
      {isOpen ? (
        <div className='absolute top-16 left-2 w-80 h-52 bg-white z-10 rounded-xl shadow-xl'>
          <Form />
          <Form />
          <SubmitButton />
        </div>
      ) : null}
    </div>
  );
}
