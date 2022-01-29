import React, {useState, useEffect} from "react";
import FeedView from "./FeedView";
import RestService from "../../services/RestService";

const FeedContainer = () => {
    const [posts, setPosts] = useState([]);

    // When this page is rendered, get feed content.
    useEffect(() => {
        RestService.getFeed()
            .then((result) => {
                setPosts(result);
            })
    }, []);

    return <FeedView posts={posts}/>
}

export default FeedContainer;
