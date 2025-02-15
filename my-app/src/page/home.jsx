import React, { useRef, useEffect } from "react";
import "../style/home.scss";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import naruto from "../img/naruto.jpg";
import blech from "../img/blech.jpg";
import jjk from "../img/jjk.jpg";
import onepice from "../img/onepice.jpg";
import samuray from "../img/samuray.jpg";
import oshino from "../img/oshino.jpg";

function Home() {
  const sliderRef = useRef();

  const handleActivate = (direction) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(".item");

    if (direction === "next") {
      slider.append(items[0]);
    } else if (direction === "prev") {
      slider.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleActivate("next");
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ul className="slider" ref={sliderRef}>
        <li
          className="item"
          style={{
            backgroundImage: `url(${naruto})`,
          }}
        >
          <div className="content">
            <h2 className="title">"Lossless Youths"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: `url(${onepice})`,
          }}
        >
          <div className="content">
            <h2 className="title">"Estrange Bond"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: `url(${jjk})`,
          }}
        >
          <div className="content">
            <h2 className="title">"The Gate Keeper"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: `url(${blech})`,
          }}
        >
          <div className="content">
            <h2 className="title">"Last Trace Of Us"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: `url(${samuray})`,
          }}
        >
          <div className="content">
            <h2 className="title">"Urban Decay"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: `url(${oshino})`,
          }}
        >
          <div className="content">
            <h2 className="title">"The Migration"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum,
              iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Tomosha qilish</button>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={() => handleActivate("prev")}>
          <IoArrowBackOutline size={24} />
        </button>
        <button className="btn next" onClick={() => handleActivate("next")}>
          <IoArrowForwardOutline size={24} />
        </button>
      </nav>
    </>
  );
}

export default Home;