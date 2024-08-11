import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navButtons, navLinks  } from "../constants";
import { list } from "postcss";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">

      {/* Logo */}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" />
        </a>

        {/* Links */}
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat text-lg leading-normal text-slate-gray hover:text-black transition ease-in-out duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <ul className="flex justify-center items-center gap-6 max-lg:hidden">
            {navButtons.map((item) => (
              <li><a href={item.href} className="text-lg font-montserrat leading-normal hover:text-slate-gray transition ease-in-out duration-300">{item.label}</a></li>
            ))}
          </ul>

          {/* Hamburger Menu */}
            <div className="hidden max-lg:block">
              <img 
              src={hamburger} 
              alt="Menu" 
              width={25}
              height={25}
              />
            </div>

         
      </nav>
    </header>
  )
}

export default Nav