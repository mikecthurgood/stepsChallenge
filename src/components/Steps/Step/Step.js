import React from 'react';
import Styled from 'styled-components';

const Step = ({children}) => {
    return (
        <Stp>
            {children}
        </Stp>
    )
}

export default Step;

const Stp = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        margin: auto;
        display: block;
    }
`