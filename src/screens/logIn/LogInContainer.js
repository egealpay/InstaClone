import LogInView from "./LogInView";
import {useState} from "react";
import React from "react";
import {AuthContext} from "../../App";

const LogInContainer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [displayErrorAlert, setDisplayErrorAlert] = useState(false);

    const {logIn} = React.useContext(AuthContext);

    const logInButtonPressed = () => {
        console.log("Username: ", username);
        console.log("Password: ", password);

        if (username.length === 0 || password.length === 0) {
            setDisplayErrorAlert(true);
        } else {
            logIn();
        }
    }

    return <LogInView
        username={username}
        onUserNameChanged={setUsername}
        password={password}
        onPasswordChanged={setPassword}
        onLogInPressed={logInButtonPressed}
        displayErrorAlert={displayErrorAlert}
        onDismissErrorAlert={() => setDisplayErrorAlert(false)}
    />
}

export default LogInContainer;
