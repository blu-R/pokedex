import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/slices/userName.slice";

import "./UserLogin.styles.css";

function UserLogin() {
    const [user, setUser] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="login">
            <img src="../src/assets/images/logo-xl.png" alt="" />
            <h2>¡Hi trainer!</h2>
            <p>Before beginning, give me your name</p>
            <div className="search-box">
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter your name..."
                />
                <button
                    onClick={() => {
                        dispatch(setUserName(user));
                        navigate("/pokedex");
                        // console.log(user);
                    }}
                >
                    Start
                </button>
            </div>
        </div>
    );
}

export default UserLogin;
