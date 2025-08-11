import ReviewCard from "../../components/ReviewCard"
import { reviews } from "../../constants"

const Reviews = () => {
  return (
    <section className="bg-white py-20 padding-x relative">
        <div className="max-container">
            <div>
                <h2 data-aos="fade-up" data-aos-delay="200" className=' text-center text-2xl sm:text-3xl font-bold text-postam-gray mb-5 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung motion-preset-slide-up motion-duration-1000'>What Our Users Are Saying</h2>
                    <p data-aos="fade-up" data-aos-delay="400"  className=" text-center text-lg sm:text-xl mt-5 w-full xl:w-[40%]  leading-normal sm:leading-[1.6em] m-auto">Don't just take our word for it. Here's what our users have to say about their experience with our platform.</p>
            </div>

            <div className="grid grid-cols-3 mt-8 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8">
                {reviews.map((review) => (
                    <ReviewCard 
                    key={review.customerName} 
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    feedback={review.feedback}
                   
                    
                />
            ))}
            </div>
        </div> 
    </section>
  )
}

export default Reviews