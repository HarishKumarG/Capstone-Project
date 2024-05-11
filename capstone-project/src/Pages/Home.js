import React from "react";
import "./Home.css";
import headerimg from "./image.png";
import image from "./Lemonchick.png";
import image1 from "./Lemonsalmon.png";
import image2 from "./lemon dessert.jpg";
import person1 from "./person1.png";
import person2 from "./person2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="Home-layout">
        <div className="Home">
          <div className="Home-content">
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
              Where every bite is a burst of freshness! Indulge in our vibrant
              menu crafted with locally sourced ingredients, showcasing the
              essence of seasonal flavours.
            </p>
          </div>
          <div className="Home-image">
            <img src={headerimg} alt="" />
          </div>
        </div>
        <button>
          <Link to="/book">Book Table</Link>
        </button>
      </div>
      <div className="Body">
        <div className="Body-content">
          <h2>Try out our special menu</h2>
        </div>

        <div className="Body-menu">
          <div className="Body-menu-list">
            <img src={image} alt="" />
            <h3>Lemon Zest Chicken</h3>
            <p>
              Tender grilled chicken marinated in zesty lemon, served with a
              side of herb-infused quinoa for a refreshing twist on a classic
              favourite.
            </p>
            <button>Order now!</button>
          </div>

          <div className="Body-menu-list">
            <img src={image1} alt="" />
            <h3>Citrus Infused Salmon</h3>
            <p>
              Delicate salmon fillet marinated in a tangy citrus blend, served
              with a side of seasonal vegetables for a refreshing and satisfying
              meal.
            </p>
            <button>Order now!</button>
          </div>

          <div className="Body-menu-list">
            <img src={image2} alt="" />
            <h3>Lemon Cheesecake</h3>
            <p>
              Creamy cheesecake infused with vibrant lemon zest, topped with a
              luscious raspberry compote and a delicate lemon glaze.{" "}
            </p>
            <button>Order now!</button>
          </div>
        </div>
        <p id="quote">lemon-infused delights for you!</p>
      </div>

      <div className="Review-section">
        <h3>REVIEWS</h3>
        <div className="Review-cards">
          <div className="Review">
            <div className="Review-content">
              <img src={person1} alt="" />
              <div className="Review-details">
                <h3>Andrew</h3>
                <h4>4.2 ⭐️</h4>
              </div>
            </div>
            <div className="Review-para">
              <p>
                "Absolutely loved the freshness of every bite at Little Lemon!
                From the tangy salmon to the zesty cheesecake, it was a
                delightful culinary journey."
              </p>
            </div>
          </div>

          <div className="Review">
            <div className="Review-content">
              <img src={person2} alt="" />
              <div className="Review-details">
                <h3>Julie</h3>
                <h4>4.7 ⭐️</h4>
              </div>
            </div>
            <div className="Review-para">
              <p>
                "Little Lemon exceeded my expectations with their vibrant
                flavors and impeccable service. The lemon-infused dishes were a
                refreshing treat, and I can't wait to come back!"
              </p>
            </div>
          </div>
        </div>
        <button>Review our restaurant!</button>
      </div>
    </>
  );
}

export default Home;
