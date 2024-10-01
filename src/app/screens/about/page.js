"use client";
import Image from "next/image";
import burger from "../../../../public/images/image1.jpg";
import { useState } from "react";
import "../../../../public/css/custom-css.css";

export default function Page() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="page-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center mt-5 text-white">About Us</h1>
              <div
                className="card mt-4  m-2 p-4 pb-2 mx-auto about-card"
                // style={{ width: "60rem" }}
              >
                <div className="card-body">
                  <p className="card-text">
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Welcome to Eat Junction,{" "}
                    </span>
                    where passion for food meets a love for hospitality! Our
                    story began with a simple idea: to create a place where
                    people can enjoy fresh, delicious meals in a warm and
                    welcoming environment. From our humble beginnings to
                    becoming a cherished part of the community, we have always
                    believed in the magic that good food can bring to the table.{" "}
                    <br />
                    <br />
                    At Eat Junction, we pride ourselves on using only the
                    freshest ingredients sourced locally whenever possible. Our
                    chefs bring a creative touch to every dish, blending
                    traditional recipes with modern twists, ensuring that every
                    bite is an experience. Whether you are here for a casual
                    meal, a family celebration, or a special occasion, we strive
                    to make every visit memorable.
                    <br />
                    <br />
                    {showMore && (
                      <>
                        <span
                          style={{
                            fontSize: "22px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Our Philosophy:
                        </span>
                        <br />
                        <br />
                        <strong> 1. Fresh Ingredients:</strong>
                        We believe that great food starts with great
                        ingredients. Thats why we prioritize quality and
                        freshness in everything we serve. <br /> <br />
                        <strong>2. Community-Driven:</strong>
                        We’re more than just a restaurant—we’re part of the
                        community. We love serving our neighbors and supporting
                        local farmers and suppliers. <br /> <br />
                        <strong>3. Flavor with Heart:</strong>
                        Our chefs are dedicated to bringing you dishes that not
                        only taste good but feel like home. From hearty comfort
                        food to health-conscious options, there’s something for
                        everyone. <br /> <br />
                        <strong>4. Unforgettable Experience:</strong>
                        Your dining experience is our top priority. Our team is
                        here to provide you with excellent service, whether you
                        are here for a quick lunch or an evening to remember.
                        <br />
                        <br />
                        <span
                          style={{
                            fontSize: "22px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Our Menu:
                        </span>
                        <br />
                        Our menu is a reflection of our love for diverse,
                        flavorful cuisine. Whether you’re craving classic
                        burgers, savory pastas, or fresh salads, you’ll find
                        something that suits your taste. We also offer a range
                        of vegetarian and vegan options, ensuring that every
                        guest feels right at home.
                        <br />
                        <br />
                        
                         At <strong>Eat Junction,</strong> every meal
                        is made with care, and every guest is welcomed as part
                        of our extended family. Come dine with us, and let us
                        serve you the flavors you love with the warmth you
                        deserve.
                      </>
                    )}
                    <button
                      className="btn btn-danger mt-3 d-flex ms-auto"
                      onClick={toggleShowMore}
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
