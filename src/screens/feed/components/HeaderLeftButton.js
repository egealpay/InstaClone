import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {AuthContext} from "../../../App";

const HeaderLeftButton = () => {
    const {logOut} = React.useContext(AuthContext);

    return <TouchableOpacity onPress={() => logOut()}>
        <Text style={{color: '#EA2340'}}>Log Out</Text>
    </TouchableOpacity>
}

export default HeaderLeftButton;
