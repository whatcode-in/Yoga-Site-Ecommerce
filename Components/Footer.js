import React from "react";
// import styles from "../styles/Footer.module.css";
import Link from "next/link";
// import FontAwesomeIcon  from '@fortawesome/react-fontawesome';

import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="pageSection footerSection m-0">
      <div className="container">
        <div className="footerListBoxWrapper">
          <div className="footerListBox">
            <div className="footerListHolder">
              <Link
                href="https://yoga-site-six.vercel.app/our-story"
                className="no-underline "
              >
                <p className="hover:text-white footerListHead">OUR STORY</p>
              </Link>
            </div>

            <div className="footerListHolder">
              <Link
                href="https://yoga-site-six.vercel.app/the-centre"
                className="no-underline "
              >
                <p className="hover:text-white footerListHead">THE CENTRE</p>
              </Link>
            </div>

            <div className="footerListHolder">
              <Link
                href="https://yoga-site-six.vercel.app/wellness-package"
                className="no-underline "
              >
                <p className="hover:text-white footerListHead">
                  WELLNESS PROGRAMS
                </p>
              </Link>
            </div>
            <div className="footerListHolder">
              <Link
                href="https://yoga-site-six.vercel.app/contact-us"
                className="no-underline "
              >
                <p className="hover:text-white footerListHead">CONTACT US</p>
              </Link>
            </div>
            <div className="footerListHolder">
              <Link
                href="https://yoga-site-six.vercel.app/wellness-cuisine"
                className="no-underline "
              >
                <p className="hover:text-white footerListHead">
                  WELLNESS CUISINE
                </p>
              </Link>
            </div>
          </div>

          <div className="footerListBox">
            <div className="footerListHolder text-center">
              <p className="footerListHead">Social Links</p>
            </div>
            <div className="footer-icon-container">
              {/* <FontAwesomeIcon
                                icon={faInstagram}
                                className="footer-icon w-10"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="footer-icon w-10"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="footer-icon w-10"
                            ></FontAwesomeIcon> */}
            </div>
          </div>
        </div>

        <div className="flexEB copyWriteBlock">
          <p className="copyWriteText">© Copyright 2020. All rights reserved</p>
          <div>
            <p className="addressText">MAVAVIDA</p>
            <p className="addressText">Manilva 28960 and Sotogrande 11310</p>
            <p className="addressText">Cadiz and Malaga</p>
            <p className="addressText">
              <a
                className="addressLink"
                href="mailto:reservations@atmantan.com"
              >
                info@mavavida.com , mava@mavavida.com
              </a>{" "}
              |{" "}
              <a className="addressLink" href="tel:+912066766666">
                +34 685 161 896
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
