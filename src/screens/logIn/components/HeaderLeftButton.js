import {Text, TouchableOpacity} from "react-native";
import React from "react";

const HeaderLeftButton = (props) => {
    return <TouchableOpacity onPress={() => props.logOut()}>
        <Text style={{color: '#EA2340'}}>Log Out</Text>
    </TouchableOpacity>
}

export default HeaderLeftButton;
