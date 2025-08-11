import { apple, playstore } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { footerContact, footerLinks } from "../constants"
import DownloadBtn from "./DownloadBtn"
import PrimaryBtn from './PrimaryBtn'


const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 padding-x">
        <div className="max-container">
          <div className="flex max-md:flex-col gap-10">
            <div className=" w-full md:w-[55%]">
                <a href="/"> <img src={headerLogo} alt="logo"/> </a>
                
                  {footerContact.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {/* <h4>{section.title}</h4> */}
                      <ul className="mt-5">
                        {section.links.map((item, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={item.link}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                
                <p className="mt-10 -mb-4 text-postam-gray text-lg font-light sm:leading-[1.5em]">Download now on::</p>
                <div className='flex mt-2 gap-4 justify-start'>
                <DownloadBtn iconURL={playstore} label="Play store" href="https:google.com" newTab/> <DownloadBtn iconURL={apple} label="App store" href="https:google.com" newTab/>
            </div>
            </div>
            
            <div className="flex flex-1 justify-between w-full md:w-[50%] items-stretch">
              {footerLinks.map((section) => (
                <div key={section} className="flex flex-col">
                  <h4 className="text-postam-gray text-xl font-semibold border-l-2 border-dashed border-gray-300 pl-5 pt-5">{section.title}</h4>
                  <ul className="flex flex-col gap-4 border-l-2 border-dashed border-gray-300 pl-5 pb-5 pt-6 flex-grow">
                    {section.links.map((link) => (
                      <li>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
        </div>
        </div>

        <div id="subscribe" className="py-10 border-t-2 border-b-2 mt-10">
            <div className="max-container flex justify-between items-center gap-7 md:gap-38 max-md:flex-col">
              
              <div className="w-full md:w-[50%]"><h2 className=' text-2xl sm:text-3xl font-bold text-postam-gray mb-2 text-postam-gray sm:leading-[1.3em] max-sm:leading-sung'>Join Our Newsletter</h2>
              <p className="text-lg  w-full  leading-normal sm:leading-[1.6em]">Subscribe to Newsletter, let’s unlock your fullest potential. </p>
              </div>
            
            <div className="w-full md:w-[50%]">
              <form className="border-gray-200 rounded-full md:border-2 flex w-full justify-between items-center max-md:flex-col gap-2">
                <input type="text" className="focus:outline-none focus:ring-0 text-postam-gray w-full border-0 lg:w-[70%] rounded-full pl-4 max-md:p-4 max-md:border-2" placeholder="subscribe to our email"/>
                <div className="w-full lg:w-[35%]"><button className="gap-2 px-7 py-5 border text-lg leading-none bg-postam-gray rounded-full border-postam-gray text-white transform transition-transform duration-300 hover:scale-105 w-full">Subscribe</button></div>
              </form>
            </div>
            </div>
            
        </div>

        <div className="text-center py-10">
            <p className="text-sm">
        &copy; {new Date().getFullYear()} Postam Technologies. All rights reserved.
      </p>
        </div>

    </footer>
  )
}

export default Footer