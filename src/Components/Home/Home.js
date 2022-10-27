import { useState } from "react";
import MyLink from "../MyLink/MyLink";

import myImg from "../../assets/img1.jpg";
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";

const Home = () => {
  const hidden = true;
  return (
    <div className="app">
      <div className="profile">
        <figure className="profile__img--box">
          <img id="profile__img" src={myImg} alt="OjerindeJoel" />
        </figure>
        <p id="twitter">Joel_Ojerinde</p>
        <p id="slack">{hidden ? "" : "Ojerinde Joel"}</p>
        <div className="profile__links">
          <MyLink id="twitter__link" to="https://twitter.com/Joel_Ojerinde">
            Twitter
          </MyLink>
          <MyLink id="btn__zuri" to="https://training.zuri.team/">
            Zuri Team
          </MyLink>
          <MyLink
            id="books"
            to="http://books.zuri.team"
            title="Get detailed and self explanatory design and coding books here"
          >
            Zuri Books
          </MyLink>
          <MyLink
            id="book__python"
            to="https://books.zuri.team/python-for-beginners?ref_id=victorojerinde"
            title="Get Python book for beginner"
          >
            Python Books
          </MyLink>
          <MyLink
            id="pitch"
            to="https://background.zuri.team"
            title="Hire us to do the background check on coders"
          >
            Background Check for Coders
          </MyLink>
          <MyLink
            id="book__design"
            to="https://books.zuri.team/design-rules"
            title="Get a design book for free before it is too late"
          >
            Design Books
          </MyLink>
        </div>
        <div className="logo__box">
          <img src={slack} alt="Slack" className="logo__img" />
          <img src={github} alt="GitHub" className="logo__img" />
        </div>
      </div>
      <div className="footer">
        <h2>
          Zuri<span>.</span>Internship
        </h2>
        <p>HNG Internship 9 Frontend Task</p>
        <img
          src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1"
          alt="HNG"
        />
      </div>
    </div>
  );
};
export default Home;
