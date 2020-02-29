import React from 'react';
import './App.css';
import Maskulina from './Maskulina';
import {worter} from './worter';
import {adjektive} from "./adjektive";
import Feminina from "./Feminina";
import Neutra from "./Neutra";
import Plural from "./Plural";

function App() {
    let wort = worter[worter.length-1];
    let adjektiv = adjektive[0];

    return (
        <div className="App">
            <h1>{wort[1]} {wort[0]}</h1>
            {wort[1] === "der" &&
                <Maskulina wort={wort[0]} adjektiv={adjektiv} deklination={wort[2]} />
            }
            {wort[1] === "die" &&
                <Feminina wort={wort[0]} adjektiv={adjektiv} deklination={wort[2]} />
            }
            {wort[1] === "das" &&
                <Neutra wort={wort[0]} adjektiv={adjektiv} deklination={wort[2]} />
            }
            {wort[3] != null &&
                <Plural wort={wort[0]} adjektiv={adjektiv} deklination={wort[3]} />
            }
        </div>
    );
}

export default App;
