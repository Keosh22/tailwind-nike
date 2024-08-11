import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks  } from "../constants";
import { list } from "postcss";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" />
        </a>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat text-lg leading-normal text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
      </nav>
    </header>
  )
}

export default Nav