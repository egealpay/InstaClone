import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {AuthContext} from "../../../App";
import Constants from "../../../styles/Constants";

// When user clicks this button, user will be logged out from the app.
const HeaderLeftButton = () => {
    const {logOut} = React.useContext(AuthContext);

    return <TouchableOpacity onPress={() => logOut()}>
        <Text style={{color: Constants.RED, paddingRight: 8}}>Log Out</Text>
    </TouchableOpacity>
}

export default HeaderLeftButton;
