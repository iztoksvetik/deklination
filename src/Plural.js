import React from 'react';
import Table from "./Table";

function Plural({wort, adjektiv, deklination}) {
    const bestimmterArtikel = ["die", "die", "den", "der"];
    const unbestimmterArtikel = ["keine", "keine", "keinen", "keiner"];
    const nullArtikel = ["-", "-", "-", "-"];
    const adjektivBA = ["en", "en", "en", "en"];
    const adjektivUA = ["en", "en", "en", "en"];
    const adjektivNull = ["e", "e", "en", "er"];

    const wortDeklinationen = {
        "e": ["e", "e", "en", "e"],
        "..e": ["e", "e", "en", "e"],
        "en": ["en", "en", "en", "en"],
        "n": ["n", "n", "n", "n"],
        "": ["", "", "n", ""],
        "er": ["er", "er", "ern", "er"],
        "s": ["s", "s", "s", "s"]
    };

    if (deklination === "..e") {
        const replacements = {"a": "ä", "o": "ö", "u": "ü"};
        const match = /[aou]/.exec(wort);
        wort = [wort.substr(0, match.index), <strong>{replacements[match[0]]}</strong>, wort.substr(match.index + 1)];
    }

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

export default Plural;
