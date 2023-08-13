import React from 'react';
import GradientBtn from './GradientBtn';
import NavBar from '../components/NavBar';




function Contact() {
  return (
    <>
    <NavBar />
    <div name="contact" className="w-full h-screen bg-[#202124] p-4 text-white mt-40 md:mt-24">
            
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-thBlue">Contact</p>
            <p className="py-6 text-xl">Submit the form below or Call <span className='text-thBlue text-2xl'>1-800-123-1234</span> to place an order. All Night Vision and Thermal devices are built to order.</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/7cde5dcb-a145-4c46-9b91-37fa019d2193" 
            method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your name" className="p-2 border-2 rounded-md text-black focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 border-2 rounded-md text-black focus:outline-none"/>
                <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 border-2 rounded-md text-black focus:outline-none"></textarea>
                <GradientBtn className="m-4 mt-4 capitalize" title="send message" />
            </form>
        </div>

    </div>
</div>
</>
  )
}

export default Contact;