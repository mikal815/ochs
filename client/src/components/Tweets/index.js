import React from 'react'
import './Tweets.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Tweets() {
    return (
        <div className="tweets">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="oceanraiders"
            // options={{ height: 400 }}
            />
        </div>
    );
}

export default Tweets;