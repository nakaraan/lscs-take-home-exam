import React from "react"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      {/* Upper navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          { /* Search bar and order button */}
          <div>
            <div className="group">
              <input 
              type="text" 
              placeholder="search" 
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400" // border-primary 
              />
            </div>
          </div>
        </div>
      </div>
      {/* Lower navbar */}
      <div>

      </div>
    </div>
  )
}

export default Navbar;
