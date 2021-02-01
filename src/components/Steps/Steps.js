import React, {useState, useEffect} from 'react';
import Button from '../Button'
import StepHeader from './StepHeader'
import Styled from 'styled-components'

const Steps = ({children, config}) => {
    const userSteps = children.filter(step => !step.props.final)
    const finalStep = children.find(step => step.props.final)
    const [activeStep, setActiveStep] = useState(0)
    const [finalStepActive, setFinalStepActive] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    function handleResize() {
        setIsMobile(window.innerWidth < 768)
    }

    function nextStep () {
        if (activeStep < userSteps.length - 1) {
            return setActiveStep(activeStep + 1)
        }

        if (finalStepActive) {
            setActiveStep(0)
            return setFinalStepActive(false)
        }

        setActiveStep(userSteps.length)
        setFinalStepActive(true)
    }

    function ctaText () {
        if (activeStep < userSteps.length - 1) return 'Next'
        if (finalStepActive === true) return 'Reset'
        return 'Finish'
    }
    
    return (
        <StepsContainer isMobile={isMobile} config={config}>
            <StepHeader activeStep={activeStep} steps={userSteps} />
            {!finalStepActive && (
                <StepContainer largeImages={userSteps[activeStep].props.largeImages}>
                    {userSteps[activeStep]}
                </StepContainer>
            )}
            {finalStepActive && (
                <StepContainer largeImages={finalStep.props.largeImages}>
                    {finalStep}
                </StepContainer>
            )}
            <CtaContainer>
                <Button onClick={nextStep} >
                    {ctaText()}
                </Button>
            </CtaContainer>
        </StepsContainer>
    )
}

export default Steps;

const StepsContainer = Styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2%;
    width: 96%;
    border: ${({ config }) => (config.border ? '1px solid' : 'none')};
    border-color: ${({ config }) => (config.border && config.border.color ? config.border.color : '#282c34')};
    border-radius: 5px;
    height: 100%;
    text-align: center;
    margin-top: 50px;
`

const StepContainer = Styled.div`
    height: calc(100% - 200px);
    position: relative;
    top: 0;
    
    img {
        border-radius: 5px;
        width: ${({ largeImages }) => (largeImages ? '95%' : '40%')};
    }
`

const CtaContainer = Styled.div`
    height: 50px;
    position: relative;
    bottom: 0;
    margin: 10px 10px 0 10px;
    max-width: 100px;
`