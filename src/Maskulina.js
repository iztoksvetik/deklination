import React from 'react';
import Table from "./Table";

function Maskulina({wort, adjektiv, deklination}) {
    const bestimmterArtikel = ["der", "den", "dem", "des"];
    const unbestimmterArtikel = ["ein", "einen", "einem", "eines"];
    const nullArtikel = ["-", "-", "-", "-"];
    const adjektivBA = ["e", "en", "en", "en"];
    const adjektivUA = ["er", "en", "en", "en"];
    const adjektivNull = ["er", "en", "em", "en"];

    const wortDeklinationen = {
        "s": ["", "", "", "s"],
        "es": ["", "", "", "es"],
        "n": ["", "n", "n", "n"]
    };

    let wortEndungen = wortDeklinationen[deklination];
    return (
        <section>
            <Table
                titel="Bestimmter Artikel"
                artikel={bestimmterArtikel}
                adjektivEndungen={adjektivBA}
                wortEndungen={wortEndungen}
                wort={wort}
                adjektiv={adjektiv}
            />
            <Table
                titel="Unbestimmter Artikel"
                artikel={unbestimmterArtikel}
                adjektivEndungen={adjektivUA}
                wortEndungen={wortEndungen}
                wort={wort}
                adjektiv={adjektiv}
            />
            <Table
                titel="Null Artikel"
                artikel={nullArtikel}
                adjektivEndungen={adjektivNull}
                wortEndungen={wortEndungen}
                wort={wort}
                adjektiv={adjektiv}
            />
        </section>
    )
}

export default Maskulina;
