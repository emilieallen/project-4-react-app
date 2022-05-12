
import React from "react"

function LandingPage() {
    return (
    <>
    <section className="hero is-light is-medium">
        <div className="hero-body">
            <p className="subtitle has-text-centered"><span className="has-text-danger-dark">Sign Up</span> to discover photographs and share your best shots..</p>
        </div>
    </section>
    <section className="m-5">
        <div className="tile is-ancestor">
            <div className="tile is-parent is-4">
                <div className="tile is-child card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://i.ibb.co/9vF6XQT/ED681814-7-AD9-47-FC-AF76-4-EDBB212-EDB0-1-201-a.jpg"></img>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="tile is-parent is-4">
                <div className="tile is-child card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://i.ibb.co/7xhdD7Q/60-C772-A3-1-CF6-4-A84-BE10-F3-DB1-C9-C289-D-1-201-a.jpg"></img>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="tile is-parent is-4">
                <div className="tile is-child card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://i.ibb.co/1QpkZbH/8-B92-D9-F8-B508-4-B38-9912-FE1-CDAC7-B994-1-201-a.jpg"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
    )
}

export default LandingPage