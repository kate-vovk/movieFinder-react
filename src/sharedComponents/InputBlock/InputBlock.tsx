import { Input, FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { ChangeEventHandler, FunctionComponent } from 'react';

interface IInputBlock {
  formControlClass: string;
  labelName: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  id: string;
}

export const InputBlock: FunctionComponent<IInputBlock> = ({
  formControlClass,
  labelName,
  type,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel htmlFor="search">{labelName}</InputLabel>
      <Input
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
    </FormControl>
  );
};
