import React, {
    Fragment
} from 'react';

const Home = () => {


    const login = () => {
        fetch('https://www.googleapis.com/youtube/v3/subscriptions', {
            cors: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'part': 'id',
                'id': 'UC18Zl2BCVNzBQx08F-xisVQ',
                'key': 'AIzaSyCgoPE1Hzq9S6VQFmUf94fU-r_Mf8DTKO8'
            },
        }).then(response => response.json())
            .then(response => console.log(response));
    }

    return (
        <Fragment>
            <h2 className="page-title">Enter this week’s Giveaway for n Minecoins! Ends in: 5d 3h 25s</h2>
            <p>Step 1 (2 points): Subscribe to Minecoin King YouTube channel</p>
            <p>Step 2 (1 point): Like this video from Minecoin King</p>
            <p>Step 3 (1 point): Leave a comment on this video from Minecoin King</p>
            <p>Step 4 (2 points): Share the Giveaway video</p>

            <h4>After you completed steps above, click on this button to login with youtube so we can check your results.</h4>
            <h4>Please note: we will also verify manually all the steps you completed if we pick you as winner.</h4>

            <button
                className="enter-to-win"
                onClick={login}
            >
                Login with Google
            </button>
            <p className="justify">
                Note: Be sure to check your email on the end date of the giveaway to see if you won Minecoins! In case you do not reply within 24 hours, we will select a new winner.
                Thank you for your support, we will make sure to give back to our most loyal fans, so be sure to subscribe to the YouTube channel and share our content with your friends!
            </p>
            <div className="ads-placeholder">Ads</div>
        </Fragment>
    )
}

export default Home;