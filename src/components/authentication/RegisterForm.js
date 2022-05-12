import React from "react"
import {useState} from "react";


function RegisterForm() {
    return (
    <>
    <div className="container is-flex is-justify-content-center">
        <form class="box has-text-centered">
        <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="example@gmail.com"></input>
                </div>
            </div>
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" type="text" ></input>
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="********"></input>
                </div>
            </div>
            <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="********"></input>
                </div>
            </div>
            <button class="button has-background-danger-light has-text-danger-dark is-rounded"><strong>Sign up</strong></button>
        </form>
    </div>

    </>
    )
}

export default RegisterForm