import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
  variant: 'text' | 'outlined' | 'filled' | 'disabled';
  value: string;
  color: 'primary' | 'secondary' | 'succes' | 'error';
};

export const Button = ({ variant, value, color }: ButtonProps) => {
  return (
    <button
      disabled={variant === 'disabled'}
      className={classNames(styles.button, styles[variant], styles[color])}
    >
      {value}
    </button>
  );
};
