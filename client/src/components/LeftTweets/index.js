import React from 'react'
import './LeftTweets.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function LeftTweets() {
    return (
        <div className="left-tweets">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="OCNJSPORTS"
            // options={{ height: 400 }}
            />
        </div>
    );
}

export default LeftTweets;