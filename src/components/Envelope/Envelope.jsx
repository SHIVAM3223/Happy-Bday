import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./Envelope.css"; // Assuming you have the relevant CSS here

// Register the GSAP plugin
gsap.registerPlugin(CSSRulePlugin);

const Envelope = () => {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const shadowRef = useRef(null);
  const [animations, setAnimations] = useState({ t1: null, t2: null });

  useEffect(() => {
    // Get the CSS rule for the envelope's ::before pseudo-element
    const flap = CSSRulePlugin.getRule(".envelope:before");

    // Timeline for the card opening animation
    const t1 = gsap.timeline({ paused: true });
    t1.to(flap, {
      duration: 0.5,
      cssRule: {
        rotateX: 180,
      },
    })
      .set(flap, {
        cssRule: {
          zIndex: 10,
        },
      })
      .to(letterRef.current, {
        translateY: -200,
        duration: 0.9,
        ease: "back.inOut(1.5)",
      })
      .set(letterRef.current, {
        zIndex: 40,
      })
      .to(letterRef.current, {
        duration: 0.7,
        ease: "back.out(0.4)",
        translateY: -5,
        translateZ: 250,
      });

    // Timeline for the shadow animation
    const t2 = gsap.timeline({ paused: true });
    t2.to(shadowRef.current, {
      delay: 1.4,
      width: 450,
      boxShadow: "-75px 150px 10px 5px #eeeef3",
      ease: "back.out(0.2)",
      duration: 0.7,
    });

    setAnimations({ t1, t2 });

    // Functions to control animation play and reverse
    const openCard = () => {
      t1.play();
      t2.play();
    };

    // Assign openCard function to envelope click
    const envelope = envelopeRef.current;
    if (envelope) {
      envelope.onclick = openCard;
    }

    // Return a cleanup function
    return () => {
      if (envelope) {
        envelope.onclick = null;
      }
    };
  }, []);

  const closeCard = (e) => {
    e.stopPropagation();
    if (animations.t1 && animations.t2) {
      animations.t1.reverse();
      animations.t2.reverse();
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="envelope" ref={envelopeRef}></div>
        <div className="letter" ref={letterRef}>
          <div className="body">
            <span className="close" onClick={closeCard}>
              x
            </span>
            <div className="message">I Love U❤️</div>
          </div>
        </div>
        <div className="shadow" ref={shadowRef}></div>
      </div>
    </div>
  );
};

export default Envelope;
