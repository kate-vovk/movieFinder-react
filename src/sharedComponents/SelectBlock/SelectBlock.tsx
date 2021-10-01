import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';

interface ISelectBlock {
  formControlClass: string;
  inputLabelId: string;
  inputLabelName: string;
  open: boolean | undefined;
  id: string;
  labelId: string;
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
  inputLabelId,
  inputLabelName,
  open,
  onClose,
  onOpen,
  value,
  onChange,
  option,
  labelId,
  id,
}) => {
  return (
    <FormControl className={formControlClass}>
      <InputLabel id={inputLabelId}>{inputLabelName}</InputLabel>
      <Select
        labelId={labelId}
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
