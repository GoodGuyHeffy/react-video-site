import React from 'react';
import NavBar from '../components/NavBar';

function rickroll() {
  return (
    <>
    <NavBar />
      <div className='mt-40 flex justify-center items-center'>
        <iframe autoplay className='w-[1000px] h-[600px]' title="Rick roll lol" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=tGlqqo3WobZbz15d" controls muted controlslist="nodowmload"></iframe>
      </div>
    </>
  )
}

export default rickroll;