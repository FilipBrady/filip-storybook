type CheckBoxProps = {
  labelText: string;
  labelSite: 'left' | 'right';
  checkBoxSize: 'sm' | 'md' | 'lg',
  checkBoxDisabled: boolean,
  checkBoxChecked: boolean
};

const Checkbox = ({ labelText, labelSite, checkBoxSize, checkBoxDisabled, checkBoxChecked }: CheckBoxProps) => {
  let scale = 15
  if(checkBoxSize === 'sm') scale = 10
  if(checkBoxSize === 'md') scale = 15
  if(checkBoxSize === 'lg') scale = 20

  const labelStyle = {
    display: "flex",
    alignItems: "end"
  }
  const inputStyle = {
    width: `${scale}px`,
    height: `${scale}px`
  }
  return (
    <div>
      {labelSite === 'left' ? (
        <label style={labelStyle}>
          {labelText}
          <input type='checkbox' style={inputStyle} disabled={checkBoxDisabled} checked={checkBoxChecked}  />
        </label>
      ) : (
        <label style={labelStyle}>
          <input type='checkbox' style={inputStyle} disabled={checkBoxDisabled} checked={checkBoxChecked} />
          {labelText}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
