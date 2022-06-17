import React, { useRef, useEffect } from "react";
import "./HeroA.css";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import hero1 from "../../Assets/images/hero1.jpg";
import hero2 from "../../Assets/images/hero2.jpg";
import { FaArrowRight } from "react-icons/fa";

let tl = new TimelineLite({ delay: 0.8 });

const HeroA = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

    //starting Gasp implementation
  useEffect(() => {
    // Images Vars
    const hero1Image = images.firstElementChild;
    const hero2Image = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(hero1Image, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        hero1Image.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(hero2Image, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        hero2Image.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);
  //end of gasp

  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    We are <span className="hero-content-span">uShop</span>
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    We are your best option
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">for shopping furniture.</div>
                </div>
              </h1>
              <p>
              Here you will find all the furniture, decoration and garments
              you will ever need. We especialize on home and office furniture.
              Start decorating your spaces with the best brand you will ever find.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore Our Products
                  <div className="arrow-icon">
                    <FaArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={(el) => (images = el)} className="hero-images-inner">
              <div className="hero-image hero1">
                <img src={hero1} alt="hero1" />
              </div>
              <div className="hero-image hero2">
                <img src={hero2} alt="hero2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroA;
