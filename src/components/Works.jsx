import { motion } from "framer-motion";
import Image from "next/image";

const Works = () => {
  return (
    <div className="main-works-container">
      <div className="animating-back">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>

      <div className="my-work">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="images-side"
        >
          <div className="images-holder">
            <div className="one-image">
              <Image
                width={900}
                height={1000}
                src="https://images.pexels.com/photos/7172858/pexels-photo-7172858.jpeg"
                loading="lazy"
                className="big-image"
                alt="work image"
              ></Image>
              <p>Name of work</p>
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

            <div className="one-image">
              <p>Name of work</p>
              <Image
                width={900}
                height={1000}
                src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg"
                loading="lazy"
                className="big-image"
                alt="work image"
              ></Image>
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
          <div className="images-holder">
            <p>Some of Charles&apos; great works</p>

            <div className="one-image">
              <Image
                width={900}
                height={1000}
                src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
                loading="lazy"
                className="big-image"
                alt="work image"
              ></Image>
              <p>Name of work</p>
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

            <div className="one-image">
              <Image
                width={900}
                height={1000}
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                loading="lazy"
                className="big-image"
                alt="work image"
              ></Image>
              <p>Name of work</p>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="info-side"
        >
          <h1>
            view <br /> my work{" "}
          </h1>
          <p>
            Here you&apos;ll find a selection of projects showcasing my skills
            in full-stack development, UI/UX design, and creative
            problem-solving. From building robust web applications to crafting
            visually engaging interfaces, each project reflects my passion for
            creating seamless digital experiences. Explore the details to see
            how I bring ideas to life through code.
          </p>
          <button>
            <p>Read more</p>
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
          <h2>
            I <span>deliver</span> <br /> exceptional <span>results</span>.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
