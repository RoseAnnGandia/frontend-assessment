import React, { useEffect, useState } from "react";

export default function Exercise1() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="exercise1-container">
      <div className="container-banner">
        <img
          className="banner"
          src={
            !isMobile
              ? require("../assets/webBanner.jpg")
              : require("../assets/phoneBanner.png")
          }
          alt="cover"
        />

        <div className="overlay"></div>
        <div className="cover-text">
          <b style={{ fontSize: "40px" }}>Hello Developer!</b>
          <p style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div>
            <img
              className="card-image"
              src={require("../assets/cardImage.PNG")}
              alt="card"
            />
          </div>
          <div className="card-items">
            <p>
              Lorem ipsum, dolor sit amet, consectetur adipisicing elit, Ea
              totam distinctio, accusamus voluptas hic mollitia illo
              dignissimos? Dolorum accusamus distinctio dolor nemo officiis cum!
              Quisquam dolores assumenda facere natus veniam commodi quod
              ducimus dolorem. Facilis, quisquam.
            </p>
            <button className="card-button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div>
            <img
              className="card-image"
              src={require("../assets/cardImage.PNG")}
              alt="card"
            />
          </div>
          <div className="card-items">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              distinctio rem cum repudiandae consectetur modi a culpa,
              accusantium optio.
            </p>
            <button className="card-button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div>
            <img
              className="card-image"
              src={require("../assets/cardImage.PNG")}
              alt="card"
            />
          </div>
          <div className="card-items">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              harum repudiandae nam ratione accusamus laboriosam dolore numquam
              culpa facere explicabo possimus debitis earum aperiam at, corrupti
              veritatis maxime!
            </p>
            <button className="card-button">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
