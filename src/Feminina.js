import React from 'react';
import Table from "./Table";

function Feminina({wort, adjektiv, deklination}) {
    const bestimmterArtikel = ["die", "die", "der", "der"];
    const unbestimmterArtikel = ["eine", "eine", "einer", "einer"];
    const nullArtikel = ["-", "-", "-", "-"];
    const adjektivBA = ["e", "e", "en", "en"];
    const adjektivUA = ["e", "e", "en", "en"];
    const adjektivNull = ["e", "e", "er", "er"];
    let wortEndungen = ["", "", "", ""];

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

export default Feminina;
