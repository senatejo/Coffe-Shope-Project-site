// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent py-4 px-10">
        <ul className="flex space-x-50 justify-center ">
          <li><a href="#home" className="text-white hover:text-amber-700">Home</a></li>
          <li><a href="#menus" className="text-white hover:text-amber-700">Our Menus</a></li>
          <li><a href="#about" className="text-white hover:text-amber-700">About</a></li>
          <li><a href="#Careers" className="text-white hover:text-amber-700">Careers</a></li>

        </ul>
      </nav>
    );
  }
  