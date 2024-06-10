import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Projectitem = ({title,backgroundImg,projectUrl}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
                className='rounded-xl group-hover:opacity-10'
                src={backgroundImg}
                alt='project'
                width={400}
                height={300}
            />
            <div className="hidden group-hover:block cursor-default absolute top-[50%] lef-[50%] translate-y-[-50%]">
                <h3 class='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default Projectitem