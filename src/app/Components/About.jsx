import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut dicta ducimus reprehenderit dolorum nam quasi hic? Maiores rerum sint quae numquam voluptates, odio ipsum, quia obcaecati animi totam illo?</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum ab in velit possimus iste tempore culpa expedita? Autem nemo rerum dicta reiciendis. Perspiciatis optio, quos ipsam consectetur praesentium explicabo!</p>
                    <p className='py-2 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure non iusto voluptas! Omnis laboriosam tempore illum fugiat voluptas sed possimus cupiditate magnam officiis odit incidunt alias, molestias dicta quae.</p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounder-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
                    <Image
                        className='rounded-xl'
                        src='/about.jpg'
                        alt=''
                        width={600}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default About