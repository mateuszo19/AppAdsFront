import React, {FormEventHandler, SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {Btn} from "../common/Btn";
import {SearchContext} from "../../context/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return(
        <>
            <header>
                <h1>
                    <strong>Easy</strong> Buy
                </h1>
                <Btn to="/ad" text="Dodaj ogłoszenie"></Btn>
                <form className="search" onSubmit={setSearchFromLocalState}>
                    <input type="text" value={search} onChange={e => setInputVal(e.target.value)}/>
                    <Btn to="s"text="Szukaj"></Btn>
                </form>
            </header>
        </>
    )
}
