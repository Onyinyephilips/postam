import { aboutImg } from "../../assets/images"


const Story1 = () => {
  return (
    <section className=" padding-x py-4 w-full relative ">
        <div className="max-container flex justify-center items-center flex-col lg:flex-row gap-8">
        <div className="w-[60%] max-lg:w-[100%]">
            <p className="text-lg bg-primary py-3 inline-block px-6 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-white -rotate-6 hover:animate-wobble cursor-pointer max-sm:mt-10">Our Story</p>
            <h1 className='text-3xl sm:text-4xl font-bold text-postam-gray leading-[1.3em] w-full xl:w-[65%] mt-8 text-postam-gray'>From Idea to App: The Postam Story</h1>
            <p className="text-lg sm:text-xl mt-5 w-full xl:w-[65%] leading-normal sm:leading-[1.6em]">At Postam, we believe in making life simpler by bringing together everything you need in one place. Our journey started with a simple idea: what if one app could combine the day-to-day activities people juggle, making them easier and more enjoyable?</p>
        </div>

        <div className="w-[40%] max-lg:w-[100%] mb-10">
            <img 
               src={aboutImg}
               alt="about-postam" 
               className=""
            />
        </div></div>

    </section>
  )
}

export default Story1