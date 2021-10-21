import { Input, FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { ChangeEventHandler, FunctionComponent } from 'react';

interface IInputBlock {
  formControlClass?: string;
  labelName?: string;
  type: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  id: string;
  className?: string;
  error?: boolean | undefined;
  helperText?: string | false | undefined;
}

export const InputBlock: FunctionComponent<IInputBlock> = ({
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
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel htmlFor={id}>{helperText || labelName}</InputLabel>
      <Input
        error={error}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      />
    </FormControl>
  );
};
