import Steps from '../Steps'
import Step from '../Steps/Step'

function CoolCustomStepComponent() {
  return (
    <>
      <Steps>
        <Step>
          <img src='/kenobi.png' />
          <p>Hello There</p>
        </Step>
        <Step>
          <img src='/grievous.png' />
          <p>General Kenobi. You are a bold one.</p>
        </Step>
        <Step>
          <img src='/fight.png' />
          <p>Your Move</p>
        </Step>
        <Step final={true} >
          <img src='https://comicvine1.cbsistatic.com/uploads/scale_super/11124/111241908/6390509-0002983876-ezgif.gif' />
        </Step>
      </Steps>
    </>
  );
}

export default CoolCustomStepComponent;
