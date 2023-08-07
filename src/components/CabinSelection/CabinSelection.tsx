'use client'

import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const MultiSelectCheckbox = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const options: any = ['All Cabins', 'Economy', 'Business', 'General'];

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length - 1) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.slice(1));
    }
  };

  const handleOptionToggle = (optionValue: any) => {
    if (optionValue === 'All Cabins') {
      handleSelectAll();
    } else {
      if (selectedOptions.includes(optionValue)) {
        setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
      } else {
        setSelectedOptions([...selectedOptions, optionValue]);
      }
    }
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <Select
        multiple
        value={selectedOptions}
        renderValue={(selected) => selected.length === (options.length - 1) ? 'All Cabins' : selected.join(', ')}
      >
        {options.map((option: any) => (
          <MenuItem key={option} value={option}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    option === 'All Cabins'
                      ? selectedOptions.length === options.length - 1
                      : selectedOptions.includes(option)
                  }
                  onChange={() => handleOptionToggle(option)}
                />
              }
              label={option}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectCheckbox;
