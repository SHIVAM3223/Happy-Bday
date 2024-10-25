import React, { useRef, useState } from "react";
import Envelope from "../Envelope/Envelope"; // Import the Envelope component
import "./Slider.css";

const Slider = () => {
  const slideRef = useRef(null);
  const [isEnvelopeVisible, setEnvelopeVisible] = useState(false); // State to manage envelope visibility

  const handleNext = () => {
    if (slideRef.current) {
      const firstItem = slideRef.current.children[0];
      slideRef.current.appendChild(firstItem);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lastItem =
        slideRef.current.children[slideRef.current.children.length - 1];
      slideRef.current.prepend(lastItem);
    }
  };

  const handleNotificationClick = () => {
    setEnvelopeVisible((prev) => !prev);
  };

  const images = [
    "./images/1.png",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
  ];

  const quotes = [
    "On this day, the world got a little brighter because you were born. Happy Birthday to the light of my life!",
    "Every year with you is a new chapter of happiness, love, and laughter. I can’t wait for what this year will bring us!",
    "Today, we celebrate you—your kindness, beauty, and all the love you bring into my life. Happy Birthday, my love!",
    "You are my dream come true, my love, my forever. Wishing you the happiest birthday filled with love and laughter!",
    "With you, every day feels like a gift. Here’s to celebrating your wonderful spirit today and every day after!",
    "Happy Birthday to the one who makes my heart skip a beat, every day. I’m so lucky to love you.",
    "You are the best part of my life, and I’m endlessly grateful for every moment with you. Happy Birthday, beautiful!",
    "Today is the perfect excuse to shower you with love, but honestly, I don’t need one. You deserve it every day!",
    "Happy Birthday to the one whose smile makes my world so much better. I’m in awe of you, always.",
    "No words can express how lucky I am to call you mine. Wishing you endless joy today and forever.",
    "Your laughter, your kindness, your love—all of it lights up my world. Happy Birthday to my everything.",
    "Thank you for filling my life with love, laughter, and endless joy. Here’s to many more birthdays together.",
    "The world is lucky to have you, and I’m even luckier to be the one who gets to love you. Happy Birthday, my queen.",
    "Just thinking of you makes my heart race; being with you makes me complete. Happy Birthday to my one and only.",
    "To the one who holds my heart, my hand, and my dreams—Happy Birthday, love. You mean everything to me.",
    "May this birthday bring you as much happiness as you’ve brought into my life. I love you, today and always.",
  ];

  const lines = [
    "Kon hai be Tu.....👀",
    "Mai husn pari, mai jane jhn, mai sb s hasi, mai sb s jvan......washing powder TEJUMA🗑️",
    "Ay hai mn kr rha kat lun is lazis ko!!!🥵",
    "Aee African k kalepan s takar ni lene k.....👧🏿",
    "Uff meri editing....hai koi mere jaisa aur🐒",
    "Ye rha mera masterpiece.....💩",
    "Mn ni lg rha to ek aur masterpeace delivered💩💩",
    "Ye lo kissi😘",
    "Muahhhh....💋",
    "Ni milega mera jaisa koi🫏",
    "Hehehehe.....iska to bda nikla😳😲",
    "Aree mai to yellow kali hun....🌻",
    "which one is the beautiful fool🫥",
    "Surajmukhi ~ surya wala fool🌻",
    "Aee smbhal k beta..👮🏿‍♀️",
    "Trying my luck🤞🏿",
  ];

  return (
    <div>
      <nav className="nav">
        <h3>
          Tejas<span>Manhas</span>
        </h3>
        <ul>
          <li className="active">Home</li>
          <li className="notification-icon" onClick={handleNotificationClick}>
            <i className="fa-solid fa-bell"></i>
          </li>
        </ul>
      </nav>
      <div className="slider-container">
        <div id="slide" ref={slideRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <div className="name">
                  Happy
                  <span> Birthday </span>
                </div>
                <div className="quote-container">
                  <div className="quote-bg"></div>
                  <p className="quote">{quotes[index]}</p>
                  <p className="quote">
                    ~ <em>{lines[index]}</em>
                  </p>
                </div>
                <button className="btn">My Cutie Pie</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left fa-2x"></i>
          </button>
          <button id="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right fa-2x"></i>
          </button>
        </div>
      </div>

      {isEnvelopeVisible && (
        <>
          {/* Dark overlay */}
          <div
            className="overlay"
            onClick={() => setEnvelopeVisible(false)}
          ></div>

          {/* Envelope popup */}
          <div
            className="envelope-popup"
            onClick={() => setEnvelopeVisible(false)}
          >
            <div
              className="envelope-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="envelope-overlay" />
              <Envelope />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
