import { close } from "../assets/icons"
import { navLinks } from "../constants"

const MobileMenu = ({ setIsOpen }) => {
  return (
    <nav className="bg-violet-100 w-[40%] h-screen fixed z-20 right-0 px-5 pt-5 shadow-md shadow-slate-300 block lg:hidden">
      <div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={close}
          alt="close"
          width={25}
          height={25}
          className="absolute right-0"
        />
      </div>
      <ul className="space-y-3 mt-6">
        {navLinks.map((item) => (
          <li
            key={item.label}
            onClick={() => setIsOpen(false)}
          >
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenu