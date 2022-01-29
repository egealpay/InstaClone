import Feather from "react-native-vector-icons/Feather";
import React from "react";
import {TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';

// When user clicks this button, it will navigate the user to explore page.
const HeaderRightButton = () => {
    const navigation = useNavigation();

    return <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
        < Feather name={'compass'} size={28}/>
    </TouchableOpacity>
}

export default HeaderRightButton;
