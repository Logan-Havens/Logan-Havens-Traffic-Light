import React, { useState } from "react";

const Home = () => {
    const [redOn, setRedOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);
    const [purpleOn, setPurpleOn] = useState(false);
    const [glowIndex, setGlowIndex] = useState(0);

    const toggleLights = () => {
        setRedOn(false);
        setYellowOn(false);
        setGreenOn(false);
        setPurpleOn(false);
        setGlowIndex((glowIndex + 1) % 4);
        switch (glowIndex) {
            case 0:
                setRedOn(true);
                break;
            case 1:
                setYellowOn(true);
                break;
            case 2:
                setGreenOn(true);
                break;
            case 3:
                setPurpleOn(true);
                break;
            default:
                break;
        }
    };

    const addPurple = () => {
        setPurpleOn(true);
    };

    return (
        <div className="traffic-light">
            <div className={"light red" + (redOn ? " on" : "")}></div>
            <div className={"light yellow" + (yellowOn ? " on" : "")}></div>
            <div className={"light green" + (greenOn ? " on" : "")}></div>
            <div className={"light purple" + (purpleOn ? " on" : "")}></div>
            <button onClick={toggleLights}>Toggle Lights</button>
            <button onClick={addPurple}>Add Purple</button>
        </div>
    );
};

export default Home;

