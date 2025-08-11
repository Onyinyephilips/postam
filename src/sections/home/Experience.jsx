import React from 'react'
import PrimaryBtn from '../../components/PrimaryBtn'
import { ExperienceImg, ExperienceImg2 } from '../../assets/images'


const Experience = () => {
  return (
    <section className='padding-x w-full'>
        <div className='py-14 max-container flex flex-col items-center'>
            <div className="flex flex-col justify-center max-container">
                <h2 className='text-center text-[22px] sm:text-[35px] font-bold text-postam-gray mb-2 text-postam-gray leading-[2.0em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000 md:w-[80%] m-auto'> <span className=" relative bg-[#FF4BA2] py-4 font-semibold inline-block px-8 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-white -rotate-6 hover:animate-wobble cursor-pointer max-sm:mt-5 leading-none">Connections</span> with Tailored Experience </h2>
            </div>
            <p className="text-lg text-center sm:text-xl w-full xl:w-[500px] mt-2  leading-normal sm:leading-[1.6em]">Community Engagement: Connect with friends and like-minded individuals.</p>
            <div className="flex"><PrimaryBtn label="Get the app" href="https:google.com" newTab /></div>

            <div className='flex mt-16 gap-14 max-sm:gap-4 max-sm:mt-8 -mb-[10%]'>
                <div className='w-full overflow-hidden rounded-3xl max-sm:rounded-2xl'><img data-aos="zoom-out" data-aos-offset="200" src={ExperienceImg} className='h-[80%] w-full object-cover object-top rounded-3xl max-sm:rounded-2xl'/></div>
                <div className='w-full overflow-hidden rounded-3xl max-sm:rounded-2xl'><img data-aos="zoom-out" data-aos-offset="400" src={ExperienceImg2} className='h-[80%] w-full object-cover object-top rounded-3xl max-sm:rounded-2xl'/></div>
            </div>
        </div>
    </section>
  )
}

export default Experience