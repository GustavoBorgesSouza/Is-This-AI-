//imports
import "../../assets/css/challenge.css"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faSpinner } from "@fortawesome/free-solid-svg-icons";


//imports components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer";


export default function Challenge() {

  //states
  const [photoReferralLink, setPhotoReferralLink] = useState("");

  const [photoLink, setPhotoLink] = useState("");

  const [photoAltDescription, setPhotoAltDescription] = useState("");
  const [photoUserName, setPhotoUserName] = useState("");
  const [photoUserLink, setPhotoUserLink] = useState("");

  const [photoAIDescription, setPhotoAIDescription] = useState("");

  const [points, setPoints] = useState(0);
  //boolean used to set the loading of requests and data
  const [isLoading, setIsLoading] = useState(false);
  //boolean used to shuffle the descriptions buttons order
  const [randomizer, setRandomizer] = useState(true);

  //function that will make a request to the Unsplash API to get a random photo
  function GetRandomPhoto() {
    setIsLoading(true);
    var unsplashUrl = "https://api.unsplash.com/photos/random?orientation=squarish";

    fetch(unsplashUrl, {
      headers: {
        'Authorization': "Client-ID H5dQ6Tk1LLJ7Quc5orG1sBVrfjjnuHfOD7MCj18cRME"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.urls.regular + " " + data.alt_description + " " + data.user.name + " " + data.user.links.html);
        setPhotoLink(data.urls.regular);
        setPhotoAltDescription(data.alt_description);
        setPhotoUserName(data.user.name);
        setPhotoUserLink(data.user.links.html);
        setPhotoReferralLink(data.links.html);
      })

  }


  //function that will make a request to the azure API, using their computer vision cognitive service to get an image description
  function GetAIDescription() {
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
        // console.log(data);
        setPhotoAIDescription(data.description.captions[0].text);
        setRandomizer(Math.random() < 0.5);
        setIsLoading(false);
      })
  }

  ///function that gives one point to the user, shuffle the buttons and get a random photo through the GetRandomPhoto() function
  function EarnPoint() {
    setPoints(points + 1);

    GetRandomPhoto();
    // console.log(`${points} points`)
  }

  //useEffect that will be triggered when the page loads, gets a random photo through the GetRandomPhoto() function
  useEffect(() => {
    GetRandomPhoto();
  }, []);

  //useEffect that will trigger when the link of the photo changes, therefore changing the AI description through the GetAIDescription() function
  useEffect(() => {
    GetAIDescription();
  }, [photoLink]);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="c-main">

          <section className="c-imgC">
            <img className="c-imgC__img" src={photoLink} alt={"Random photo: " + photoAltDescription + " or " + photoAIDescription} />
            <span className="c-img__referral">Photo by <a href={photoUserLink}> {photoUserName} </a> on <a href={photoReferralLink}>Unsplash</a> </span>
          </section>

          <section className="c-quiz">
            <h1 className="c-quiz__title">Which description was AI generated?</h1>

            {
              randomizer ? (
                <div className="c-quizRandom">
                  {
                    isLoading === false ? (
                      <button onClick={() => GetRandomPhoto()} className="c-quiz__button">{photoAltDescription}</button>
                    ) : (
                      <button disabled className="c-quiz__button"> <FontAwesomeIcon icon={faSpinner} spin /></button>
                    )
                  }

                  <hr className="c-quiz__line" />

                  {
                    isLoading === false ? (
                      <button onClick={() => EarnPoint()} className="c-quiz__button">{photoAIDescription}</button>
                    ) : (
                      <button disabled className="c-quiz__button"> <FontAwesomeIcon icon={faSpinner} spin /></button>
                    )
                  }
                </div>

              ) : (

                <div className="c-quizRandom">                  {
                  isLoading === false ? (
                    <button onClick={() => EarnPoint()} className="c-quiz__button">{photoAIDescription}</button>
                  ) : (
                    <button disabled className="c-quiz__button"> <FontAwesomeIcon icon={faSpinner} spin /></button>
                  )
                }

                  <hr className="c-quiz__line" />

                  {
                    isLoading === false ? (
                      <button onClick={() => GetRandomPhoto()} className="c-quiz__button">{photoAltDescription}</button>
                    ) : (
                      <button disabled className="c-quiz__button"> <FontAwesomeIcon icon={faSpinner} spin /></button>
                    )
                  }

                </div>
              )
            }

            {
              points === 1 ? (
                <p className="c-quizPoints">{points} point <FontAwesomeIcon icon={faFire} /> </p>
              ) : (
                <p className="c-quizPoints">{points} points <FontAwesomeIcon icon={faFire} /> </p>
              )
            }


          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}