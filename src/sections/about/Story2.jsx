import { mission, postImg, vision } from "../../assets/images"


const Story2 = () => {
  return (
    <section className="bg-light-purple py-20 w-full relative padding-x">
        <div className="max-container flex flex-col gap-8 ">
            <div className="w-full lg:w-1/2">
                <h2 className='text-2xl sm:text-[35px] font-bold text-postam-gray mb-7'>Our Story</h2>
                <p className="text-postam-gray mt-3 sm:leading-[1.5em]">Postam was founded by (names), who were fed up with constantly moving between apps for different tasks like streaming, shopping, and paying bills. We wanted to simplify things, so we created Postam, a single app that brings everything together, making everyday tasks quick and straightforward. <br/><br/> We built Postam to be user-friendly, secure, and packed with features we knew people like us needed. We hope to make everyday life more convenient by offering a one-size-fits-all solution for entertainment, shopping, payments and community.
 </p>
            </div>

            <div>
                <img
                    src={postImg} 
                    alt="postam-image"
                />
            </div>

            <div className="flex gap-8 flex-col lg:flex-row">
                <div className="bg-white w-full rounded-xl overflow-hidden">
                    <div className="p-7">
                        <h2 className='text-2xl sm:text-3xl font-semibold text-postam-gray'>Our Mission</h2>
                        <p className="text-postam-gray mt-3 sm:leading-[1.5em]">To empower individuals with a comprehensive digital platform that streamlines their daily activities, amplifies their entertainment options, and simplifies their financial transactions.
                        </p>
                    </div>
                    <img 
                        src={mission}
                    />

                </div>

                 <div className="bg-white w-full rounded-xl flex flex-col justify-between overflow-hidden">
                    <div className="p-7">
                        <h2 className='text-2xl sm:text-3xl font-semibold text-postam-gray'>Our Vision</h2>
                        <p className="text-postam-gray mt-3 sm:leading-[1.5em]">To become the go-to app for Nigerians who value convenience, offering a seamless and personalized user experience that exceeds expectations.
                        </p>
                    </div>
                    <img 
                        src={vision}
                    />

                </div>
            </div>
        </div>

    </section>
  )
}

export default Story2