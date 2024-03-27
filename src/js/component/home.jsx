import React, { useState } from "react";

const Home = () => {
    const [redOn, setRedOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);

    const toggleLights = () => {
        setRedOn(prevState => !prevState);
        setYellowOn(prevState => !prevState);
        setGreenOn(prevState => !prevState);
    };

    const addPurple = () => {
        setPurpleOn(true);
    };

    return (
        <div className="traffic-light">
            <div className={"light red" + (redOn ? " on" : "")}></div>
            <div className={"light yellow" + (yellowOn ? " on" : "")}></div>
            <div className={"light green" + (greenOn ? " on" : "")}></div>
            <button onClick={toggleLights}>Toggle Lights</button>
        </div>
    );
};

export default Home;
