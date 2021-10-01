import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';

interface ISelectBlock {
  formControlClass: string;
  inputLabelName: string;
  open: boolean | undefined;
  id: string;
  onClose: ((event: ChangeEvent<Record<string, unknown>>) => void) | undefined;
  onOpen: ((event: ChangeEvent<Record<string, unknown>>) => void) | undefined;
  value: string;
  onChange:
    | ((
        event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
        child: ReactNode,
      ) => void)
    | undefined;
  option: JSX.Element[];
}

export const SelectBlock: FunctionComponent<ISelectBlock> = ({
  formControlClass,
  inputLabelName,
  open,
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
        open={open}
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
