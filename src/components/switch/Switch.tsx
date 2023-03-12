import classNames from 'classnames';
import styles from './Switch.module.scss';
import colors from '../../Colors.module.scss';
import { useState } from 'react';

type SwithcProps = {
  title: string;
  variant: 'default' | 'checked' | 'disabled';
  color: 'primary' | 'secondary' | 'succes' | 'error';
  align: 'start' | 'end' | 'top' | 'bottom';
};
export const Switch = ({ title, variant, color, align }: SwithcProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={classNames(styles.label, styles[align])}>
      {title && (
        <span className={classNames(styles.title)}>{title}</span>
      )}
      <div className={classNames(styles.switch)}>
        <input
          type='checkbox'
          disabled={variant === 'disabled'}
          checked={isChecked === true || variant === 'checked'}
          onClick={() => setIsChecked(!isChecked)}
        />
        <span
          className={classNames(styles.slider, styles.round, styles[color])}
        ></span>
      </div>
    </label>
  );
};
