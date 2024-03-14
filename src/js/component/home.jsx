import React, { useState } from "react";


//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const cycleColors = () => {
        const currentIndex = colors.indexOf(selectedColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setSelectedColor(colors[nextIndex]);
    };

    const addPurple = () => {
        setColors([...colors, "purple"]);
    };

    return ( 
        <div className="traffic-light">
            <div 
                onClick={cycleColors}
                className={"light " + selectedColor + (selectedColor === "purple" ? " purple " : "")}
            ></div>
            <button onClick={addPurple}>Add Purple</button>
        </div>
    );
};

export default Home;
