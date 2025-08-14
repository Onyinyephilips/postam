import { cart } from "../../assets/icons"
import { DiscoverImg, DiscoverImg2, Entertain, marketPlace } from "../../assets/images"
import PrimaryBtn from "../../components/PrimaryBtn"

const Discover = () => {
  return (
    <section className="w-full relative bg-light-purple py-20 padding-x">
        <div className="flex flex-col justify-center max-container">
            <h2 data-aos="fade" data-aos-delay="200"  className='text-center text-[22px] sm:text-[35px] font-bold text-postam-gray mb-7 text-postam-gray leading-[2em] max-sm:leading-none motion-preset-slide-up motion-duration-1000'>Discover a World of Possibilities<br/> with <span className=" relative bg-primary py-4 font-semibold inline-block px-8 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-white -rotate-6 hover:animate-wobble cursor-pointer max-sm:mt-5 leading-none">Postam <img src={cart} className="absolute top-[-85%] left-[60%] max-sm:w-[80%] " /></span> </h2>

            <div className="flex bg-pale-purple rounded-xl p-12 flex-col lg:flex-row gap-14 max-md:gap-6 max-md:p-5 mt-10 relative">
                <div className="w-full lg:w-[40%]">
                    <h2 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-3xl font-bold text-postam-gray mb-5 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>Postam <br/>Post Monetization </h2>
                    <p data-aos="fade-up" data-aos-delay="400"  className="text-lg sm:text-xl mt-5 w-full xl:w-[85%]  leading-normal sm:leading-[1.6em]">Postam creator studio enables users to start making money based on their content’s views and engagement.</p>
                    <div data-aos="fade-up" data-aos-delay="200" className="flex"><PrimaryBtn label="Get the app" href="https:google.com" newTab /></div>
                     
                </div>

                <div data-aos="fade-right" data-aos-delay="400"  className="w-full lg:w-[60%]">
                    <img src={DiscoverImg} 
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="flex mt-10 gap-10 flex-col lg:flex-row">
                <div className="pt-10 px-8 max-sm:px-5 bg-primary rounded-xl bg-pattern2 bg-cover bg-center flex flex-col w-full overflow-hidden">
                    <h2 className='text-white text-2xl sm:text-3xl font-bold  text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>Never-ending Entertainment  </h2>
                    <p className="text-lg sm:text-xl mt-5 w-full xl:w-[85%]leading-normal sm:leading-[1.6em] text-white">Stream your favorite content or share your own. Stay entertained and inspired with a community of creators and viewers.</p>
                    <img data-aos="fade-up" data-aos-delay="200" src={Entertain}
                        className="self-end mt-4 lg:w-[95%]"
                    />
                </div>

                <div className="pt-10 px-8 max-sm:px-5 bg-primary rounded-xl bg-pattern2 bg-cover bg-center flex flex-col w-full justify-between overflow-hidden">
                    <h2 className='text-white text-2xl sm:text-3xl font-bold text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>Fast and Simple Bill Payments  </h2>
                    <p className="text-lg sm:text-xl mt-5 w-full xl:w-[85%] leading-normal sm:leading-[1.6em] text-white">Pay for electricity, data, and more in seconds, directly on Postam.</p>
                    <img data-aos="fade-up" data-aos-delay="200" src={DiscoverImg2}
                        className="self-end mt-4 lg:w-[50%] "
                    />
                </div>
            </div>

            <div className="flex bg-pale-purple rounded-xl px-12 pt-12 flex-col lg:flex-row gap-24 max-md:gap-6 max-md:px-5 max-md:pt-5 mt-10 relative overflow-hidden">
                <div className="w-full lg:w-[40%]">
                    <h2 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-3xl font-bold text-postam-gray mb-5 mt-2 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>24/7 Marketplace </h2>
                    <p data-aos="fade-up" data-aos-delay="400" className="text-lg sm:text-xl mt-5 w-full xl:w-[85%]  leading-normal sm:leading-[1.6em]">Discover products you love and enjoy secure, seamless transactions without leaving the app.</p>
                    <div data-aos="fade-up" data-aos-delay="400" className="flex "><PrimaryBtn label="Get the app" href="https:google.com" newTab /></div>
                     
                </div>

                <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-[60%]">
                    <img src={marketPlace} 
                        className="rounded-xl w-full lg:w-[90%]"
                    />
                </div>
            </div>
        </div>


    </section>
  )
}

export default Discover