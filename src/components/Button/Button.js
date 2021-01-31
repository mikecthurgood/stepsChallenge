import React from 'react';
import Styled from 'styled-components';

const Button = ({children, onClick}) => {

    return (
        <div>
           <Btn onClick={onClick}>
               {children}
            </Btn>
        </div>
    )
}

export default Button;

const Btn = Styled.div`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid navy;
    background-color: lightblue;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: lightblue;
    }

    &:active, &:focus {
        background-color: lightblue;
        color: white; 
    }
`