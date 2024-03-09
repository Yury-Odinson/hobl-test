import React from 'react';
import "./styles/index.scss";
import figure1 from "../src/assets/img/header-1.png";
import figure2 from "../src/assets/img/header-2.png";
import figure3 from "../src/assets/img/header-3.png";
import {Main} from "./components/Main";

function App() {
    return (
        <>
            <div className="background">
                <img className="background__figure3" src={figure3} alt=""/>
                <img className="background__figure2" src={figure2} alt=""/>
                <img className="background__figure1" src={figure1} alt=""/>
            </div>
            <div className="wrapper">
                <Main/>
            </div>
        </>
    );
}

export default App;
