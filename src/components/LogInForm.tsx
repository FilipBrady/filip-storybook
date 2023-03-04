import {
  BigPasswordInput,
  BigTextInput,
  Default,
  DefaultPasswordInput,
  SmallPasswordInput,
  SmallTextInput,
} from '../stories/BasicInput.stories';
import {
  BigDisabledBtn,
  BigSuccesBtn,
  DisabledBtn,
  SmallDisabledBtn,
  SmallSuccesBtn,
  SuccesBtn,
} from '../stories/Button.stories';

type LogInFormProps = {
  children: any;
  inputSize: 'sm' | 'md' | 'lg';
  formElementsGap: number;
  formAlignment: 'flex-start' | 'center' | 'flex-end';
  submitBtnSize: 'sm' | 'md' | 'lg';
  submitBtnDisabeled: boolean;
};
const LogInForm = ({
  children,
  inputSize,
  formElementsGap,
  formAlignment,
  submitBtnSize,
  submitBtnDisabeled,
}: LogInFormProps) => {
  const registerFormStyle = {
    display: 'flex',
    justifyContent: `${formAlignment ? formAlignment : 'center'}`,
  };
  const registerDivStyle = {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: `${formElementsGap ? formElementsGap : 1}px`,
  };
  return (
    <form style={registerFormStyle}>
      <div style={registerDivStyle}>
        <div>
          {inputSize === 'sm' ? (
            <SmallTextInput {...SmallTextInput.args} />
          ) : inputSize === 'md' ? (
            <Default {...Default.args} />
          ) : inputSize === 'lg' ? (
            <BigTextInput {...BigTextInput.args} />
          ) : (
            <Default {...Default.args} />
          )}
        </div>
        <div>
          {inputSize === 'sm' ? (
            <SmallPasswordInput {...SmallPasswordInput.args} />
          ) : inputSize === 'md' ? (
            <DefaultPasswordInput {...DefaultPasswordInput.args} />
          ) : inputSize === 'lg' ? (
            <BigPasswordInput {...BigPasswordInput.args} />
          ) : (
            <DefaultPasswordInput {...DefaultPasswordInput.args} />
          )}
        </div>
        <div>
          {submitBtnSize === 'sm' && submitBtnDisabeled ? (
            <SmallDisabledBtn {...SmallDisabledBtn.args} />
          ) : submitBtnSize === 'sm' && !submitBtnDisabeled ? (
            <SmallSuccesBtn {...SmallSuccesBtn.args} />
          ) : submitBtnSize === 'md' && submitBtnDisabeled ? (
            <DisabledBtn {...DisabledBtn.args} />
          ) : submitBtnSize === 'sm' && !submitBtnDisabeled ? (
            <SuccesBtn {...SuccesBtn.args} />
          ) : submitBtnSize === 'lg' && submitBtnDisabeled ? (
            <BigDisabledBtn {...BigDisabledBtn.args} />
          ) : submitBtnSize === 'lg' && !submitBtnDisabeled ? (
            <BigSuccesBtn {...BigSuccesBtn.args} />
          ) : (
            <SuccesBtn {...SuccesBtn.args} />
          )}
        </div>
      </div>
    </form>
  );
};
export default LogInForm;
