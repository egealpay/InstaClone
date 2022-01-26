import React, {useState} from 'react';
import Video from 'react-native-video';
import {TouchableWithoutFeedback, View, Dimensions, StyleSheet} from 'react-native';
import VideoPausedIcon from "./VideoPausedIcon";

const VideoContent = (props) => {
    const [isPaused, setIsPaused] = useState(true);

    return <View style={styles.content}>
        {isPaused && <VideoPausedIcon playVideo={() => setIsPaused(false)}/>}
        <TouchableWithoutFeedback onPress={() => setIsPaused(!isPaused)}>
            <Video source={props.videoSource}
                   paused={isPaused}
                   style={styles.video}
                   repeat={true}
                   resizeMode={'cover'}
            />
        </TouchableWithoutFeedback>
    </View>
}

const styles = StyleSheet.create({
    content: {
        width: Dimensions.get('window').width,
        height: 450,
        marginVertical: 8
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default VideoContent;
