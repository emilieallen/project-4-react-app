import React from "react"
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { HEROKU_API_URL } from "../../config"


function LogInForm() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
  
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    const navigate = useNavigate()
  
    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${HEROKU_API_URL}/api/token/`, formData)
        console.log(res)
        if (res.data.access) {
          localStorage.setItem("accesstoken", res.data.access)
          localStorage.setItem("refreshtoken", res.data.refresh)
          navigate("/")
        }
      } catch (e) {
        setErrorMessage(e.response.data.message)
      }
    }

    return (
    <>
    {errorMessage ? <article className="message is-danger has-text-danger-dark is-large m-6 has-text-centered">Issue with the request</article> : ""}
    <div className="container is-flex is-justify-content-center">
        <form className="box has-text-centered">
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" type="text" name="username" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="********" name="password" onChange={onChange}></input>
                </div>
            </div>
            <button className="button has-background-danger-light has-text-danger-dark is-rounded" onClick={onSubmit}><strong>Sign in</strong></button>
        </form>
    </div>

    </>
    )
}

export default LogInForm