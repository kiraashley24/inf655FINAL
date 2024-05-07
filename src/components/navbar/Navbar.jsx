import React from "react";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const navList = (
    <ul className="flex space-x-4 md:space-x-6 text-gray-50 font-semibold text-sm md:text-base">
      <li>
        <Link
          to={"/"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to={"/fruit"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          FRUIT
        </Link>
      </li>
      <li>
        <Link
          to={"/vegetable"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          VEGETABLES
        </Link>
      </li>
      <li>
        <Link
          to={"/meat"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          MEAT
        </Link>
      </li>
      <li>
        <Link
          to={"/bread"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          BREAD
        </Link>
      </li>
      <li>
        <Link
          to={"/pantry"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          PANTRY
        </Link>
      </li>
      <li>
        <Link
          to={"/dessert"}
          className="hover:text-yellow-300 transition-colors duration-200"
        >
          DESSERT
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-green-600 sticky top-0 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between items-center py-2 md:py-4">
        <div className="text-left">
        <Link to={"/"} className="flex items-center text-gray-50">
            <h2 className="font-bold text-lg md:text-2xl mr-2">Enrichment Market</h2>
            <FontAwesomeIcon icon={faLeaf} className="text-gray-50 fa-l" />
          </Link>
        </div>
        <div>{navList}</div>
        <div className="flex items-center space-x-4">
          
          <Link to={"/login"} className="text-gray-50 hover:text-yellow-300">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to={"/cart"} className="text-gray-50 hover:text-yellow-300">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
