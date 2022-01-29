import React from "react";
import {Image, View} from "react-native";
import Video from "react-native-video";
import Constants from "../../../styles/Constants";

// This component represents each post in explore screen.
const Thumbnail = props => {

    return <View style={{
        margin: 2,
        height: 150,
        width: Constants.FULL_WIDTH / 3
    }}>
        {props.thumbnail.content.type === 'image' ? <Image
            style={{
                height: 150,
                width: Constants.FULL_WIDTH / 3
            }}
            resizeMode={"cover"}
            source={props.thumbnail.content.file}
        /> : <Video source={props.thumbnail.content.file}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}
                    muted={true}
                    repeat={true}
                    resizeMode={'cover'}
        />}
    </View>;
}

export default Thumbnail;
