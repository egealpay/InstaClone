import React, {useState} from "react";
import FeedView from "./FeedView";
import {SampleImage10MB, SampleImage10MB2} from "../../assets";

const FeedContainer = () => {
    const [posts, setPosts] = useState([{
        user: {
            username: 'Charlotte',
            profileImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        content: [{file: SampleImage10MB, type: 'image'}]
    }, {
        user: {
            username: 'Charlotte',
            profileImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        content: [{file: SampleImage10MB, type: 'image'}, {file: SampleImage10MB2, type: 'image'}]
    }])

    return <FeedView posts={posts}/>
}

export default FeedContainer;
