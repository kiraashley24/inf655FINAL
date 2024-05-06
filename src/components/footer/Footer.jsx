import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      {/* footer  */}
      <footer className="text-white-600 body-font bg-green-600">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-xl font-bold">EM</span>
            <FontAwesomeIcon icon={faLeaf} className="ml-1" />
          </a>
          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Enrichment Market —
            <Link
              to={"/"}
              className="text-gray-100 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Located @ 113 Market Pl Greenwood CO, 80134
            </Link>
          </p>

          {/* media icon  */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* facebook  */}
            <a className="hover:text-yellow-300 transition-colors duration-200 text-gray-100 cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>

            {/* twitter  */}
            <a className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>

            {/* instagram  */}
            <a className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>

            {/* tiktok  */}
            <a className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
