import React, { useState } from 'react';
import './TextBox.css';

const HomeText = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "Test 1",
        "Test 2",
        "Test 3",
        "Test 4"
    ];

    
    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
        }
    };

    const handleAboutMeClick = () => {
        //added to prevent the button clicks from triggering the parent div's handleClick function
        e.stopPropagation();
        
        console.log("About Me clicked");
    };

    const handleExperienceClick = () => {
        //added to prevent the button clicks from triggering the parent div's handleClick function
        e.stopPropagation();
        
        console.log("Experience clicked");
    };

    const handleRepeatClick = () => {
        //added to prevent the button clicks from triggering the parent div's handleClick function
        e.stopPropagation();
        
        setCurrentSentenceIndex(0);
        setShowButtons(false);
       
    };

    const containerStyle = {
        width: '100%',
        backgroundColor: '#000000', 
        padding: '20px',
        textAlign: 'center',
        alignSelf: 'flex-end'
    };

    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
        position: 'relative'
    };

    const imageStyle = {
        position: 'absolute',
        right: '0',
        top: '10%',
        transform: 'translateY(-0%)',
        width: '600px', 
        height: 'auto'
    };

    return (
        //removed onClick={handleClick} from top div and put it one down and in the <p>
        <div style={wrapperStyle}>
            <div className='click-to-continue' onClick={handleClick}>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <button onClick={handleAboutMeClick}>1. About Me</button>
                        <button onClick={handleExperienceClick}>2. Experience</button>
                        <button onClick={handleRepeatClick}>3. Could you repeat that?</button>
                    </div>
                ) : (
                    <p onClick={handleClick}>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img src="/images/richard.gif" alt="Animated GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;
