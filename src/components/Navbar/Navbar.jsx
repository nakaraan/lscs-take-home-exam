import LogoLight from "../../assets/logo-light.png"
import LogoDark from "../../assets/logo-dark.png"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/",
  },
  {
    id: 3,
    name: "About",
    link: "/",
  },
]

const DropdownLinks = [
  { 
    id: 1,
    name: "Editor's Choice", 
    link: "/#",
  },
  { 
    id: 2,
    name: "Best Selling", 
    link: "/#",
  },
  { 
    id: 3,
    name: "Top Rated", 
    link: "/#",
  }
]

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper navbar */}
      <div className="bg-primary/85 dark:bg-primary/2 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={LogoLight} alt="Logo (light) " className="w-10 block dark:hidden"/>
              <img src={LogoDark} alt="Logo (dark)" className="w-10 hidden dark:block" />
              Eshop
            </a>

            {/* Menu items*/}
            <nav>
              <ul className="flex items-center gap-4 list-none m-0 p-0">
                {Menu.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-3 py-1 hover:text-white dark:hover:text-primary duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* Featured - dropdown */}
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-1 px-3 py-1 hover:text-primary">
                    Featured
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black top-full mt-2">
                    <ul className="list-none m-0 p-0">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search - Cart - Darkmode */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-white dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />
              <IoMdSearch 
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Order button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-3 rounded-full flex items-center gap-2 group overflow-hidden transition-all duration-300"
              aria-label="Order"
            >
              <FaCartShopping className="text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110" />

              {/* keep the text in the DOM and animate width + opacity for smooth transition */}
              <span className="ml-1 max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ease-in-out group-hover:max-w-[5.5rem] group-hover:opacity-100 font-medium">
                Order
              </span>
            </button>

            {/* Darkmode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          
        </ul>

      </div>
    </div>
  )
}

export default Navbar;