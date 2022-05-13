import React from "react"
import {useState} from "react";

function PictureCard(props) {
    
    const [modalStatus, setModalStatus] = useState(false)

    function pictureOnClick(e) {
        e.preventDefault()
        setModalStatus(true)
    }

    function closeModal(e) {
        e.preventDefault()
        setModalStatus(false)
    }

    const active = modalStatus ? "is-active" : "";

    if (modalStatus) {
        return (
            <>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card has-background-light">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={props.picture.pictureUrl}></img>
                            </figure>
                        </div>
                        <div className="card-content has-text-centered p-2">
                            <p className="subtitle">{props.picture.name}</p>
                            <p>{props.picture.description}</p>
                        </div>
                        <footer className="card-footer ">
                            <p className="card-footer-item">{props.picture.location}</p>
                            <p className="card-footer-item">{props.picture.settings}</p>
                            <p className="card-footer-item">{props.picture.camera}</p>
                        </footer>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={(e) => closeModal(e)}></button>
            </div>
            </>
        )
    }

    return (
    <>
    <div className="column is-one-third">
        <div className="tile is-child card is-clickable" onClick={(e)=> pictureOnClick(e)}>
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