import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="main-footer-component">
      <div className="top">
        <div className="newsletter">
          <h1>Charles.</h1>
          <p>Subscribe to my newsletter:</p>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email to register..."
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </label>
        </div>

        <div className="links-side">
          <a href="#home">Homepage</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#others">Other pages</a>
        </div>

        <div className="part">
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
          <p>Cookie Policy</p>
          <p>Careers</p>
        </div>
      </div>

      <div className="bottom">
        <div className="copyright">
          <div className="links">
            <a
              href="http://www.linkedin.com/in/charles-njoroge-063b0626a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://github.com/c-njoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="rights">
            <PiCopyrightThin />
            <p>Copyright 2024 - Mil.All Rights Reserved.</p>
          </div>
        </div>

        <div className="part">
          <p>Websites</p>
          <p>Web Apps</p>
          <p>Mobile Apps</p>
          <p>Stand alone app</p>
          <p>Shopify Web</p>
          <p>Ussd codes</p>
        </div>

        <div className="part">
          <h1>Kenya</h1>
          <p>Nairobi</p>
          <p>Donholm, Savannah</p>
          <p>mwanikic314@gmail.com</p>
          <p>+254720128694</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
