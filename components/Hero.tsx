import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ButtonCard from './ui/ButtonCard';
import { FaDownload, FaFileDownload, FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pt-20'>

            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.10] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex flex-col items-center justify-center relative my-2 z-10 '>
                <div className='max-w-[90vw] flex max-sm:flex-col items-center justify-center max-sm:gap-10'>

                    {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web magic with nextjs</h2> */}
                    <div className='flex flex-col gap-10 max-sm:gap-4 items-center'>
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Hi, I am Heena, a frontend developer based in India." />
                        <div className='flex gap-7'>
                            <a href="#about">
                                <ButtonCard title="About me" icon={<FaLocationArrow />} position='right' />
                            </a>

                            <a className="button" href="/Heena-Nankani-Resume.pdf" download="Heena-Nankani-Resume.pdf">
                                <ButtonCard title="Download Resume" icon={<FaDownload/>} position='right' />
                            </a>
                        </div>
                    </div>



                    <img src="/MyPhoto.JPG" alt="" className='sm:max-h-[25rem] max-h-[20rem] sm:mr-20' />


                    {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I am Heena, a frontend developer based in India.</p> */}

                </div>

            </div>

        </div>
    )
}

export default Hero