import { useState } from "react";
import { FiChevronDown, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/download.png";
import pk from "../assets/pk.svg";
import TopBar from "./TopBar";

const MainLayout = ({ children }) => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
     <TopBar/>

      {/* Navbar */}
      <nav className="bg-white fixed top-7  w-full z-40 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-2">
          <div className="flex w-full md:w-auto justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden mr-2 text-xl"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
              <img src={logo} alt="Logo" className="h-12 md:h-20" />
            </div>

            <div className="flex items-center md:hidden">
              <div className="flex items-center font-bold">
                <img src={pk} alt="PK" className="w-5 mr-1" />
                <span className="hidden xs:inline">PK / PKR</span>
                <FiChevronDown className="inline" />
              </div>
              <FiShoppingBag className="text-2xl ml-4 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/2 mt-4 md:mt-0">
            <div className="flex w-full">
              <button className="bg-gray-100 px-2 sm:px-4 py-2 border-r-0 rounded-l-lg flex items-center text-sm">
                All
                <FiChevronDown className="ml-1" />
              </button>
              <input
                type="search"
                placeholder="Search fashion"
                className="bg-gray-100 px-2 sm:px-4 py-2 w-full border-l-0 rounded-r-lg focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="mr-4">
              <p className="text-sm">Deliver To / Currency</p>
              <div className="flex items-center font-bold">
                <img src={pk} alt="PK" className="w-5 mr-1" />
                <span>
                  PK / PKR <FiChevronDown className="inline" />
                </span>
              </div>
            </div>
            <FiShoppingBag className="text-2xl ml-4 cursor-pointer" />
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-36 md:top-32 w-64 h-screen border-r border-gray-200 z-40 bg-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              "All",
              "New Arrivals",
              "Women",
              "Men",
              "Kids",
              "Brands",
              "Top Curations",
              "Orders",
              "Rewards",
            ].map((item) => (
              <li key={item}>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center text-sm md:text-base"
                  onClick={() => {
                    toggleSection(item);
                    // if (window.innerWidth < 768) setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                  {["Women", "Men", "Kids"].includes(item) && (
                    <FiChevronDown
                      className={`transform ${
                        openSection === item ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {openSection === item && (
                  <ul className="ml-8 space-y-2 mt-2">
                    {item === "Women" &&
                      ["Clothing", "Accessories", "Foot Wear"].map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 rounded text-sm"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    {item === "Men" &&
                      ["Clothing", "Footwear", "Accessories"].map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 rounded text-sm"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    {item === "Kids" &&
                      ["Girl", "Boy"].map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 rounded text-sm"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-24 md:pt-32">{children}</main>
    </div>
  );
};

export default MainLayout;
