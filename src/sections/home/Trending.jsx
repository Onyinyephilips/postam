
import { trendingImg } from "../../assets/images"
import PrimaryBtn from "../../components/PrimaryBtn"
import {trending } from "../../constants"

const TrendCard = ({title, hashtag, postcount, top}) => {
  return (
    <div  data-aos="fade-up" data-aos-delay="300" className='flex gap-x-2 gap-y-14 max-sm:py-0'>
        <div className='w-[10%]'>
           <h2 className="text-2xl font-semibold text-gray-400">{top}</h2>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
          <h5 className="text-gray-500">{title}</h5>
          <h2 className="text-postam-gray text-lg lg:text-xl 2xl:text-2xl font-semibold">{hashtag}</h2>
          <p className="text-gray-500">{postcount}</p>
        </div>
    </div>
    
  )
}



const Trending = () => {
  return (
    <section className="bg-white py-24 padding-x relative ">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row justify-center items-center max-sm:flex-col-reverse">
            <div className="lg:w-[60%] w-full">
            <div className="mt-10">
                <h2 data-aos="fade-up" data-aos-delay="100" className=' text-2xl sm:text-3xl font-bold text-postam-gray mb-5 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung'>Trending on Postam today</h2>
            </div>

            <div className="grid grid-cols-2 mt-8 max-sm:grid-cols-1 gap-8">
                {trending.map((trend) => (
                    <TrendCard
                    key={trend.title} 
                    title={trend.title}
                    hashtag={trend.hashtag}
                    postcount={trend.postcount}
                    top={trend.top}
                   
                    
                />
            ))}
            </div> <div className="flex mt-5 mb-5"><PrimaryBtn label="Download the app" href="https:google.com" newTab/></div></div>
            <div className="lg:w-[40%] w-full ">
                <img className="w-full" src={trendingImg} />
            </div>
            </div>
        </div> 
    </section>
  )
}

export default Trending