import React from "react"
import {useState} from "react";

function MainPage() {

    const [modalStatus, setModalStatus] = useState(false)

    function pictureOnClick(e) {
        e.preventDefault()
        setModalStatus(true)
    }

    function closeModal(e) {
        e.preventDefault()
        setModalStatus(false)
    }

    console.log(modalStatus)

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
                                <img src="https://i.ibb.co/9vF6XQT/ED681814-7-AD9-47-FC-AF76-4-EDBB212-EDB0-1-201-a.jpg"></img>
                            </figure>
                        </div>
                        <div className="card-content has-text-centered p-2">
                            <p className="subtitle">This is a title</p>
                            <p>This is a description</p>
                        </div>
                        <footer className="card-footer ">
                            <p className="card-footer-item">Location</p>
                            <p className="card-footer-item">Settings</p>
                            <p className="card-footer-item">Camera</p>
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
    <section className="hero is-light is-small">
        <div className="hero-body">
            <p className="has-text-centered">Pick a <span className="has-text-danger-dark">Theme</span></p>
        </div>
        <div className="tags is-centered are-medium">
            <a className="tag has-text-danger-dark has-background-danger-light">All</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Night</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Architecture</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Urban</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Landscape</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Portrait</a>
            <a className="tag has-text-danger-dark has-background-danger-light">Other</a>
        </div>
    </section>
    <section className="m-5">
        <div className="tile is-ancestor">
            <div className="tile is-parent is-4 is-clickable" onClick={(e)=> pictureOnClick(e)}>
                <div className="tile is-child card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://i.ibb.co/9vF6XQT/ED681814-7-AD9-47-FC-AF76-4-EDBB212-EDB0-1-201-a.jpg"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="hero is-light is-small is-flex-direction-column is-align-items-center ">
        <div className="hero-body is-flex is-flex-direction-row is-align-items-center">
            <div className="m-2"><p>Find a <span className="has-text-danger-dark">Photographer</span></p></div>
            <div className="select is-danger is-rounded is-small">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
            </div>
        </div>
    </section>

    </>
    )
}

export default MainPage