type RadioGroupProps = {
  labelText1: string;
  labelText2: string;
  labelText3: string;
  radioDirection: 'row' | 'column';
  radioGap: number;
  firstChecked: boolean;
};
const RadioGroup = ({
  labelText1,
  labelText2,
  labelText3,
  radioDirection,
  radioGap,
  firstChecked,
}: RadioGroupProps) => {
  const boxStyle = {
    display: 'flex',
    flexDirection: radioDirection,
    gap: `${radioGap}rem`,
  };
  const labelStyle = {
    display: 'flex',
  };
  return (
    <div style={boxStyle}>
      <label style={labelStyle}>
        <input type='radio' name='radioBtn' checked={firstChecked} />
        {labelText1}
      </label>
      <label>
        <input type='radio' name='radioBtn' />
        {labelText2}
      </label>
      <label>
        <input type='radio' name='radioBtn' />
        {labelText3}
      </label>
    </div>
  );
};
export default RadioGroup;
