//imports
import "../../assets/css/challenge.css"
import React, { useRef, useEffect, useState } from "react";

//imports components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer";

//import image
import Image from "../../assets/img/ImgUndraw.svg";

export default function Challenge() {

  //states
  const [photoLink, setPhotoLink] = useState("");
  const [photoAltDescription, setPhotoAltDescription] = useState("");
  const [photoUserName, setPhotoUserName] = useState("");
  const [photoUserLink, setPhotoUserLink] = useState("");

  const [photoAIDescription, setPhotoAIDescription] = useState("");

  function GetRandomPhoto() {

    var unsplashUrl = "https://api.unsplash.com/photos/random?orientation=squarish";

    fetch(unsplashUrl, {
      headers: {
        'Authorization': "Client-ID H5dQ6Tk1LLJ7Quc5orG1sBVrfjjnuHfOD7MCj18cRME"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.urls.regular + " " + data.alt_description + " " + data.user.name + " " + data.user.links.html);
        setPhotoLink(data.urls.regular);
        setPhotoAltDescription(data.alt_description);
        setPhotoUserName(data.user.name);
        setPhotoUserLink(data.user.links.html);
      })

  }



  function GetAIDescription() {
    console.log("olé" + photoLink)
    var azureAIUrl = "https://captioncreator.cognitiveservices.azure.com/vision/v3.2/describe?maxCandidates=1&language=en&model-version=latest";

    fetch(azureAIUrl, {
      method: 'POST',
      headers: {
        "Ocp-Apim-Subscription-Key": "c1bd3bd94cfe407f8d8dd3698de58fa9",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'url': photoLink })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhotoAIDescription(data.description.captions[0].text);
      })
  }

  useEffect(() =>{
    GetRandomPhoto();
  }, []);

  useEffect(() =>{
    GetAIDescription()
  }, [photoLink]);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="c-main">

          <section className="c-imgC">
            <img className="c-imgC__img" src={photoLink} alt="random photo" />
            <span>Photo by <a href={photoUserLink}> {photoUserName} </a> on <a href={photoLink}>Unsplash</a> </span>
          </section>

          <section className="c-quiz">
            <h1 className="c-quiz__title">Which description was AI generated?</h1>
            <button className="c-quiz__button">{photoAltDescription}</button>
            <hr className="c-quiz__line" />
            <button className="c-quiz__button">{photoAIDescription}</button>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}