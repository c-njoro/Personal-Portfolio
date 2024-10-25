import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Scrollbar from "smooth-scrollbar/dist/smooth-scrollbar";
import Works from "../components/Works";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.01, // Adjust damping for inertia effect
      });

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  //button to follow cursor here is the logic

  return (
    <div className="home" ref={scrollRef}>
      <div className="main-home-container">
        <video autoPlay loop muted>
          <source src="/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="info">
          <h1>
            Hello, am <span>Charles</span>.
          </h1>
          <h1>
            <span>Software </span>Engineer
          </h1>

          <p className="more">
            A Full-Stack Developer dedicated to creating professional,
            high-performance websites for businesses. Whether you need an online
            presence or a custom solution, I’m here to turn your ideas into
            reality.
          </p>

          <div className="quick-action">
            <button>
              <p>What i do</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            <button>
              <p>View works</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon bg-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="about-me-container">
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>

        <div className="my-info">
          <motion.div className="image-side">
            <Image
              alt="charles image"
              width={700}
              height={700}
              src="https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg"
              loading="lazy"
              className="big-image"
            ></Image>
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
          </motion.div>

          <div className="info-side">
            <h1>About Me</h1>
            <p className="long-p">
              I am an experienced full-stack developer with a proven track
              record of delivering high-quality, scalable solutions tailored to
              meet business needs. I specialize in creating robust websites and
              web applications that provide seamless user experiences and drive
              efficiency. Whether you need a dynamic front-end or a powerful
              back-end, I bring a results-driven approach to every project,
              ensuring that your business achieves its digital goals with
              innovative and reliable solutions.
            </p>
            <h2>Expertise:</h2>
            <div className="skills">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Next.js</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>UI/UX Design</p>
              <p>Tailwind CSS</p>
              <p>Express.js</p>
              <p>WordPress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-ideas-container">
        <video autoPlay loop muted>
          <source src="/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="intro">
          <p>
            <span>Professional focused on helping your brand </span>
            <span>grow and move forward</span>
          </p>
          <div className="line-through"></div>
        </div>

        <div className="head-section">
          <div className="one-block">
            <div className="left">
              <button></button>
            </div>
            <div className="right">
              <h1>
                <span>Unique</span> Ideas
              </h1>
            </div>
          </div>

          <div className="one-block">
            <div className="left">
              <button>
                <p>What i do</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div className="right">
              <h1>
                <span>For your</span> Business
              </h1>
            </div>
          </div>
        </div>

        <div className="card-section">
          <div className="card-holder">
            <div className="card">
              <h1>Branding and Identity Design</h1>
              <p>
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div className="card">
              <h1>Website development and development</h1>
              <p>
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div className="card">
              <h1>Management systems for business</h1>
              <p>
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div className="card">
              <h1>E-Commerce online shops webapp</h1>
              <p>
                Our team of agency is a group of professionals focused on
                helping your brand grow{" "}
              </p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon bg-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-discover-container">
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>
        <div className="discover">
          <div className="info-side">
            <h1>
              <span>What</span> i can <span>do</span> <br />
              for your <span>Business</span>
            </h1>
            <p className="paragraph">
              In today’s digital world, a powerful online presence is key to
              business success. I specialize in creating custom websites that
              not only showcase your brand but also drive real results. From
              stunning designs to seamless functionality, I’ll deliver a
              tailored solution that enhances customer engagement, boosts
              conversions, and streamlines operations. Whether you're looking to
              launch a new site or upgrade an existing one, I can help transform
              your vision into a digital experience that sets you apart from the
              competition.
            </p>

            <div className="charles">
              <Image
                width={400}
                height={400}
                src="/images/passport.jpeg"
                loading="lazy"
                className="image"
                alt="image of the developer"
              ></Image>
              <label htmlFor="nothing">
                <p>
                  <span>Passionately Creating</span> wonderful designs:
                </p>
                <p>
                  <span>Unleashing</span> wonderful boundless creativity
                </p>
              </label>
            </div>
          </div>
          <div className="image-side">
            <Image
              width={900}
              height={1000}
              src="/images/developer.jpg"
              loading="lazy"
              className="big-image"
              alt="work image"
            ></Image>
          </div>
        </div>
      </div>

      <div>
        <Works />
      </div>
    </div>
  );
};

export default Home;
