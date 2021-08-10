import React from 'react';
import "./Banner.css";
function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://wallpapercave.com/wp/wp1917118.jpg")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    movies
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">MyList</button>
                </div>
                <h1 className="banner__description">
                    This is movies Description
                </h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner

//watch at 1:18:29