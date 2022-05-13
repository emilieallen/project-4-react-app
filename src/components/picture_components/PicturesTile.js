import React from "react"
import {useEffect, useState } from "react";
import { HEROKU_API_URL } from "../../config"
import PictureCard from "./PictureCard";


function PictureTile() {

    const accessToken = localStorage.getItem("accesstoken");
    const [pictureData, setPictures] = useState(undefined)

    useEffect(() => {
        const fetchPictures = async () => {
          const response = await fetch(`${HEROKU_API_URL}/pictures/`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setPictures(data);
          }
        };
        fetchPictures();
      }, []);
    
 
    if (!pictureData) {
        return <p>Pictures Loading...</p>
    }

    return (
    <>
    <div className="columns is-multiline is-vcentered">
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

export default PictureTile