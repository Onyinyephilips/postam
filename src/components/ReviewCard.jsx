

const ReviewCard = ({imgURL, customerName, feedback}) => {
  return (
    <div  data-aos="fade-up" data-aos-delay="300" className='flex bg-[#F8F8F8] p-6 rounded-lg gap-2 max-sm:p-4'>
        <div className='w-[10%]'>
            <img className="rounded-full" src={imgURL} alt='customer'/>
        </div>
        <div className="w-[90%]">
            <h3 className="text-postam-gray text-lg font-semibold">{customerName}</h3>
            <p className="mt-2">{feedback}</p>
        </div>
    </div>
  )
}

export default ReviewCard