import { type ComponentProps, type ReactNode, useId, useState } from 'react';

import clsx from 'clsx';

import MingcuteCheckFill from '@/icons/MingcuteCheckFill';

import { BOARD_COLORS, type BoardColor } from '@/types/board';

import styles from './TextInput.module.css';

type Props = Omit<
  ComponentProps<'input'>,
  'type' | 'value' | 'defaultValue' | 'onChange'
> & {
  label: string;
  error?: string | null;
  value?: BoardColor;
  defaultValue?: BoardColor;
  onChange: (value: BoardColor) => void;
};

const ColorInput = ({
  label,
  className,
  error,
  value: controlledValue,
  defaultValue,
  onChange,
  ...otherProps
}: Props): ReactNode => {
  const id = useId();

  const [unControlledvalue, setUnControlledvalue] = useState<BoardColor>(
    defaultValue ?? 'blue'
  );

  const value = controlledValue ?? unControlledvalue;

  const handleButtonClick = (color: BoardColor): void => {
    setUnControlledvalue(color);
    onChange?.(color);
  };
  return (
    <div
      className={clsx(
        styles['color-input'],
        !!error && styles.error,
        className
      )}
    >
      <div className={styles.colors}>
        {BOARD_COLORS.map((item) => (
          <button
            key={item}
            className={clsx(item, item === value && styles.active)}
            type="button"
            onClick={() => handleButtonClick(item)}
          >
            {item === value && <MingcuteCheckFill />}
          </button>
        ))}
      </div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} value={value} type="hidden" />
      <span className={styles.error}>{error || '\u00A0'}</span>
    </div>
  );
};

export default ColorInput;
