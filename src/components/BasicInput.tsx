type BasicInputProps = {
  inputType: 'text' | 'email' | 'password';
  inputPlaceholder: string;
  inputPadding: 'sm' | 'md' | 'lg' | 'xl';
  inputFontSize: number;
  inputBorderRadius: 'sm' | 'md' | 'lg' | 'xl';
  inputBorder: number;
  inputBorderColor: string;
};
const BasicInput = ({
  inputType,
  inputPlaceholder,
  inputPadding,
  inputFontSize,
  inputBorderRadius,
  inputBorder,
  inputBorderColor,
}: BasicInputProps) => {
  let paddingX = 3;
  let paddingY = 6;
  if (inputPadding === 'sm') {
    paddingX = 3;
    paddingY = 6;
  } else if (inputPadding === 'md') {
    paddingX = 5;
    paddingY = 8;
  } else if (inputPadding === 'lg') {
    paddingX = 7;
    paddingY = 10;
  } else if (inputPadding === 'xl') {
    paddingX = 9;
    paddingY = 12;
  }
  let borderRadNumber = 5;
  if (inputBorderRadius === 'sm') {
    borderRadNumber = 5;
  } else if (inputBorderRadius === 'md') {
    borderRadNumber = 10;
  } else if (inputBorderRadius === 'lg') {
    borderRadNumber = 15;
  } else if (inputBorderRadius === 'xl') {
    borderRadNumber = 20;
  }
  const inputStyle = {
    padding: `${paddingY}px ${paddingX}px`,
    fontSize: `${inputFontSize ? inputFontSize : 16}px`,
    // border: '.8px #cecece solid',
    border: `${inputBorder ? inputBorder : 0.8}px ${
      inputBorderColor ? inputBorderColor : '#cecece'
    } solid`,
    borderRadius: `${borderRadNumber}px`,
  };
  return (
    <div>
      <input
        type={inputType ? inputType : 'text'}
        placeholder={inputPlaceholder ? inputPlaceholder : 'Your text'}
        style={inputStyle}
      />
    </div>
  );
};
export default BasicInput;
