import { arrowDiag } from "../../assets/icons"

const Values = () => {
  return (
    <section className='flex flex-col justify-center items-center pt-20 gap-10'>
        <div className="text-center max-container padding-x">
            <h2 className='text-2xl sm:text-[35px] font-bold text-postam-gray mb-7'>Our Values</h2>
            <p className="text-postam-gray mt-3 sm:leading-[1.5em] w-full lg:w-[70%] m-auto">Postam is more than just an app; it’s a place to belong. We connect you to communities that resonate with you, whether you're looking to share hobbies, attend local events, or just meet like-minded people.
            </p>
        </div>
        <div className="w-full bg-light-purple py-12 bg-pattern bg-cover bg-center mt-5 padding-x ">
            <div className="flex flex-col lg:flex-row gap-8 max-container">
                <div className="bg-white px-7 py-14 rounded-xl w-full">
                    <img 
                        src={arrowDiag}
                        alt="arrow-diag"
                    />
                    <h2 className='text-2xl sm:text-3xl font-semibold text-postam-gray'>Convenience</h2>
                    <p className="text-postam-gray mt-3 sm:leading-[1.5em]">Postam allows you to watch content you enjoy, shop for must-have products, and pay your bills— all in one app. It’s like having a personal assistant in your pocket.
                        </p>
                </div>
                 <div className="bg-white px-7 py-14  rounded-xl w-full">
                    <img 
                        src={arrowDiag}
                        alt="arrow-diag"
                    />
                    <h2 className='text-2xl sm:text-3xl font-semibold text-postam-gray'>Efficiency</h2>
                    <p className="text-postam-gray mt-3 sm:leading-[1.5em]">Our user-friendly design makes it easy to find what you're looking for, whether you’re diving into entertainment or browsing the marketplace
                        </p>
                </div>
                 <div className="bg-white px-7 py-14  rounded-xl w-full">
                    <img 
                        src={arrowDiag}
                        alt="arrow-diag"
                    />
                    <h2 className='text-2xl sm:text-3xl font-semibold text-postam-gray'>Security</h2>
                    <p className="text-postam-gray mt-3 sm:leading-[1.5em]">With Postam, you can rest assured knowing that your payments and personal information are protected.
                        </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values