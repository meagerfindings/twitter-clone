import React from "react";

export default class TweetList extends React.Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_pin</i>
                        <span className="title">Tweeter's Name</span>
                        <p>My #FirstTweet</p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_pin</i>
                        <span className="title">Tweeter's Name</span>
                        <p>My #FirstTweet</p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_pin</i>
                        <span className="title">Tweeter's Name</span>
                        <p>My #FirstTweet</p>
                    </li>
                </ul>
            </div>
        )
    }

}