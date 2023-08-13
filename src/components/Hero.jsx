import React, { useState, useRef } from 'react';
import HeroVideo from '../assets/nightskytrimmed.mp4';
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';
import GradientBtn from './GradientBtn';
import { Link } from 'react-router-dom';
 


function Hero({isMenuShown}) {

     const [isVideoPlaying, setIsVideoPlaying] = useState(true);

     const videoRef = useRef();

     const handleVideoPause = () => {
        videoRef.current.pause()
        setIsVideoPlaying(false)
     }

     const handleVideoPlay = () => {
        videoRef.current.play()
        setIsVideoPlaying(true)
     }

  return (

    <div name="home" className='flex items-end justify-center w-full h-screen text-center'> 
          <video ref={videoRef} src={HeroVideo} loop muted  autoPlay playsInline className='object-cover h-full w-full absolute -z-10'/>
          
          <div className={`p-8 flex flex-col items-center justify-center duration-500 w-full
           ${isVideoPlaying ? '' : 'bg-black/80'} ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}>
             <h1 className='text-5xl lg:text-7xl lg:mb-8'>Twilight Inc.</h1>
             <h1 className='text-5xl lg:text-7xl capitalize mb-12'>Own the <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-teal-500'>Night</span></h1>
             
              <div className='flex flex-row justify-center items-center'>
                <Link to='/productpage'><GradientBtn className="capitilize" title="Products"/></Link>
                <Link to='/contactpage'><GradientBtn className="capitilize mx-12" title="Contact"/></Link>
                
                {isVideoPlaying ? <FaPauseCircle size={30} onClick={handleVideoPause} className='cursor-pointer hover:scale-110 duration-200 text-thBlue'/> : <FaPlayCircle size={30} onClick={handleVideoPlay} className='cursor-pointer hover:scale-110 duration-200 text-thBlue'/>}
              </div>


          </div>
    </div> 
  )
}

export default Hero;
