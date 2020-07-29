import React, {
    Fragment
} from 'react';

const YouTube = () => {
    return (
        <Fragment>
            <h2 className="page-title">YouTube page</h2>
            <div className="yt-page-main">
                <div className="yt-page-img">Img</div>
                <div>
                    <p>Minecoin King YouTube channel</p>
                    <p>Be sure to subscribe to automatically enter new giveaways!</p>
                    <button className="subscribe-button">SUBSCRIBE</button>
                </div>
            </div>
        </Fragment>
    )
}

export default YouTube;