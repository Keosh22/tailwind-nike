import { copyrightSign } from "../assets/icons";
import {footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";
const Footer = () => {
  return (
   <footer className="max-container">
    <div className="flex justify-between items-start  gap-20 flex-wrap max-lg:flex-col">
      <div>
        <a href="/">
        <img src={footerLogo} alt="" width={150} height={46}/></a>
        <p className="text-white-400 text-base mt-6  font-montserrat leading-7 sm:max-w-sm">
        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
        </p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon) => (
            <div className="flex justify-center items-center bg-white h-12 w-12 rounded-full">
              <img src={icon.src} alt="icon" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
        
      <div className="flex justify-between flex-wrap flex-1 lg:gap-10 gap-20">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white text-2xl font-palanquin leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 text-base font-montserrat leading-normal hover:text-slate-gray transition ease-in-out delay-150 cursor pointer">
                    <a href="" className="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div> 

    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" height={20} width={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved</p>
      </div>
        <p className="font-montserrat cursor-pointer">Terms and condition.</p>
    </div>
   </footer>
   
  )
}

export default Footer