import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Projectitem from './Projectitem';

const Projects = () => {
  const projectArr = [
    {
      title: 'Property Finder',
      backgroundImg: '/about.jpg',
      projectUrl: '/'
    },
    {
      title: 'Property Finder',
      backgroundImg: '/about.jpg',
      projectUrl: '/'
    },
    {
      title: 'Property Finder',
      backgroundImg: '/about.jpg',
      projectUrl: '/'
    },
    {
      title: 'Property Finder',
      backgroundImg: '/about.jpg',
      projectUrl: '/'
    }
  ]

  return (
    <section id='projects' className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 class='py-4'>What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {
            projectArr.map(({ title, backgroundImg, projectUrl }) => (
              <Projectitem
                title={title}
                backgroundImg={backgroundImg}
                projectUrl={projectUrl} />
            )
            )
          }

        </div>
      </div>
    </section>
  )
}

export default Projects
