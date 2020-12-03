import React, {useState} from 'react';
import './Tweet.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faShareAlt} from "@fortawesome/free-solid-svg-icons";

const Tweet = ({name, username, userpic, tweet, pic, alt}) => {

    const [like, setLike] = useState(false);
    const [colour, setColour] = useState("#50ACF2")

    const toggleLike = () => {

        console.log('in handleLike')

        if (like === false) {
            setLike(true)
            setColour("#e0245e")

        } else {
            setLike(false)
            setColour("#50ACF2")
        }

    }

    return (
        <div className="tweet-container">
            <div className="profile-pic-container">
                <img className="small-profile-pic" src={userpic} alt="userpic" />
            </div>
            <div className="tweet-content-container">  
                <div className="tweet-header">
                    <h4 className="name">{name}</h4>
                    <p className="twitter-handle">{username}</p>
                </div>
                <div className="twitter-content">
                    <p id="tweet-text">
                    {tweet}
                    </p>
                    <img className="tweet-pic" src={pic} alt={alt}/>
                </div>
                <div className="twitter-buttons">
                    <FontAwesomeIcon id="comment-icon"icon={faComment} />
                    <FontAwesomeIcon id="retweet-icon"icon={faRetweet} />
                    <FontAwesomeIcon style={{color:colour}} id="like-icon" onClick={toggleLike} icon={faHeart} />
                    <FontAwesomeIcon id="share-icon"icon={faShareAlt} />
                </div>
            </div>
        </div>
    )
}

export default Tweet