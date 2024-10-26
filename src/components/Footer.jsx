import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="main-footer-component">
      <div className="top">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="newsletter"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="links-side"
        >
          <a href="#home">Homepage</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#others">Other pages</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="part"
        >
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
          <p>Cookie Policy</p>
          <p>Careers</p>
        </motion.div>
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

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="part"
        >
          <p>Websites</p>
          <p>Web Apps</p>
          <p>Mobile Apps</p>
          <p>Stand alone app</p>
          <p>Shopify Web</p>
          <p>Ussd codes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="part"
        >
          <h1>Kenya</h1>
          <p>Nairobi</p>
          <p>Donholm, Savannah</p>
          <p>mwanikic314@gmail.com</p>
          <p>+254720128694</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
