//imports
import "../../assets/css/landingpage.css"
import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//imports components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer";

//import image
import Image from "../../assets/img/ImgUndraw.svg"


export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="container">
        <div className="c-main">

          <section className="c-info">
            <h1 className="c-info__title">Are you ready for the “Is This AI?” challenge??</h1>
            <p className="c-info__text">The challenge consists in reading two captions for the shown image, your goal is to guess which description was made by an Artifical Intelligence</p>
            <button onClick={() => navigate("/challenge")} className="c-info__button">{"Let’s get started"}</button>
          </section>

          <section className="c-img">
            <img className="c-img__img" src={Image} alt="a girl illustration" />
          </section>

        </div>
      </main>
      <Footer/>
    </div>
  );
}