import React from "react"
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { HEROKU_API_URL } from "../../config"

function RegisterForm() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
  
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    const navigate = useNavigate()

    const onSubmit = async (e) => {
      e.preventDefault()

      try {
        const res = await axios.post(`${HEROKU_API_URL}/users/register/`, formData)
        console.log(res)
        if (res.data.user.id) {
          navigate("/login")
        }
      } catch (e) {
        setErrorMessage(e.response.data.message)
      }
    }



    return (
    <>
    <div className="container is-flex is-justify-content-center">
        <form className="box has-text-centered">
        <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="example@gmail.com" name="email" onChange={onChange}></input>
                </div>
            </div>
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
            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="********" name="password_confirmation" onChange={onChange}></input>
                </div>
            </div>
            <button className="button has-background-danger-light has-text-danger-dark is-rounded" onClick={onSubmit}><strong>Sign up</strong></button>
        </form>
    </div>

    </>
    )
}

export default RegisterForm