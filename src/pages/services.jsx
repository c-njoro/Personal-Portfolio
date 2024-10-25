import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="main-services-component">
      <div className="page-state">
        <div className="line-through"></div>
        <Link href="/" className="home-link">
          Home{" "}
        </Link>
        <h4>/</h4>
        <p>Services</p>
      </div>

      <div className="header">
        <h1>
          <span>This is</span> what <br /> <span>I do</span> best
        </h1>

        <div className="btn">
          <button>
            <p>Read more</p>
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
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="services-container">
        <div className="services-list">
          <div className="left">
            <div className="animating-back">
              <div className="wheel"></div>
              <div className="wheel"></div>
            </div>
          </div>

          <div className="right">
            <div className="one-side">
              <div className="space-above"></div>
              <div className="service">
                <h1>Website Design and Development</h1>

                <p className="paragraph">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>creative</p>
                  <p>appealing</p>
                  <p>ui ux</p>
                  <p>fast navigation</p>
                </div>

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
              </div>
              <div className="service">
                <h1>WebApp Development</h1>

                <p className="paragraph">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>database</p>
                  <p>frontend</p>
                  <p>fast api</p>
                  <p>simple navigation</p>
                </div>

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
              </div>
            </div>

            <div className="one-side">
              <div className="service">
                <h1>Mobile App development</h1>

                <p className="paragraph">
                  My creativity and elegance is here to help you develop a
                  website for your brand to help you grow.
                </p>
                <div className="explanations">
                  <p>appealing</p>
                  <p>fast</p>
                  <p>database</p>
                  <p>smooth</p>
                </div>

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
              </div>
              <div className="service">
                <h1>System repair</h1>

                <p className="paragraph">
                  I can learn your code base to fix any isues you have been
                  having with it to restore your sysytem to 100% efficiency.
                </p>
                <div className="explanations">
                  <p>Node</p>
                  <p>Next & React</p>
                  <p>backend</p>
                  <p>All systems</p>
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impact-part">
        <div className="top">
          <p>
            looking to make your mark? We'll help you turn <br /> your project
            into a success
          </p>
          <div className="line-through"></div>
        </div>

        <div className="bottom">
          <div className="big-text">
            <h1>
              <span>Let's make an</span> impact{" "}
            </h1>
            <h1>
              <span>together. Ready</span> when you are
            </h1>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Services;
