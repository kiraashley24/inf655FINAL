import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="text-white-600 body-font bg-green-600">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <button
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            onClick={() => {
              // Handle button click event if needed
            }}
          >
            <span className="text-xl font-bold">EM</span>
            <FontAwesomeIcon icon={faLeaf} className="ml-1" />
          </button>
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Enrichment Market —
            <span className="text-gray-100 ml-1">
              Located @ 113 Market Pl Greenwood CO, 80134
            </span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <button
              className="hover:text-yellow-300 transition-colors duration-200 text-gray-100 cursor-pointer"
              onClick={() => {
                // Handle button click event if needed
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </button>
            <button
              className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer"
              onClick={() => {
                // Handle button click event if needed
              }}
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </button>
            <button
              className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer"
              onClick={() => {
                // Handle button click event if needed
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </button>
            <button
              className="hover:text-yellow-300 transition-colors duration-200 ml-3 text-gray-100 cursor-pointer"
              onClick={() => {
                // Handle button click event if needed
              }}
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </button>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
