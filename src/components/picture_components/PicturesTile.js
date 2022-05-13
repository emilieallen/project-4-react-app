import React from "react"
import {useEffect, useState } from "react";
import axios from "axios";
import { HEROKU_API_URL } from "../../config"


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
                    <div className="column is-one-third">
                        <div className="tile is-child card">
                            <div className="card-image">
                                <figure className="image ">
                                    <img src={picture.pictureUrl}></img>
                                </figure>
                            </div>
                        </div>
                    </div>
                )
                    )
                }

    </div>
    </>
    )
}

export default PictureTile