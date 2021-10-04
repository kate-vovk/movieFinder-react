import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';

export type THandleChangeSelect = (
  event: ChangeEvent<{ value: unknown }>,
  child: ReactNode,
) => void;

interface ISelectBlock {
  formControlClass: string;
  inputLabelName: string;
  isOpen: boolean;
  id: string;
  onClose: (event: ChangeEvent<Record<string, unknown>>) => void;
  onOpen: (event: ChangeEvent<Record<string, unknown>>) => void;
  value: string;
  onChange: THandleChangeSelect | undefined;
  option: JSX.Element[];
}

export const SelectBlock: FunctionComponent<ISelectBlock> = ({
  formControlClass,
  inputLabelName,
  isOpen,
  onClose,
  onOpen,
  value,
  onChange,
  option,
  id,
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel htmlFor={id}>{inputLabelName}</InputLabel>
      <Select
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
