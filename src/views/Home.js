import React from "react";
import FetchingImageHome from "../components/FetchingData/FetchingImageHome";
import { NavLink } from "react-router-dom";
import imgPioneer1 from "../assets/imgPioneers/Margaret_Hamilton.jpg";
import imgPioneer2 from "../assets/imgPioneers/csm_Grace-Hoppe.jpg";
import imgPioneer3 from "../assets/imgPioneers/kathleenBooth.jpg";
import imgGroup1 from "../assets/imgGroups/heartofcode42.jpg";
import imgGroup2 from "../assets/imgGroups/logo-fuck-final.png";
import imgGroup3 from "../assets/imgGroups/logo-emblem-text_1.png";
import imgEvent from "../assets/imgEvents/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h2 id="headline-home">Welcome!</h2>
        <section className="home-section1-welcome">
          <FetchingImageHome />
          <div className="home-info-text">
            <p>
              Hi there! <br />
              Here you find some information about women/flinta* people in
              coding and on inclusive, feminist programming practices!
            </p>

            <p>
              <b>Best of all:</b> <br /> The idea is that this will be a
              collection where we all together can add new informations, so this
              will grow for more visibility! For that every list has a form
              somewhere where you can post your own feminist group, favorite
              pioneer or event! Please do so!
            </p>
          </div>
        </section>
        <section className="home-section2-all-sub-views">
          <div className="home-info-card-sub-views">
            <h2>Activist Groups</h2>
            {
              <div className="home-info-cards-img">
                <img
                  className="home-infocard-sub-img-top"
                  src={imgGroup1}
                  width="80%"
                  height="40%"
                  alt="Women in Programming"
                />
                <img
                  className="home-infocard-sub-img-bottom"
                  src={imgGroup2}
                  width="50%"
                  height="50%"
                  alt="Women in Programming"
                />
                <img
                  className="home-infocard-sub-img-bottom"
                  src={imgGroup3}
                  width="50%"
                  height="50%"
                  alt="Women in Programming"
                />
              </div>
            }
            <p>
              "activist groups & networks" shows you a list of feminist groups
              and networks working on social issues of digitalisation such as
              accessibility, active participation, sustainability and equity"
            </p>
            <NavLink className="nav-link" to="/groups">
              browse around!
            </NavLink>
          </div>
          <div className="home-info-card-sub-views">
            <h2>Women Pioneers</h2>
            <div className="home-info-cards-img">
              <img
                className="home-infocard-sub-img-top"
                src={imgPioneer2}
                width="95%"
                height="90%"
                alt="Hopper"
              />
              <img
                className="home-infocard-sub-img-bottom"
                src={imgPioneer1}
                width="45%"
                height="45%"
                alt="Hamilton"
              />
              <img
                className="home-infocard-sub-img-bottom"
                src={imgPioneer3}
                width="50%"
                height="45%"
                alt="Booth"
              />
            </div>

            <p>
              "pioneers" shows you a list of Women Pioneers in Computer Science
              and Programming
            </p>
            <NavLink className="nav-link" to="/pioneers">
              browse around!
            </NavLink>
          </div>
          <div className="home-info-card-sub-views">
            <h2>Events</h2>
            <img
              src={imgEvent}
              width="95%"
              height="40%"
              alt="large group of people sitting together in working atmosphere"
            />
            <p>
              "events" show you a list of events on topics of feminist
              perspectives on/in Programming for your widening your perspective
              and also networking with other interested people
            </p>
            <NavLink className="nav-link" to="/events">
              browse around!
            </NavLink>
          </div>
        </section>
        <div className="ankerlinks-container">
          <a className="ankerlinks" href="#headline-home">
            back to the top
          </a>
        </div>
      </div>
    </>
  );
}
