import React, { FC, Ref, useCallback, useState, useRef } from 'react';
import Label from '../Label/Label';
import CheckboxIcon from '../Icons/CheckboxIcon';
import useHover from '../../../../utils/hooks/useHover';
import useFocus from '../../../../utils/hooks/useFocus';

import styles from './Checkbox.module.scss';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to show above input
   */
  label: string;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: boolean) => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Current value of input
   */
  defaultValue?: boolean;

  /**
   * Class name of input
   */
  className?: string;
}

const Checkbox: FC<Props> = (props) => {
  const { className, disabled, defaultValue, children, onChange, label, ...otherProps } = props;

  const [isChecked, setChecked] = useState(!!defaultValue);

  const toggle = useCallback(
    () => {
      const newValue = !isChecked;
      setChecked(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [isChecked, onChange],
  );

  const refLabel = useRef(null);
  const refInput = useRef(null);
  const isHovering = useHover(refLabel);
  const isFocusing = useFocus(refInput);

  return (
    <Label title={label} ref={refLabel} position='right' disabled={disabled} className={styles.label}>
      <CheckboxIcon
        isActive={isChecked}
        hasHover={isHovering || isFocusing}
      />
      <input
        type='checkbox'
        ref={refInput}
        className={styles.input}
        checked={isChecked}
        disabled={disabled}
        onChange={toggle}
        {...otherProps}
      />
    </Label>
  );
};

export default Checkbox;
