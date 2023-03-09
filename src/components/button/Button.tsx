import { FC } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ variant }) => {
  return (
    <div className={classNames(styles.button, styles[variant])}>Button</div>
  );
};
