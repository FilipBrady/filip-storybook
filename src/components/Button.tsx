import PropTypes from 'prop-types';

export type ButtonProps = {
  label: string;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  handleClick?: () => void;
  rounding?:  'sm' | 'md' | 'lg' | 'xl'
};

const Button = ({ label, backgroundColor, size, handleClick, rounding }: ButtonProps) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  if (size === 'xl') scale = 2;
  let borderRadius = 10
  if (rounding === 'sm') borderRadius = 5;
  if (rounding === 'lg') borderRadius = 15;
  if (rounding === 'xl') borderRadius = 25;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    borderRadius: `${borderRadius}px`,
    color: "white",
    fontSize: "1.5rem"
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
