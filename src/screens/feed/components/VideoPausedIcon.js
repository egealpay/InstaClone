import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPausedIcon = ({playVideo}) => {
    return <View style={{zIndex: 10, alignSelf: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableWithoutFeedback onPress={() => playVideo()}>
            <MaterialCommunityIcons name={'play'}
                                    size={96}
                                    style={{opacity: 0.5}}
                                    color={'#FFF'}/>
        </TouchableWithoutFeedback>
    </View>;
};

export default VideoPausedIcon;
