import React, {
    Fragment
} from 'react';

const About = () => {
    return (
        <Fragment>
            <h2 className="page-title">About page</h2>
            <div>
                <h3>Who are we?</h3>
                <p>We are a devoted team of Minecraft enthusiast who want to give back to the community that supports them!</p>
            </div>
            <div>
                <h3>How did we get an idea for this?</h3>
                <p>We were tired of fake giveaways, and scams we see online and decided to help out the viewers in a real way! We do this by organizing weekly giveaways for our viewers. Giveaways will be either offering Minecoins or Minecraft Premium accounts for free. All you have to do is enter the giveaway by going to the Home page, following all the steps to increase your chances of winning.</p>
            </div>
            <div>
                <h3>How do giveaways work?</h3>
                <p>After you complete all the steps on the Home page. We then load all the entries. The more steps you complete, the more entries you have! Then we run all the contestants into a random generator and whichever one pops ups, wins the giveaway!</p>
            </div>
            <div>
                <h3>What happens when I win?</h3>
                <p>All you need to do is to check your email on the day the giveaway ends. When you see an email from us, be sure to reply within 24 hours and we will send you a code to reedem your Minecoins, or we will transfer a premium account to your email, depending on which giveaway you won.</p>
            </div>
        </Fragment>
    )
}

export default About;