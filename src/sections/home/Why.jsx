
import React, { useState, useEffect } from "react";
import { slides } from "../../constants";

const Why = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(true); // Fade in new slide
      }, 300); // Matches fade-out duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };
  return (
    <section className="bg-light-purple py-20 padding-x relative">
        <div className="max-container">
            <div>
                <h2 data-aos="fade-up" data-aos-delay="200" className=' text-center text-[22px] sm:text-[35px] font-bold text-postam-gray mb-5 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>Why Postam?</h2>
                    <p data-aos="fade-up" data-aos-delay="400"  className=" text-center text-lg sm:text-xl mt-5 w-full xl:w-[40%]  leading-normal sm:leading-[1.6em] m-auto">We seamlessly merge the convenience of a marketplace with social networking.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" id="slider" className="mt-10">
               <div className="relative w-full overflow-hidden bg-white rounded-2xl p-6 md:p-10">
                {/* Slide container */}
                <div
                  className={`flex flex-col gap-20 max-sm:gap-10 md:flex-row items-center justify-between transition-opacity duration-500 ease-in-out ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Left side - Text */}
                  <div className="w-full md:w-2/5 order-2 md:order-1">
                  <h5 className="text-xl font-light mb-4">
                      {slides[currentIndex].id}
                    </h5>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {slides[currentIndex].title}
                    </h2>
                    <p className="text-gray-700 text-lg sm:text-xl leading-normal sm:leading-[1.6em]">{slides[currentIndex].description}</p>

                    {/* Dots */}
                    <div className="flex gap-1 mt-6">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? "bg-postam-gray" : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right side - Image */}
                  <div className="w-full md:w-1/2 order-1 md:order-2">
                    <img
                      src={slides[currentIndex].imgURL}
                      alt={slides[currentIndex].title}
                      className="w-full h-60 md:h-[550px] object-cover object-top rounded-2xl"
                    />
                  </div>
      </div>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Why