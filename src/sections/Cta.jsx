import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'

const Cta = () => {
  return (
    <section
        className='w-full min-h-[300px] sm:min-h-[500px] bg-white bg-cta bg-cover bg-center flex flex-col justify-center items-center'>
            <div className='w-[90%] lg:w-[53%]'>
                <h1 className='text-center text-xl md:text-[42px] sm:text-[32px] sm:leading-[1.2em] font-semibold text-white'> Join the Postam community and enjoy seamless streaming, shopping and bill payments all in one place.</h1>
            </div>
            <PrimaryBtn label="Get the app" href="https:google.com" newTab/>
    </section>
  )
}

export default Cta