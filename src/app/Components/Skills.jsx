import React from 'react'
import Image from "next/image";
const skills = [
    {
        nombre: "HTML",
        imagen: "/assets/skills/html.png"
    },
    {
        nombre: "CSS",
        imagen: "/assets/skills/css.png"
    },
    {
        nombre: "JavaScript",
        imagen: "/assets/skills/js1.png"
    },
    {
        nombre: "React",
        imagen: "/assets/skills/reactpng.png"
    },
    {
        nombre: "Next.js",
        imagen: "/assets/skills/nextjs.png"
    },
    {
        nombre: "Git",
        imagen: "/assets/skills/git.png"
    },
    {
        nombre: "Github",
        imagen: "/assets/skills/github.png"
    },
    {
        nombre: "Tailwind",
        imagen: "/assets/skills/tailwind.png"
    },
    {
        nombre: "Sql",
        imagen: "/assets/skills/sqlpng.png"
    },
    {
        nombre: "Firebase",
        imagen: "/assets/skills/firebase.png"
    },
    {
        nombre: "Excel",
        imagen: "/assets/skills/excelicon.png"
    },
];
const Skills = () => {
    return (
        <section id='skills' className='w-full lg:h-screen p-2'>

            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        skills.map(({ nombre, imagen }) => (
                            <div className="flex justify-center items-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <Image
                                            src={imagen}
                                            width={64}
                                            height={64}
                                            alt={nombre} />
                                    </div>
                                    <h3 className='cursor-default flex flex-col items-center justify-center'>{nombre}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}

export default Skills