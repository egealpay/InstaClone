import {Dimensions, Image, StyleSheet, Text, View, FlatList} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React, {useState} from "react";
import VideoContent from "./VideoContent";
import Colors from "../../../styles/Colors";

const Post = props => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderAboveContent = () => {
        return <View style={styles.containerAboveContent}>
            <Image
                style={styles.profileImage}
                source={{
                    uri: props.user.profileImageUrl,
                }}
            />
            <Text style={styles.username}>{props.user.username}</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Feather name={"more-horizontal"} size={24}/>
            </View>
        </View>
    }

    const onScroll = (event) => {
        const totalWidth = event.nativeEvent.layoutMeasurement.width;
        const xPos = event.nativeEvent.contentOffset.x;
        const current = Math.floor(xPos / totalWidth)
        setCurrentIndex(current);
    }

    const renderIndicators = (contents) => {
        return contents.map((content, index) => {
            return <View
                key={index}
                style={[styles.indicator, {backgroundColor: index === currentIndex ? Colors.INDICATOR_ACTIVE : Colors.INDICATOR_INACTIVE}]}/>
        })
    }

    const renderImageContent = (imageSource) => {
        return <Image
            style={styles.content}
            resizeMode={"cover"}
            source={imageSource}
        />
    }

    const renderVideoContent = (videoSource) => {
        return <VideoContent videoSource={videoSource}/>
    }

    const renderContent = () => {
        const contents = props.contents

        if (contents.length === 1) {
            const singleContent = contents[0]
            return singleContent.type === 'image' ? renderImageContent(singleContent.file) : renderVideoContent(singleContent.file);
        } else {
            return <View>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    onScroll={onScroll}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    data={contents}
                    renderItem={({item}) => item.type === 'image' ? renderImageContent(item.file) : renderVideoContent(item.file)}
                />
                <View style={styles.indicatorContainer}>
                    {renderIndicators(contents)}
                </View>
            </View>
        }
    }

    const renderBelowContent = () => {
        return <View style={styles.containerBelowContent}>
            <Feather name={"heart"}
                     size={28}/>
            <Feather name={"message-circle"}
                     size={28}
                     style={{marginLeft: 16}}/>
            <Feather name={"send"}
                     size={28}
                     style={{marginLeft: 16}}/>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Feather
                    name={"bookmark"}
                    size={28}/>
            </View>
        </View>;
    }

    return <View>
        {renderAboveContent()}
        {renderContent()}
        {renderBelowContent()}
    </View>
}

const styles = StyleSheet.create({
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    username: {
        marginLeft: 16,
        fontWeight: '500',
        fontSize: 16
    },
    content: {
        width: Dimensions.get('window').width,
        height: 450,
        marginVertical: 8
    },
    containerBelowContent: {
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center',
        marginBottom: 32
    },
    containerAboveContent: {
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center'
    },
    indicator: {
        height: 6,
        width: 6,
        borderRadius: 3,
        marginHorizontal: 2
    },
    indicatorContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default Post;
