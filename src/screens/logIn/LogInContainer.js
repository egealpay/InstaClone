import LogInView from "./LogInView";
import {useState} from "react";
import React from "react";

const LogInContainer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const logInButtonPressed = () => {
        console.log("Username: ", username);
        console.log("Password: ", password);
    }

    return <LogInView
        username={username}
        onUserNameChanged={setUsername}
        password={password}
        onPasswordChanged={setPassword}
        onLogInPressed={logInButtonPressed}
    />
}

export default LogInContainer;
