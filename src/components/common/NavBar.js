import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"

import logo from '../../utils/logo_size.jpg'

import React from "react"
import {useEffect, useState } from "react";

function Layout() {

    const navigate = useNavigate()

    function onClickLogin(e) {
        e.preventDefault()
        navigate("/login")
    }

    function onClickLogout(e) {
        e.preventDefault()
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        navigate("/")
        window.location.reload(false);
    }

    function onClickRegister(e) {
        e.preventDefault()
        navigate("/register")
    }

    const location = useLocation()

    const [isLoggedIn, setIsLoggedIn] = useState(undefined)

    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        setIsLoggedIn(!token ? false : true)
    }, [location])

  return (
    <>
    <header>
      <nav className="navbar is-transparent is-spaced">
          <div className="navbar-brand is-size-3" >
            <Link to="/" className="navbar-item"><img src={logo}  alt="logo" className="navbar-logo"></img></Link>
            <Link to="/" className="navbar-item has-text-danger">Shutterspeed</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
                {isLoggedIn ? <Link to="/MyPics" className="navbar-item">MyPics</Link> : ""}
                {
                    !isLoggedIn ?
                        <button onClick={(e)=>{onClickLogin(e)}} className="button is-light">Log in</button>
                        : <button onClick={(e)=>{onClickLogout(e)}} className="button is-danger"><strong>Sign out</strong></button>
                }
                { !isLoggedIn ? <button disabled={isLoggedIn ? true : false} onClick={(e)=>{onClickRegister(e)}} className="button is-danger"><strong>Sign up</strong></button> : ""}
            </div>
        </div>
      </nav>
    </header>
    <main >
      <Outlet />
      <br></br>
    </main>
    </>
  )
}

export default Layout