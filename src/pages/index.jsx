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
        <video autoPlay loop muted className="bg-video">
          <source src="/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div
          initial={{ opacity: 0, y: -250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="info"
        >
          <div className="w-full h-max">
            <h1 className="info-h">
              Hello, am <span>Charles</span>.
            </h1>
          </div>
          <div className="w-full h-max">
            <h1 className="info-h">
              <span>Software </span>Engineer
            </h1>
          </div>
          <div className="w-full h-max">
            <p className="more">
              A Full-Stack Developer dedicated to creating professional,
              high-performance websites for businesses. Whether you need an
              online presence or a custom solution, I’m here to turn your ideas
              into reality.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="quick-action"
          >
            <button className="home-button">
              <p className="button-p">What i do</p>
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

            <button className="home-button">
              <p className="button-p">View works</p>
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
          </motion.div>
        </motion.div>
      </div>

      <div className="about-me-container">
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>

        <div className="my-info ">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="image-side"
          >
            <div className="w-full h-max">
              <Image
                alt="charles image"
                width={700}
                height={700}
                src="/images/passport.jpeg"
                loading="lazy"
                className="big-image"
              ></Image>
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
              className="links"
            >
              <a
                href="http://www.linkedin.com/in/charles-njoroge-063b0626a"
                target="_blank"
                rel="noopener noreferrer"
                className="one-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/c-njoro"
                target="_blank"
                rel="noopener noreferrer"
                className="one-link"
              >
                <FiGithub />
              </a>

              <a
                href="https://github.com/c-njoro"
                target="_blank"
                rel="noopener noreferrer"
                className="one-link"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://github.com/c-njoro"
                target="_blank"
                rel="noopener noreferrer"
                className="one-link"
              >
                <FaInstagram />
              </a>
            </motion.div>
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
            className="info-side"
          >
            <div className="w-full h-max">
              <h1 className="info-side-h">About Me</h1>
            </div>
            <div className="w-full h-max">
              <p className="long-p">
                I am an experienced full-stack developer with a proven track
                record of delivering high-quality, scalable solutions tailored
                to meet business needs. I specialize in creating robust websites
                and web applications that provide seamless user experiences and
                drive efficiency. Whether you need a dynamic front-end or a
                powerful back-end, I bring a results-driven approach to every
                project, ensuring that your business achieves its digital goals
                with innovative and reliable solutions.
              </p>
            </div>
            <div className="w-full h-max">
              <h2 className="info-side-h2">Expertise:</h2>
            </div>

            <div className="skills">
              <p className="one-skill">JavaScript</p>
              <p className="one-skill">React.js</p>
              <p className="one-skill">Next.js</p>
              <p className="one-skill">Node.js</p>
              <p className="one-skill">MongoDB</p>
              <p className="one-skill">UI/UX Design</p>
              <p className="one-skill">Tailwind CSS</p>
              <p className="one-skill">Express.js</p>
              <p className="one-skill">WordPress</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="main-ideas-container">
        <video autoPlay loop muted className="bg-video">
          <source src="/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="intro">
          <div>
            <p className="intro-p">
              <span>Professional focused on helping your brand </span>
              <span>grow and move forward</span>
            </p>
          </div>

          <div className="line-through"></div>
        </div>

        <div className="head-section">
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="one-block"
          >
            <div className="left">
              <button className="left-button"></button>
            </div>
            <div className="right">
              <h1 className="right-h">
                <span>Unique</span> Ideas
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="one-block"
          >
            <div className="left">
              <button className="left-button">
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="card-section"
        >
          <div className="card-holder">
            <div className="card">
              <div className="w-full h-max">
                <h1 className="card-h">Branding and Identity Design</h1>
              </div>
              <div className="w-full h-max">
                <p className="card-p">
                  Our team of agency is a group of professionals focused on
                  helping your brand grow{" "}
                </p>
              </div>
              <div className="w-full h-max">
                <button className="card-button">
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

            <div className="card">
              <div className="w-full h-max">
                <h1 className="card-h">Website design and development</h1>
              </div>
              <div className="w-full h-max">
                <p className="card-p">
                  Our team of agency is a group of professionals focused on
                  helping your brand grow{" "}
                </p>
              </div>
              <div className="w-full h-max">
                <button className="card-button">
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

            <div className="card">
              <div className="w-full h-max">
                <h1 className="card-h">Management system for your business</h1>
              </div>
              <div className="w-full h-max">
                <p className="card-p">
                  Our team of agency is a group of professionals focused on
                  helping your brand grow{" "}
                </p>
              </div>
              <div className="w-full h-max">
                <button className="card-button">
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

            <div className="card">
              <div className="w-full h-max">
                <h1 className="card-h">Shopify online shops</h1>
              </div>
              <div className="w-full h-max">
                <p className="card-p">
                  Our team of agency is a group of professionals focused on
                  helping your brand grow{" "}
                </p>
              </div>
              <div className="w-full h-max">
                <button className="card-button">
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
        </motion.div>
      </div>

      <div className="main-discover-container">
        <div className="animating-back">
          <div className="wheel"></div>
          <div className="wheel"></div>
        </div>
        <div className="discover">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="info-side"
          >
            <div className="w-full h-max">
              {" "}
              <h1 className="info-side-h">
                <span>What</span> i can <span>do</span> <br />
                for your <span>Business</span>
              </h1>
            </div>
            <div className="w-full h-max">
              <p className="paragraph">
                In today&apos;s digital world, a powerful online presence is key
                to business success. I specialize in creating custom websites
                that not only showcase your brand but also drive real results.
                From stunning designs to seamless functionality, I&apos;ll
                deliver a tailored solution that enhances customer engagement,
                boosts conversions, and streamlines operations. Whether
                you&apos;re looking to launch a new site or upgrade an existing
                one, I can help transform your vision into a digital experience
                that sets you apart from the competition.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
              }}
              className="charles"
            >
              <div className="w-full h-max">
                <Image
                  width={400}
                  height={400}
                  src="/images/passport.jpeg"
                  loading="lazy"
                  className="image"
                  alt="image of the developer"
                ></Image>
              </div>

              <div className="label">
                <p className="label-p">
                  <span>Passionately Creating</span> wonderful designs:
                </p>
                <p className="label-p">
                  <span>Unleashing</span> wonderful boundless creativity
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="image-side"
          >
            <Image
              width={900}
              height={1000}
              src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg"
              loading="lazy"
              className="big-image"
              alt="work image"
            ></Image>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-max">
        <Works />
      </div>
    </div>
  );
};

export default Home;
