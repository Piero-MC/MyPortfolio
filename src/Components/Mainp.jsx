'use client'
import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation';
import Coverparticle from './Coverparticle';
const Main = () => {
  return (
    
    <section id='home' className="w-full h-screen text-center">
      
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1>Hi, I'm <span className='text-[#5651e5]'>
            <TypeAnimation
              sequence={[
                "Piero Cuya",
                1500,
                "Web Developer",
                1500
              ]}
              wrapper='span'
              speed={60}
              repeat={Infinity}
              className='font-bold text-[#5651e5]'
            /></span>
          </h1>

          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experience. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main