import React from 'react';
import './Header.css';
import {Btn} from "../common/Btn";

export const Header = () => {
    return(
        <>
            <header>
                <h1>
                    <strong>Easy</strong> Buy
                </h1>
                <Btn>Dodaj ogłoszenie</Btn>
                <div className="search">
                    <input type="text"/>
                    <Btn>Szukaj</Btn>
                </div>
            </header>
        </>
    )
}
