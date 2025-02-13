import React, { useState, useEffect } from 'react';
import '../Styles/Home.css';
import bgvideo from '../Assets/background_video.mp4';

function Home() {
    const introduction = "This is a test message to show the animation";
    const second_introduction = "This is a test message 2 to see the div box"
    const split_array_introduction = introduction.split("");
    const [visibleText, setVisibleText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const split_array_introduction2 = second_introduction.split("");
    const [visibleText2, setVisibleText2] = useState("");
    const [currentIndex2, setCurrentIndex2] = useState(0);


    return (

        <div className="video-container">
            <video preload='auto'autoPlay muted className='video'>hi
                <source src={bgvideo} type="video/mp4"/>
            </video>
        <div className = 'introParagraph'>
        <p>{visibleText}</p>
        <p>{visibleText2}</p>
        </div>
        </div>

    );
}

export default Home;