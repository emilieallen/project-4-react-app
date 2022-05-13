import React from "react"
import {useState} from "react";

function PictureCard(props) {
    

    return (
    <>
    <div className="column is-one-third">
        <div className="tile is-child card">
            <div className="card-image">
                <figure className="image ">
                    <img src={props.picture.pictureUrl}></img>
                </figure>
            </div>
        </div>
    </div>
    </>
    )
}

export default PictureCard