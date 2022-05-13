import React from "react"
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { HEROKU_API_URL } from "../../config"
import PictureCard from "../picture_components/PictureCard";


function MyPicsPage() {

    const accessToken = localStorage.getItem("accesstoken");
    const [pictureData, setPictures] = useState(undefined)

    const navigate = useNavigate()

    function onClick(e) {
        e.preventDefault()
        navigate("/MyPics/Upload")
    }

    useEffect(() => {
        const fetchPictures = async () => {
          const response = await fetch(`${HEROKU_API_URL}/users/profile/`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setPictures(data.addedPicture);
          }
        };
        fetchPictures();
      }, []);
    
 
    if (!pictureData) {
        return <p>Pictures Loading...</p>
    }
    console.log(pictureData)
    return (
    <>
    <section className="hero is-light is-small">
        <div className="hero-body">
            <p className="title has-text-centered">My Pictures</p>
        </div>
        <div className="tag is-centered">
            <button className="button is-danger is-small m-2" onClick={onClick}>Upload a Pic</button>
        </div>
    </section>
    <div className="columns is-multiline is-vcentered m-5">
        {
            pictureData.map(
                picture => (
                        <PictureCard picture={picture}></PictureCard>
                    )
                )
            }
    </div>
    </>
    )
}

export default MyPicsPage