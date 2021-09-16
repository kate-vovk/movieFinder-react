import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import { searchOption } from '@/utils/interfaces/searchOption';
import { useStyle } from './styles';

interface ISearchParams {
  selectParam: string;
  changedSelectParam: (event: ChangeEvent<{ name: string; value: searchOption }>) => void;
}

export const SearchSelect: FunctionComponent<ISearchParams> = ({
  selectParam,
  changedSelectParam,
}) => {
  const classes = useStyle();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const { t } = useTranslation(['Search']);

  const handleClose = (): void => {
    setIsSelectOpen(false);
  };

  const handleOpen = (): void => {
    setIsSelectOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{t('selectOption')}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isSelectOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectParam}
          onChange={changedSelectParam as SelectProps['onChange']}
        >
          {Object.values(searchOption).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
