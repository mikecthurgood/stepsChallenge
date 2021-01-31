import React from 'react';
import Styled from 'styled-components'

const StepHeader = ({activeStep, steps}) => (
    <Header>
        {steps.map((step, i)=> {
            return (
                <>
                    <StepIndex completed={activeStep >= i}>
                        {activeStep > i ? String.fromCharCode(0x2713) : `${i + 1}`}
                    </StepIndex>
                    {i < steps.length -1 && (
                        <Separator count={steps.length} completed={activeStep > i} />
                    )}
                </>
            )
        })}
    </Header>
)

export default StepHeader;

const Header = Styled.div`
    height: 50px;
    width: 90%;
    position: absolute;
    margin: 10px auto;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
`

const StepIndex = Styled.p`
    border: 1px solid lightblue;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: auto 0;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    background-color: ${({ completed }) => (completed ? 'lightblue' : 'white')};
    color: ${({ completed }) => (completed ? 'white' : 'lightblue')};
    transition: background-color 500ms linear, color 500ms linear;
`

const Separator = Styled.span`
    height: 0px;
    border-style: solid;
    border-width: ${({ completed }) => (completed ? '1.3px' : '1px')};
    border-color: ${({ completed }) => (completed ? 'lightblue' : 'lightgray')};
    width: ${({ count }) => `calc(80% / ${count})` };
    margin: auto 0;
    border-radius: 3px;
    background-color: ${({ completed }) => (completed ? 'lightblue' : 'lightgray')};
    transition: border-color 500ms linear, background-color 500ms linear, border-width 500ms ease-in;
`