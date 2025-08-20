import PrimaryBtn from '../../components/PrimaryBtn'
import SecBtn from '../../components/SecBtn'
import { playIcon } from '../../assets/icons'

const Hero = () => {
  return (
    <section 
    id='home'
    className='w-full min-h-screen bg-hero-mobile sm:bg-hero bg-cover bg-center flex flex-col justify-center items-center overflow-hidden'>
        <div className='relative mb-40'>
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-center text-[34px] sm:text-[65px] font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-snug '> Your All-in-One <br/>Lifestyle App </h1>
            <p data-aos="fade-up" data-aos-delay="400" className='text-white text-lg sm:text-xl mt-4 w-[90%] sm:w-[400px] text-center m-auto leading-[1.7em] sm:leading-8 font-light'>Discover a world of entertainment, convenience and community on Postam.</p>

            <div data-aos="fade-up" data-aos-delay="600"  className='flex mt-2 gap-4 justify-center'>
                <PrimaryBtn label="Get the app" href="https://google.com" newTab/> <SecBtn iconURL={playIcon} label="How it works"/>
            </div>
        </div>
    </section>
  )
}

export default Hero