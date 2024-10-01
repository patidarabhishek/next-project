"use client";
import { useState } from "react";
import "../../../../public/css/custom-css.css";
export default function Page() {
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  console.log(email);
  console.log(textArea);
  return (
    <>
    {/* <div style={{background:"rgb(245, 245, 245)"}}> */}
    <div>
      <div
        className=" d-flex align-items-center justify-content-center"
        style={{ height: "100vh"}}
      >
        <div className="row w-100">
          <div className="col-md-6 mx-auto border"  style={{background:"white"}}>
            <h1 className="text-center mt-5">Contact Us</h1>
            <div className="mb-3 mt-5">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Email 
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Entry any query
              </label>
              <textarea
                className="form-control"
                value={textArea}
                id="exampleFormControlTextarea1"
                placeholder="enter query"
                rows="3"
                onChange={(e) => {
                    setTextArea(e.target.value);
                  }}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-danger text-center w-100 mb-4">
                submit
              </button>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
