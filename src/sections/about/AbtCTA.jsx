import { abtCtaImg } from "../../assets/images"

const AbtCTA = () => {
  return (
    <section className="bg-primary padding-x overflow-hidden">
        <div className="flex flex-col md:flex-row max-container justify-center items-center">
            <div className="w-full max-md:flex max-lg:flex-col lg:padding-x">
                <h1 className='text-2xl sm:text-[35px] font-semibold text-postam-gray mb-7 max-sm:mb-3 leading-normal text-white max-md:text-center max-md:mt-10'>Got more questions?<br /> Reach out</h1>
                <a className="py-4 bg-postam-gray text-white px-10 rounded-full m-auto transform transition-transform duration-300 hover:scale-105" href="/contact">Contact us</a>
            </div>
            <div className=" lg:w-[55%] max-lg:w-[60%] max-lg:mt-10">
                <img
                    src={abtCtaImg}
                    className=" lg:-mt-14" />
            </div>
        </div>
    </section>
  )
}

export default AbtCTA