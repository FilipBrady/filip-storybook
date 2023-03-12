import styles from './ActionButton.module.scss';
import classNames from 'classnames';

type ActionButtonProps = {
  variant: 'default' | 'extended' | 'disabled';
  svg: any;
  value: string;
  color: 'primary' | 'secondary' | 'succes' | 'error';
  align: 'start' | 'end';
  size: 'sm' | 'md' | 'lg';
};

export const ActionButton = ({
  variant,
  svg,
  value,
  color,
  align,
  size,
}: ActionButtonProps) => {
  return (
    <button
      disabled={variant === 'disabled'}
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        styles[align],
        styles[size]
      )}
    >
      <span className={classNames(styles.svg, styles[color], styles[size])}>
        {svg}
      </span>
      <span
        style={
          variant === 'extended' ? { display: 'block' } : { display: 'none' }
        }
      >
        {value}
      </span>
    </button>
  );
};
