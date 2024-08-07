import Image from 'next/image'
import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id='contact' className='w-full lg:h-screen flex flex-col items-center'>
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className='text-xl tracking-widest uppercase text-[#5651e5s]'>Contact</p>
        <h2 class='py-4'>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div className="">
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='/ContactPc.jpg'
                  alt='contactpng'
                  width={900}
                  height={900}
                />
              </div>

              <div className="">
                <h2 className='py-2'>Name Here</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>I am available for freelance or full time position. Contact me and let's talk.</p>
              </div>
              <div className="">
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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

          </div>

          {/*Right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">

              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="number" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />

                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />

                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' type="email"></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>

            </div>
          </div>

        </div>
      </div>
      <Link href='/#home'>
        <div className="m-6 rounded-full shadow-lg shadow-gray-400 cursor-pointer p-4 hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className='text-[#5651e5]'/>
        </div>
      </Link>
    </section>
  )
}

export default Contact