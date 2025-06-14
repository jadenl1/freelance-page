import React, { useState } from "react";
import "./App.css";
import { IoIosApps } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";

import { FaBrain, FaGlobe, FaRobot } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";

import Navbar from "./components/Navbar";

import Popup from "./components/Popup";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [popup, setPopup] = useState(false);

const blobPositions = [
  "0% 0%",    // top-left
  "50% 0%",   // top-center
  "100% 0%",  // top-right
  "0% 100%",  // bottom-left
  "50% 100%", // bottom-center
  "100% 100%" // bottom-right
];

const reviews = [
  {
    name: "Sarah",
    company: "Local Business Owner",
    text:
      "The team at Teryn made our complex requirements feel simple. Their clear communication kept us informed at every stage."
  },
  {
    name: "David",
    company: "Startup CFO",
    text:
      "Teryn’s automation solution saved us hours each week and freed up our staff to focus on growth initiatives. Truly transformative."
  },
  {
    name: "Maria",
    company: "Entrepreneur",
    text:
      "From initial design to final deployment, Teryn was responsive and professional. The user interface they built receives compliments daily."
  },
  {
    name: "Alex",
    company: "Local Business Owner",
    text:
      "We appreciated Teryn’s hands-on approach and technical expertise. They delivered a reliable product that exceeded our expectations."
  },
  {
    name: "Jessica",
    company: "E-commerce Manager",
    text:
      "Working with Teryn felt effortless. They really listened to our needs and delivered a site that boosted our online sales within weeks."
  },
  {
    name: "Michael",
    company: "Healthcare Director",
    text:
      "Teryn’s attention to detail impressed us. Their custom dashboard streamlined our patient scheduling in ways we hadn’t imagined."
  },
];


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
        "We specialize in automating your business, enhancing efficiency and productivity through custom scripts and intelligent decision making that understands your customers—effortlessly driving your business forward.",
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

  const handleRowClick = (i) =>
    setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div className="App">
        <Navbar />

        {popup && <Popup setPopup={setPopup} />}

      <div className="section hero" id="hero">
        <div className="hero-content">
          <h1 className="main-title">
            Teryn
            <br />
            AI Solutions
          </h1>
          <p className="main-subtitle">
            Automated solutions tailored to your company's needs.
          </p>
          <button className="button is-primary" onClick={() => setPopup(true)}>Get Started</button>
        </div>
      </div>

      <div className="section quote">
        <h2 className="quote-text" id="services">
          At Teryn, we craft tailored software solutions with precision and
          dedication. Whether it’s web, desktop, or beyond, we handle it
          all—built just for you.
        </h2>
      </div>

      <div className="section features">
        <div className="expertise-table">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className={`table-row-container ${
                expandedIndex === idx ? "expanded" : ""
              }`}
              onClick={() => handleRowClick(idx)}
            >
              <div className="table-row">
                <span>{item.title}</span>
                <span className="icon-wrapper">
                  <span className="icon-content">{item.icon}</span>
                  <span className="read-more">
                    {expandedIndex === idx ? "Read Less" : "Read More"}
                  </span>
                </span>
              </div>
              <div
                className={`row-description ${
                  expandedIndex === idx ? "expanded" : ""
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

         <div className="section reviews-section">
        <h2 className="reviews-title" id="reviews">Don't just take our word for it.</h2>
        <p className="reviews-subtitle">
          No matter the size of your business or your industry, we have the
          expertise to help you succeed. Check out what our clients have to say
          about us.
        </p>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card"
              style={{
                backgroundImage: `radial-gradient(circle at ${
                  blobPositions[i % blobPositions.length]
                }, rgba(7, 143, 255, 0.2), transparent)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "150% 150%"
              }}
            >
              <div className="review-header">
                <h3 className="review-name">{r.name}</h3>
                <p className="review-company">{r.company}</p>
              </div>
              <p className="review-text">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="section pricing-section" id="pricing">
            <h2 className="reviews-title">Fair + Flexible Pricing.</h2>
            <p className="reviews-subtitle">
                Every business gets access to our full suite of services — no confusing tiers, no hidden fees. 
                We work closely with you to craft a custom quote that fits your goals, scope, and budget.
            </p>

            <div className="pricing-unified-card">
                <ul className="pricing-features">
                    <li><IoCheckmarkOutline /> Complete top-to-bottom production</li>
                    <li><IoCheckmarkOutline /> Full communication from start to finish</li>
                    <li><IoCheckmarkOutline /> Work directly with our engineering team</li>
                    <li><IoCheckmarkOutline /> On-demand meetings & updates</li>
                    <li><IoCheckmarkOutline /> Last-minute adjustments welcomed</li>
                    <li><IoCheckmarkOutline /> Enterprise-grade, production-level software</li>
                    <li><IoCheckmarkOutline /> No surprise fees — ever</li>
                </ul>
            </div>
        </div>

        <div className="section footer">
        <p className="footer-text">
          Teryn AI Solutions
        </p>
        <p className="footer-text">
          Designed & Developed by Teryn
        </p>
        </div>
    </div>
  );
}

export default App;
