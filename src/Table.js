import React from 'react';

function Table({titel, artikel, adjektivEndungen, wortEndungen, adjektiv, wort}) {
    return (
        <div className="container">
            <h2>{titel}</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="deklination">N</td>
                        <td className="artikel">{artikel[0]}</td>
                        <td>{adjektiv}<strong>{adjektivEndungen[0]}</strong></td>
                        <td>{wort}<strong>{wortEndungen[0]}</strong></td>
                    </tr>
                    <tr>
                        <td className="deklination">A</td>
                        <td className="artikel">{artikel[1]}</td>
                        <td>{adjektiv}<strong>{adjektivEndungen[1]}</strong></td>
                        <td>{wort}<strong>{wortEndungen[1]}</strong></td>
                    </tr>
                    <tr>
                        <td className="deklination">D</td>
                        <td className="artikel">{artikel[2]}</td>
                        <td>{adjektiv}<strong>{adjektivEndungen[2]}</strong></td>
                        <td>{wort}<strong>{wortEndungen[2]}</strong></td>
                    </tr>
                    <tr>
                        <td className="deklination">G</td>
                        <td className="artikel">{artikel[3]}</td>
                        <td>{adjektiv}<strong>{adjektivEndungen[3]}</strong></td>
                        <td>{wort}<strong>{wortEndungen[3]}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
