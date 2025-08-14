import { closeIcon, plusIcon } from '../assets/icons'
import { faqdata } from '../constants/faq'

const Question = ({faqdata, onClick, isOpen}) => {
  return (
    <section className='border-b border-black/20 overflow-hidden'>
        <div 
            onClick={onClick} 
            className='flex justify-between gap-8 items-start cursor-pointer text-xl py-4'>
        <h2 className={`${isOpen ? "font-semibold text-primary": ""} ease-in-out duration-500 w-[80%]`}>{faqdata.question}</h2>
        <span className={`${isOpen ? "rotate-180": ""} ease-in-out duration-500`}>{isOpen ? <img 
            src={closeIcon}
            alt='openIcon'
            width={15}
            height={15}
        /> : <img 
            src={plusIcon}
            alt='openIcon'
            width={15}
            height={15}
        />}</span>
        </div>

        <p className={`text-md mb-5 ease-in-out duration-300 ${isOpen ? "max-h-[750px] opacity-100" : "max-h-0 opacity-0"}`}>
            {faqdata.answer}</p>
    </section>
  )
}

export default Question