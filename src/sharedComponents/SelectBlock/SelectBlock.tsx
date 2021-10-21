import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';

export type THandleChangeSelect = (
  event: ChangeEvent<{ value: unknown }>,
  child: ReactNode,
) => void;

interface ISelectBlock {
  className?: string;
  name?: string;
  formControlClass: string;
  inputLabelName: string;
  isOpen?: boolean;
  id: string;
  onClose?: (event: ChangeEvent<Record<string, unknown>>) => void;
  onOpen?: (event: ChangeEvent<Record<string, unknown>>) => void;
  value: string | number;
  onChange?: THandleChangeSelect | undefined;
  option: JSX.Element[];
}

export const SelectBlock: FunctionComponent<ISelectBlock> = ({
  className,
  formControlClass,
  inputLabelName,
  isOpen,
  onClose,
  onOpen,
  value,
  onChange,
  option,
  id,
  name,
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel htmlFor={id}>{inputLabelName}</InputLabel>
      <Select
        className={className}
        name={name}
        id={id}
        open={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        value={value}
        onChange={onChange}
      >
        {option}
      </Select>
    </FormControl>
  );
};
