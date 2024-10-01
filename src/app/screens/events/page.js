"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../../../public/css/custom-css.css";

const Page = () => {
  const [events] = useState([
    {
      date: "12 Oct.",
      title: "Pizza Fest – Unlimited Pizza Extravaganza",
      description:
        "Join us for the ultimate Pizza Fest, where pizza lovers can indulge in a variety of unlimited gourmet pizzas. Featuring live music and fun activities for all ages, this event is perfect for family and friends to come together and enjoy delicious food!",
      location: "Location: Eat Junction – Main Dining Hall",
      highlight:
        "Event Highlights: Unlimited pizza for just $15 ,Live performance by local band The Midnight Notes, Pizza-eating contest with exciting prizes  . Reserve your table today and don't miss out on a slice of fun!",
    },
    {
      date: "14 Oct",
      title: "Live Music Night – Every Friday",
      description:
        "Enjoy a cozy evening with great food and live music. Every Friday, we invite talented local artists to perform, setting the perfect vibe for a relaxing dinner. Make sure to bring your friends and family for a night of good food and great tunes.",
      location: "Location: Eat Junction – Outdoor Patio",
      highlight:
        "Event Highlights: Live performances by local bands and musicians, 10% off on all drinks during the event, Special music-themed cocktail menu",
    },
    {
      date: "31 Dec",
      title: "New Year's Eve Party – Celebrate with Us!",
      description:
        "Ring in the New Year with style at Eat Junction! We are hosting a glamorous New Year's Eve party with a multi-course meal, live DJ, and a champagne toast at midnight. Bring your friends and family for a night to remember.",
      location: "Location: Eat Junction – VIP Hall",
      highlight:
        "Event Highlights: Multi-course gourmet meal with special New Year’s Eve dishes, DJ and dance floor, Midnight champagne toast, Exclusive New Year’s countdown celebration",
    },
  ]);

  return (
    <section className="events-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Side - Paragraph Section */}
          <div className="col-lg-6 text-white d-flex">
            <div style={{ backgroundColor: "", marginBottom: "2rem" }}>
              <h2
                className="mb-4"
                style={{ fontWeight: "700", letterSpacing: "0.1rem" }}
              >
                Events and Shows
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* Right Side - Cards Section */}
          {/* <div className="col-lg-6">
            <div className="row">
              {events.map((event, index) => (
                <div className="col-lg-12 col-md-6 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body d-flex justify-content-between">
                      Left side - Date
                      <div className="left-content text-left m-5 text-align-center">
                        <h2 className="card-title text-danger">{event.date}</h2>
                      </div>

                      Right side - Description
                      <div className="right-content text-right mt-4">
                        <h6 className="card-subtitle mb-2 text-muted">
                          {event.title}
                        </h6>
                        <p className="card-text">{event.description}</p>
                        <Link href="/event-details">
                          <Link href='' className="btn btn-danger">View Details</Link>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="col-lg-6">
            {events.map((event, index) => (
              <div key={index}>
                <div className="d-flex event-card">
                  <div className="event-card-date">
                    <div>
                      <h4>{event.date}</h4>
                    </div>
                  </div>
                  <div className="event-card-detail">
                    <div>
                      <h6 style={{ color: "red" }}>{event.title}</h6>
                      <p>{event.location}</p>
                      <Link href="/event-details">
                        <Link href="" className="btn btn-danger">
                          View Details
                        </Link>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
