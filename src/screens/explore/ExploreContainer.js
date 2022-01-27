import ExploreView from "./ExploreView";
import React, {useEffect, useState} from "react";
import RestService from "../../services/RestService";

const ExploreContainer = props => {
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        RestService.getExplore()
            .then((result) => {
                setThumbnails(result);
            })
    }, [])

    return <ExploreView thumbnails={thumbnails}/>
}

export default ExploreContainer;
