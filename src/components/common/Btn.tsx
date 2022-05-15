import React from 'react';
import './Btn.css';

interface Props {
    // text: string;
    children: string
}

export const Btn = (props: Props) => {
    return(
        <button>{props.children}</button>
    )
}
