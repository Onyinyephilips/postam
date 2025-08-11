import { mail, phone } from "../../assets/icons"

const Contactus = () => {
  return (
    <section
        className='w-full bg-white flex flex-col justify-center items-center pb-20'>
            <div className='w-full min-h-[350px] sm:min-h-[400px] bg-light-purple bg-pattern bg-cover bg-center flex flex-col justify-center padding-x'>
                <h1 className='text-center text-3xl sm:text-4xl font-bold text-postam-gray'>Contact Us</h1>
                <p className='text-center text-lg sm:text-xl mt-3'>Have questions or Remarks, Just drop a message!</p>
            </div>

            <div className="bg-white rounded-xl max-container -mt-20 p-8 max-sm:p-3 flex gap-7 flex-col lg:flex-row w-[80%] shadow-lg">
                <div className="bg-primary rounded-xl p-7 w-2/4 max-lg:w-full text-white">
                    <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
                    <p className="text-white mt-3">Fill up the form and our team will get back to you within 24hours.</p>

                    <div className="mt-20 flex gap-3">
                        <img 
                                        src={mail}
                                        alt='mail-icon'
                                        width={25}
                                        height={25}
                                    /> <p className="text-white"><a href="mailto:hello@postam.com">hello@postam.com</a></p>
                    </div>
                    <div className="mt-5 flex gap-3">
                        <img 
                                        src={phone}
                                        alt='phone-icon'
                                        width={25}
                                        height={25}
                                    /> <p className="text-white"><a href="tel:+2348903823123">+234 890 3823 123</a></p>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className='text-2xl sm:text-3xl font-bold text-postam-gray'>Reach out to us</h2>
                     <p className="text-postam-gray mt-3">Please enter your details and we’ll get back to you within few minutes</p>
                     <form className="mt-6 flex flex-col gap-6">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <input className="h-14 border-2 border-[#D6D6D6] w-full p-3 bg-[#F8F8F8]" type="text" placeholder="First Name*" required/>
                            <input className="h-14 border-2 border-[#D6D6D6] w-full p-3 bg-[#F8F8F8]" type="text" placeholder="Last Name*" required/>
                        </div>
                            <input className="h-14 border-2 border-[#D6D6D6] w-full p-3 bg-[#F8F8F8]" type="tel" placeholder="Phone"/>
                            <input className="h-14 border-2 border-[#D6D6D6] w-full p-3 bg-[#F8F8F8]" type="email" placeholder="Email Address*" required/>
                            <textarea cols="50" rows="5" className="border-2 border-[#D6D6D6] w-full p-3 bg-[#F8F8F8]" type="textarea" placeholder="Message*" required></textarea>
                            <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-[#594daf] transition">Send Message</button>
                     </form>
                </div>
            </div>
    </section>
  )
}

export default Contactus