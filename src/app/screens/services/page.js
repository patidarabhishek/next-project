"use client";
import Image from "next/image";
import burger from "../../../../public/images/image1.jpg";
import pizza from "../../../../public/images/image3.jpg";
import icecream from "../../../../public/images/image4.jpg";
import "../../../../public/css/custom-css.css";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [selectImage, setSelectImage] = useState(burger);
  const handleCardClick = (image) => {
    setSelectImage(image);
  };
  return (
    <>
      <div className="page-body">
        <div className="modal" id="home-modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Image className="home-image" alt="image" src={selectImage} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="container d-flex align-items-center justify-content-center "
          style={{ height: "auto" }}
        >
          <div className="row w-100">
            <h1 className="text-center mt-5 text-white">
              Specials of the Restaurant
            </h1>
            <div
              className="row col-md-12 mx-auto d-flex"
              style={{ marginTop: "4rem", color: "#fff" }}
            >
              <div
                className="card  m-2 p-4 mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#home-modal"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => handleCardClick(burger)}
              >
                <Image className="home-image" alt="image" src={burger} />
                <div className="card-body">
                  <h5 className="card-title">Burger</h5>
                  <p className="card-text">
                    Burgers can be made with a variety of ingredients, including
                    tomatoes, onions, cheese, salad, dips, bacon, and
                    mayonnaise. But we can make it by lots of love.
                  </p>
                </div>
              </div>
              <div
                className="card  m-2 p-4 mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#home-modal"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => handleCardClick(pizza)}
              >
                <Image className="home-image" alt="image" src={pizza} />
                <div className="card-body">
                  <h5 className="card-title">Pizza</h5>
                  <p className="card-text">
                    Pizza is made with a flatbread base, tomato sauce or puree,
                    cheese, and other toppings. Common toppings include olives,
                    oregano, vegetables, sausages.
                  </p>
                </div>
              </div>
              <div
                className="card  m-2 p-4 mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#home-modal"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => handleCardClick(icecream)}
              >
                <Image className="home-image" alt="image" src={icecream} />
                <div className="card-body">
                  <h5 className="card-title">Malai Icecream</h5>
                  <p className="card-text">
                    Malai Ice cream is a frozen dessert made from milk or cream,
                    sugar, and flavorings. Its often churned or stirred until
                    smooth during the freezing process
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
