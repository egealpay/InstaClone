import React, {useEffect} from "react";
import {ScrollView, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Post from "./components/Post";

const FeedView = props => {
    const insets = useSafeAreaInsets();

    function renderPosts() {
        return props.posts.map((post, index) => {
            return <Post user={post.user} content={post.content} key={index}/>
        });
    }

    return <View style={{
        flex: 1,
        paddingTop: insets.top / 4,
        paddingBottom: insets.bottom
    }}>
        <ScrollView>
            {renderPosts()}
        </ScrollView>
    </View>
}

export default FeedView;
