import React from 'react'
import { WorksImg } from '../../assets/images'
import { androidWhite, bullet, iosWhite } from '../../assets/icons'
import DownloadBtnP from '../../components/DownloadBtnP'

const Works = () => {
  return (
    <section className='padding-x bg-[#FFF0F7] pt-6 max-lg:pb-14'>
        <div className='max-container'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div data-aos="fade-down" data-aos-delay="200" className='w-full'>
                    <img src={WorksImg} />
                </div>

                <div className='w-full'>
                    <h2 data-aos="fade-up" data-aos-delay="200" className='text-[22px] sm:text-[35px] font-bold text-postam-gray mb-5 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>Here’s How It Works</h2>
                    <p data-aos="fade-up" data-aos-delay="400"  className="text-lg sm:text-xl mt-5 w-full xl:w-[85%]  leading-normal sm:leading-[1.6em]">From unique finds to shared moments, Postam ensures that every interaction is a delightful experience. With our platform, you can easily connect with others and discover new favorites.</p>

                    <div className='mt-8 flex flex-col gap-3'>
                        <p data-aos="fade-left" data-aos-delay="400" className='flex items-center gap-2 text-lg'> <img src={bullet}/> Download the Postam app</p>
                        <p data-aos="fade-left" data-aos-delay="500" className='flex items-center gap-2 text-lg'> <img src={bullet}/> Setup your account</p>
                        <p data-aos="fade-left" data-aos-delay="600" className='flex items-center gap-2 text-lg'> <img src={bullet}/> Start streaming content</p>
                        <p data-aos="fade-left" data-aos-delay="700" className='flex items-center gap-2 text-lg'> <img src={bullet}/> Shop the marketplace or pay your bills effortlessly</p>
                    </div>

                    <div className='mt-10 flex flex-col gap-3'>
                        <p data-aos="fade-up" data-aos-delay="400" className='flex items-center gap-2 text-lg -mb-4'>Available on</p>
                        <div data-aos="fade-up" data-aos-delay="400" className='flex gap-2'>
                            <DownloadBtnP iconURL={androidWhite} label="Android" href="https:google.com" newTab/> <DownloadBtnP iconURL={iosWhite} label="IOS" href="https:google.com" newTab/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Works