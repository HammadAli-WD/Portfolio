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
          <img className="d-block w-100 custom-img" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107688670/original/7ce92b3c60643b6e07c3f2a4f37f7fc8446616f6/create-a-full-stack-mobile-responsive-web-app-using-mern.png" alt="Third slide" />
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
