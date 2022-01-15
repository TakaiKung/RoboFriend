import React from "react";

class Card extends React.Component {
    render () {
        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src="https://robohash.org/test" alt="robots"></img>
                <div className="tc">
                    <h2>Jane Doe</h2>
                    <p>jane@email.com</p>
                </div>
            </div>
        );
    }
}

export default Card;