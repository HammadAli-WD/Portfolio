import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://content.techgig.com/thumb/msid-74548080,width-860,resizemode-4/4-essential-skills-every-NET-developer-must-possess.jpg?67629" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://s3-ap-southeast-1.amazonaws.com/djamblog/article-021117165728.png" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://content.nanobox.io/content/images/2017/11/heroku-to-azure.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
