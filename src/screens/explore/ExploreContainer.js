import ExploreView from "./ExploreView";
import React, {useEffect, useState} from "react";
import RestService from "../../services/RestService";

const ExploreContainer = props => {
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        getExplore();
    }, []);

    function getExplore() {
        RestService.getExplore()
            .then((result) => {
                setThumbnails(result);
            })
    }

    function onSearchTextInput(toSearch) {
        if (toSearch.length === 0) {
            getExplore();
        } else {
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
