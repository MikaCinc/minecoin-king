import React, {
    Fragment
} from 'react';

const Home = () => {
    return (
        <Fragment>
            <h2 className="page-title">Enter this week’s Giveaway for n Minecoins! Ends in: 5d 3h 25s</h2>
            <p>Step 1 (2 points): Subscribe to Minecoin King YouTube channel</p>
            <p>Step 2 (1 point): Like this video from Minecoing King</p>
            <p>Step 3 (1 point) Leave a comment on this video from Minecoin King</p>
            <p>Step 4 (2 points) Share the Giveaway video</p>
            <button className="enter-to-win">Enter to win</button>
            <p className="justify">
                Note: Be sure to check your email on the end date of the giveaway to see if you won Minecoins! In case you do not reply within 24 hours, we will select a new winner.
                Thank you for your support, we will make sure to give back to our most loyal fans, so be sure to subscribe to the YouTube channel and share our content with your friends!
            </p>
            <div className="ads-placeholder">Ads</div>
        </Fragment>
    )
}

export default Home;