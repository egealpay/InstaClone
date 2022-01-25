import React, {useEffect} from "react";
import {ScrollView} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import Post from "./components/Post";

const FeedView = props => {

    function renderPosts() {
        return props.posts.map((post, index) => {
            return <Post user={post.user} content={post.content} key={index}/>
        });
    }

    return <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            {renderPosts()}
        </ScrollView>
    </SafeAreaView>
}

export default FeedView;
