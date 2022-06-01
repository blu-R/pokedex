import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/slices/userName.slice";

function UserLogin() {
    const [user, setUser] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Kame House</h1>
            <h2>¡Hi trainer!</h2>
            <p>Before beginning, give me your name</p>
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
    );
}

export default UserLogin;
