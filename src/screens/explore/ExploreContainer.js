import ExploreView from "./ExploreView";
import React, {useEffect, useState} from "react";
import RestService from "../../services/RestService";

const ExploreContainer = props => {
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        getExplore();
    }, []);

    // When the page is rendered, get content for this page
    function getExplore() {
        RestService.getExplore()
            .then((result) => {
                setThumbnails(result);
            })
    }

    // When user uses search bar, get the correct content for the page
    function onSearchTextInput(toSearch) {
        if (toSearch.length === 0) {
            getExplore();
        } else {
            // Search will be done on the username of each post
            RestService.getExploreBy(toSearch)
                .then((result) => {
                    setThumbnails(result);
                })
        }
    }

    return <ExploreView
        thumbnails={thumbnails}
        onSearchTextInput={(toSearch) => onSearchTextInput(toSearch)}
    />
}

export default ExploreContainer;
