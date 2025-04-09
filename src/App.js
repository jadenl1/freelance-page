import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

// Expertise Icon imports
import { IoIosApps } from "react-icons/io";
import { FaBrain, FaGlobe, FaCheck, FaRobot } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import FormPopup from "./components/FormPopup";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [popup, setPopup] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const pricingRef = useRef(null);

  // Expertise data array remains unchanged
  const expertise = [
    {
      title: "Full-Stack Development",
      description:
        "We create robust, scalable full-stack solutions using modern frameworks and technologies. Our experts craft both client and server-side code to ensure seamless integration.",
      icon: <IoIosApps />
    },
    {
      title: "Smart Automation",
      description:
        "We specialize in automating your business, enhancing efficiency and productivity through custom scripts and intelligent automatic decision making that understands your customer—effortlessly driving your business forward.",
      icon: <FaRobot />
    },
    {
      title: "User Interfaces",
      description:
        "Designing intuitive and captivating user interfaces that bring your ideas to life with a focus on simplicity, accessibility, and delightful user experiences.",
      icon: <IoLogoFigma />
    },
    {
      title: "Software Engineering",
      description:
        "Our software engineering approach ensures optimal performance, reliability, and maintainability for all your complex projects, leveraging best practices and cutting-edge technology.",
      icon: <PiBracketsCurlyBold />
    },
    {
      title: "Artificial Intelligence",
      description:
        "Leveraging the latest in AI, we deliver solutions that empower your business to make smarter decisions through data-driven insights and innovative machine learning models.",
      icon: <FaBrain />
    },
    {
      title: "Web Development",
      description:
        "We build dynamic, secure, and responsive web platforms that are tailor-made to meet your needs and provide an exceptional user experience.",
      icon: <FaGlobe />
    },
    {
      title: "API Development",
      description:
        "Our API development services ensure efficient and secure integration between systems, enabling smooth communication and data exchange across your applications.",
      icon: <TbApi />
    }
  ];

  const handleRowClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Carousel images
  const carouselImages = [
    require("./assets/gallery/1.png"),
    require("./assets/gallery/2.jpg"),
    require("./assets/gallery/3.png"),
    require("./assets/gallery/4.png")
  ];

  // Function to scroll to a given section smoothly
  const scrollToSection = (section) => {
    let ref = null;
    if (section === "home") ref = homeRef;
    else if (section === "about") ref = aboutRef;
    else if (section === "work") ref = workRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} setPopup={setPopup} />
      <div className="background" />

      {popup && <FormPopup setPopup={setPopup} />}

      <div className="title" ref={homeRef}>
        <h1 className="title-text">Teryn</h1>
        <p className="title-subtext">Watch your visions come to life.</p>
        <button className="title-button" onClick={() => setPopup(true)}>
          Get Started ➝
        </button>
      </div>

      <div className="content">
        <h2 className="content-title" ref={aboutRef}>
          At Teryn, we craft tailored software solutions with precision and dedication.
          Whether it’s web, desktop, or beyond, we handle it all—built just for you.
        </h2>

        {/* Expertise Table Section */}
        <div className="expertise-table">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`table-row-container ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleRowClick(index)}
            >
              <div className="table-row">
                <span>{item.title}</span>
                <span className="icon-wrapper">
                  <span className="icon-content">{item.icon}</span>
                  <span className="read-more">
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </span>
                </span>
              </div>
              <div className={`row-description ${expandedIndex === index ? "expanded" : ""}`}>
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="pricing-card">
          <h2>Flexible & Fair Pricing</h2>
          <p>
            At Teryn, we work very closely with our customers to create fully customizable pricing that fits your unique needs.
            Whether your project is small or large, our flexible approach ensures you get the best value and level of service.
          </p>
          <ul className="pricing-checklist">
            <li><FaCheck /> Complete top to bottom production</li>
            <li><FaCheck /> Full communication from start to end</li>
            <li><FaCheck /> Work directly with our team</li>
            <li><FaCheck /> Schedule meetings</li>
            <li><FaCheck /> Last moment requests</li>
            <li><FaCheck /> Production level software</li>
            <li><FaCheck /> No hidden fees</li>
          </ul>
        </div>

        {/* 3-Step Process Section */}
        <div className="process-section">
          <h2>We can do it all, or even just a step.</h2>
          <div className="process-container">
            <div className="process-circle">
              <p>Consultation & Discovery</p>
            </div>
            <div className="process-line"></div>
            <div className="process-circle">
              <p>Design & Development</p>
            </div>
            <div className="process-line"></div>
            <div className="process-circle">
              <p>Launch & Support</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {/* Reviews Section */}
        <div className="reviews-section">
        <div className="review">
            <div className="review-header">
                <div className="review-image" id="review-img-1"></div>
                <div className="review-details">
                    <h3>Rohan</h3>
                    <p className="review-subtitle">Startup CFO</p>
                </div>
            </div>
            <p className="review-quote">
            "Working with Teryn was fantastic! They totally understood our vibe and made the project a fun ride 😊. I’m impressed with every step!"
            </p>
        </div>
        <div className="review-separator"></div>
        <div className="review">
            <div className="review-header">
                <div className="review-image" id="review-img-2"></div>
                <div className="review-details">
                    <h3>Lisa</h3>
                    <p className="review-subtitle">Local Business Owner</p>
                </div>
            </div>
            <p className="review-quote">
            "Really made our online presence stand out! Super-friendly team kept us engaged through the whole process."
            </p>
        </div>
        <div className="review-separator"></div>
        <div className="review">
            <div className="review-header">
                <div className="review-image" id="review-img-3"></div>
                <div className="review-details">
                    <h3>Jason</h3>
                    <p className="review-subtitle">Entrepreneur</p>
                </div>
            </div>
            <p className="review-quote">
            "I felt like Teryn was not just a service but a tech savvy friend! Their creative solutions really got my startup buzzing."
            </p>
        </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel" ref={workRef}>
          <div className="carousel-track">
            {carouselImages.map((src, index) => (
              <img key={`img-${index}`} src={src} alt={`Gallery ${index + 1}`} />
            ))}
            {/* Duplicate images for smooth looping */}
            {carouselImages.map((src, index) => (
              <img key={`img-dup-${index}`} src={src} alt={`Gallery duplicate ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <h2 className="footer-text">Teryn</h2>
        <p className="footer-button" onClick={() => setPopup(true)}>
          Make Something Today ➝
        </p>
      </div>
    </>
  );
}

export default App;
