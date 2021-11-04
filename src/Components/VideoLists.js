import React from 'react';

const list_videos = ["https://www.youtube.com/embed/Z50H0GEccvU", "https://www.youtube.com/embed/8FqZZrbnwkM","https://www.youtube.com/embed/NKQR29IkUjM", "https://www.youtube.com/embed/jz4X7VW-APY"]

const VideoLists = () => {

    return(
        <div>

            {
              list_videos.map(link => <Video video={link}/>
                
                )
            }
           
        </div>
    )
}

export default VideoLists;

const Video = ({video}) => {

    return(

        <div className="ratio ratio-16x9">
             <iframe className="embed-responsive-item" src={video} frameborder="0"></iframe>
        </div>
    )
}