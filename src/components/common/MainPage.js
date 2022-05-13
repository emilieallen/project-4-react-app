import React from "react"
import {useState} from "react";

import PictureTile from "../picture_components/PicturesTile";

function MainPage() {

    const [categoryClicked, setCategory] = useState('All')

    const onClick = (e) => {
        setCategory(e.target.name)
      }
    
    console.log(categoryClicked)

    return (
    <>
    <section className="hero is-light is-small">
        <div className="hero-body">
            <p className="has-text-centered">Pick a <span className="has-text-danger-dark">Theme</span></p>
        </div>
        <div className="tags is-centered are-medium">
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="0">All</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="1">Night</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="4">Architecture</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="3">Urban</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="2">Landscape</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="5">Portrait</a>
            <a className="tag has-text-danger-dark has-background-danger-light" onClick={onClick} name="6">Other</a>
        </div>
    </section>
    <section className="m-5">
        <PictureTile/>
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