import "./Home.css";
import "./Slider.css";
import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      <img src={props.img} alt="Tile 1" />
      <div className="text">
        <h1>{props.heading}</h1>
        <h2 className="animate-text">{props.event}</h2>
        <p className="animate-text">{props.description}</p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const TileGallery = () => {
  return (
    <div className="wrap">
      <div className="tile-gallery">
        <Tile
          img="./imgs/theme.jpeg"
          heading="Theme Reveal"
          event="Kaleidoscope of Dreams"
          description=""
        />
        <Tile
          img="./imgs/adventure.JPG"
          heading="Adventure Day"
          event="Adventure Day"
          description=""
        />
        <Tile
          img="./imgs/panel.jpeg"
          heading="Panel Reveal"
          event="Kaleidoscope of Echoes"
          description=""
        />
        <Tile
          img="./imgs/panel2.jpeg"
          heading="Panel Reveal"
          event="Kaleidoscope of Echoes"
          description=""
        />
        <Tile
          img="./imgs/lights1.jpeg"
          heading="Cultural event"
          event="Kaleidoscope of Lights"
          description=""
        />
        <Tile
          img="./imgs/lights2.jpeg"
          heading=" Cultural event"
          event="Kaleidoscope of Lights"
          description=""
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home--div">
          <img className="logo" src="./logo2.png" alt="" />
          <div className="title-div">
            <h1 className="title">SAPTRANGA</h1>
          </div>
        </div>
      </div>
      <div className="gallery">
        <TileGallery />
      </div>
      <div className="timeline">
        <h1 className="timeline-title">TIMELINE</h1>
        <img src="./Timelineweb.png" alt="" />
      </div>
    </>
  );
}
