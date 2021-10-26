import { Input, FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { ChangeEventHandler, FunctionComponent } from 'react';

interface IInputBlock {
  formControlClass?: string;
  labelName?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  id: string;
  className?: string;
  error?: boolean;
  helperText?: string | false;
  inputProps?: Record<string, unknown>;
  name?: string;
  labelClass?: string;
}

export const InputBlock: FunctionComponent<IInputBlock> = ({
  name,
  formControlClass,
  labelName,
  type,
  placeholder,
  value,
  onChange,
  id,
  className,
  error,
  helperText,
  inputProps,
  labelClass,
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel className={labelClass} htmlFor={id}>
        {helperText || labelName}
      </InputLabel>
      <Input
        error={error}
        name={name}
        type={type}
        autoComplete="off"
        inputProps={inputProps}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      />
    </FormControl>
  );
};
