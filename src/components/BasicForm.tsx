type BasicFormProps = {
  inputPlaceholder1: string;
  inputPlaceholder2: string;
  inputPlaceholder3: string;
  inputType1: 'text' | 'email' | 'password';
  inputType2: 'text' | 'email' | 'password';
  inputType3: 'text' | 'email' | 'password';
  checkBoxLabel1: string;
  checkBoxLabel2: string;
  radioGroupTitle: string;
  radioBtnLabel1: string;
  radioBtnLabel2: string;
  radioBtnLabel3: string;
  SubmitBtnValue: string;
};
const BasicForm = ({
  inputPlaceholder1,
  inputPlaceholder2,
  inputPlaceholder3,
  inputType1,
  inputType2,
  inputType3,
  checkBoxLabel1,
  checkBoxLabel2,
  radioGroupTitle,
  radioBtnLabel1,
  radioBtnLabel2,
  radioBtnLabel3,
  SubmitBtnValue,
}: BasicFormProps) => {
  const formStyle = {
    display: 'flex',
    'flex-direction': 'column',
    width: 'fit-content',
  };
  const inputStyle = {
    margin: '3px 0',
    padding: '2px 5px',
    fontSize: '1.1rem',
    borderRadius: '5px',
    border: '#cecece .5px solid',
  };
  const CheckBoxGroupStyle = {
    display: 'flex',
    "flex-direction": 'column',
    margin: '3px 0',
  };
  const radioGroupStyle = {
    display: 'flex',
    "flex-direction": 'column',
    margin: '3px 0',
  };
  const submitBtnStyle = {
    width: "fit-content",
    alignSelf: "center"
  }
  return (
    <form style={formStyle}>
      <input
        style={inputStyle}
        type={inputType1 ? inputType1 : 'text'}
        placeholder={
          inputPlaceholder1
            ? inputPlaceholder1
            : inputType1
            ? inputType1
            : 'text'
        }
      />
      <input
        style={inputStyle}
        type={inputType2 ? inputType2 : 'email'}
        placeholder={
          inputPlaceholder2
            ? inputPlaceholder2
            : inputType2
            ? inputType1
            : 'email'
        }
      />
      <input
        style={inputStyle}
        type={inputType3 ? inputType3 : 'password'}
        placeholder={
          inputPlaceholder3
            ? inputPlaceholder3
            : inputType3
            ? inputType1
            : 'password'
        }
      />
      <div style={CheckBoxGroupStyle}>
        <label>
          <input type='checkbox' />
          {checkBoxLabel1 ? checkBoxLabel1 : 'check Box Label 1'}
        </label>
        <label>
          <input type='checkbox' />
          {checkBoxLabel2 ? checkBoxLabel2 : 'check Box Label 2'}
        </label>
      </div>
      <div style={radioGroupStyle}>
        <div>{radioGroupTitle}</div>
        <label>
          <input type='radio' />
          {radioBtnLabel1 ? radioBtnLabel1 : 'Radio Btn Label 1'}
        </label>
        <label>
          <input type='radio' />
          {radioBtnLabel2 ? radioBtnLabel2 : 'Radio Btn Label 2'}
        </label>
        <label>
          <input type='radio' />
          {radioBtnLabel3 ? radioBtnLabel3 : 'Radio Btn Label 3'}
        </label>
      </div>
      <input style={submitBtnStyle} type='submit' value={SubmitBtnValue ? SubmitBtnValue : 'Submit'} />
    </form>
  );
};
export default BasicForm;
