import React from "react"
import {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { HEROKU_API_URL } from "../../config"

function UploadPage() {

    const categoryMap = {
        'Night':1,
        'Landscape':2,
        'Urban':3,
        'Architecture':4,
        'Portrait':5,
        'Other':6
    }
    const accessToken = localStorage.getItem("accesstoken");

    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)


    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()
  
    const onSubmit = async (e) => {
      e.preventDefault()

      formData['category'] = categoryMap[formData['category']]
      formData['addedBy'] = Number(formData['addedBy'])
      try {
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        const res = await axios.post(`${HEROKU_API_URL}/pictures/`, formData, config)
        console.log(res)
        if (res.data.id) {
          navigate("/MyPics")
        }
      } catch (e) {
        setErrorMessage(e.response.statusText)
      }
    }

    return (
    <>
    {errorMessage ? <article className="message is-danger has-text-danger-dark is-large m-6 has-text-centered">Issue with the request</article> : ""}
    <div className="container is-flex is-justify-content-center">
        <form className="box has-text-centered">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input is-danger" type="text" name="name" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea is-danger" rows="2" name="description" onChange={onChange}></textarea>
                </div>
            </div>
            <div className="field">
                <label className="label">Category</label>
                <div className="control">
                    <div className="select is-danger">
                        <select name="category" onClick={onChange}>
                            <option name="1">Night</option>
                            <option name="2">Landscape</option>
                            <option name="3">Urban</option>
                            <option name="4">Architecture</option>
                            <option name="5">Portrait</option>
                            <option name="6">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Location</label>
                <div className="control">
                    <input className="input is-danger" type="text" name="location" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Picture Url</label>
                <div className="control">
                    <input className="input is-danger" type="text" name="pictureUrl" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Camera</label>
                <div className="control">
                    <input className="input is-danger" type="text" name="camera" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Settings</label>
                <div className="control">
                    <input className="input is-danger" type="text" name="settings" onChange={onChange}></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input is-danger" type="number" name="addedBy" onChange={onChange}></input>
                </div>
            </div>
            <button className="button has-background-danger-light has-text-danger-dark is-rounded" onClick={onSubmit}><strong>Upload</strong></button>
        </form>
    </div>
    </>
    )
}

export default UploadPage