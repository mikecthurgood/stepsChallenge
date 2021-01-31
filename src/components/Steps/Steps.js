import React, {useState, useEffect} from 'react';
import Button from '../Button'
import StepHeader from './StepHeader'
import Styled from 'styled-components'

const Steps = ({children}) => {
    const userSteps = children.filter(step => !step.props.final)
    const finalStep = children.filter(step => step.props.final)
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
        <StepsContainer isMobile={isMobile}>
            <StepHeader activeStep={activeStep} steps={userSteps} />
            {!finalStepActive && (
                <StepContainer>
                    {userSteps[activeStep]}
                </StepContainer>
            )}
            {finalStepActive && (
                <StepContainer largeImages>
                    {finalStep}
                </StepContainer>
            )}
            <CtaContainer>
                <Button onClick={nextStep}>
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
    width: ${({ isMobile }) => (isMobile ? '96%' : '50%')};
    border: 1px solid #282c34;
    border-radius: 8px;
    height: 650px;
    text-align: center;
`

const StepContainer = Styled.div`
    height: calc(100% - 200px);
    position: relative;
    top: 0;
    
    img {
        border-radius: 5px;
        width: ${({ largeImages }) => (largeImages ? '95%' : '70%')};
    }
`

const CtaContainer = Styled.div`
    height: 50px;
    position: absolute;
    bottom: 0;
    margin: 0 10px;
`