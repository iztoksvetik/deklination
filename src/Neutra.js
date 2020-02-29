import React from 'react';
import Table from "./Table";

function Neutra({wort, adjektiv, deklination}) {
    const bestimmterArtikel = ["das", "das", "dem", "des"];
    const unbestimmterArtikel = ["ein", "ein", "einem", "eines"];
    const nullArtikel = ["-", "-", "-", "-"];
    const adjektivBA = ["e", "e", "en", "en"];
    const adjektivUA = ["es", "es", "en", "en"];
    const adjektivNull = ["es", "es", "em", "en"];

    const wortDeklinationen = {
        "s": ["", "", "", "s"],
        "es": ["", "", "", "es"]
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

export default Neutra;
