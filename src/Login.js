import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
function Login() {
    return (
        <div className="login">
            <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2019%2F02%2Fpnl-nouveau-son-extrait-nouvel-album-snapchat-videos-1.jpg?w=960&cbr=1&q=90&fit=max"
                alt=""
            />
        
        <a href={accessUrl}>Login to Spotify By Yohan (Yahya) Hmaiti</a>
        </div>
    );
}

export default Login;