import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [ham, setHam] = useState("unclicked");
  const [menuClass, setMenuClass] = useState("hide");
  const router = useRouter();

  const openMenu = () => {
    const nav = document.getElementById("nav");
    if (ham == "unclicked") {
      setHam("clicked");
      setMenuClass("menu-show");
      nav.classList.add("give-black-bg");
    } else {
      setHam("unclicked");
      setMenuClass("hide");
      nav.classList.remove("give-black-bg");
    }
  };

  //a use effect to listen when page changes to close the menu automatically
  useEffect(() => {
    const handleRouteChange = () => {
      setHam("unclicked");
      setMenuClass("hide");
      nav.classList.remove("give-black-bg");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="header-page">
      <div className="main-header-component" id="nav">
        <p>C.</p>
        <div className={`${ham}`} onClick={openMenu}></div>
      </div>

      <div className={`${menuClass}`}>
        <div className={`menu-container`}>
          <div className="links-side">
            <Link className="a" href="/services">
              Homepage
            </Link>
            <Link className="a" href="/services">
              Portfolio
            </Link>
            <Link className="a" href="/services">
              Services
            </Link>
            <Link className="a" href="/services">
              Newsletter
            </Link>
            <Link className="a" href="/services">
              Other Pages
            </Link>
          </div>

          <div className="footer-like-side">
            <div className="part">
              <h1>Projects</h1>
              <p>Websites</p>
              <p>Web Apps</p>
              <p>Mobile Apps</p>
              <p>Stand alone app</p>
              <p>Shopify Web</p>
              <p>Ussd codes</p>
            </div>

            <div className="part">
              <h1>Useful Links</h1>
              <p>Privacy policy</p>
              <p>Terms and Conditions</p>
              <p>Cookie Policy</p>
              <p>Careers</p>
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
      </div>
    </div>
  );
};

export default Header;
