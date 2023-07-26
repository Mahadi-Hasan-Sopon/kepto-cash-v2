

function Navbar() {
 
  return (
    <div className="hidden lg:flex justify-between px-20 lg:px-40 text-white py-2.5 items-center" id="navbar">
      <div className="logo">
        <img src="assets/logo.svg" alt="" />
      </div>
      <ul className="nav-items flex gap-6 text-base font-medium items-center px-9">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="nav-links">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact-us" className="nav-links">
            Contact Us
          </a>
        </li>
      </ul>
      <ul className="nav-right flex gap-6 text-base font-medium items-center">
        <li>
          <a href="#" className="nav-links flex gap-2 items-center">
            <span>
              <img src="assets/world.svg" alt="" />
            </span>
            English
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Signup
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
