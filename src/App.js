import React, { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

// Expertise Icon imports
import { IoIosApps } from "react-icons/io";
import { FaBrain, FaGlobe } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaRobot } from "react-icons/fa";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);

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
          "We specialize in automating your business, enhancing efficiency and productivity through custom scripts and intelligent automatic decision making that understands your customer- effortlessly driving your business forward.",
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

  // Listen for scroll events to change the color scheme once user scrolled past 50vh (unchanged)
  useEffect(() => {
    const handleThemeChange = () => {
      if (window.scrollY > window.innerHeight / 2) {
        document.body.classList.add("new-theme");
      } else {
        document.body.classList.remove("new-theme");
      }
    };

    window.addEventListener("scroll", handleThemeChange);
    return () => window.removeEventListener("scroll", handleThemeChange);
  }, []);

  // Define the skills rows (the skills blob section)
  const skillsRows = useMemo(() => [
    ["React.JS", "Python"],
    ["Stripe", "Express", "ReactNative"],
    ["Firebase", "MongoDB", "Photoshop", "Illustrator"],
    ["Premiere", "Lightroom", "AfterEffects", "Unity"],
    ["AdobeXD", "Figma", "Google Cloud", "TensorFlow"],
    ["PyTorch", "Docker", "Flask", "C", "C#", "API", "C++"],
    ["Java", "R", "Github", "NodeJS", "Rust", "OCaml"],
    ["Ruby", "Kotlin", "Angular", "Tailwind", "NextJS"],
    ["SQL", "PostgreSQL", "MySQL"],
    ["And Much More."]
  ], []);

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
      <Navbar scrollToSection={scrollToSection} />
      <div className="background" />
      <div className="title" ref={homeRef}>
        <h1 className="title-text">Teryn</h1>
        <p className="title-subtext">See your visions come to life.</p>
        <button className="title-button">Get Started ➝</button>
      </div>
      <div className="content">
        <h2 className="content-title" ref={aboutRef}>
          At Teryn, we craft tailored software solutions with precision and dedication.
          Whether it’s web, desktop, or beyond, we handle it all—built just for you.
        </h2>
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

        {/* Skills Blob Section */}
        <div className="skills-blob">
          {skillsRows.map((row, rowIndex) => (
            <div key={rowIndex} className="skill-row">
              {row.map((skill, index) => (
                <span key={index} className="skill-word">
                  {skill}
                </span>
              ))}
            </div>
          ))}
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
        <p className="footer-button">Make Something Today ➝</p>
      </div>
    </>
  );
}

export default App;
