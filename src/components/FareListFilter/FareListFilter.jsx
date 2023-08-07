import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox'  
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FareListFilterWrap, ButtonBottomWrap, OrderBottomWrap } from './FareListFilter.styled';


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const names = [
    'S',
    'T',
    'U',
    'V',
    'W',
  ];
  


const FareListFilter = () => {
    const [personName, setPersonName] = React.useState([]);    

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <FareListFilterWrap>
            <Typography variant="h6" gutterBottom> Fare List Filters</Typography>
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Fare Class</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Search Fare Class" />}
          renderValue={(selected) => selected.join(', ')}
        //   MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <ButtonBottomWrap>
            <Button variant="contained">Apply</Button>
          </ButtonBottomWrap>
        </Select>
      </FormControl>
      <span className='labelText'>Fare Brand</span>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Lite</Button>
        <Button>Value</Button>
        <Button>Flex</Button>
    </ButtonGroup>
    <span className='labelText'>Passenger Type Code</span>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Adult</Button>
        <Button>child</Button>
        <Button>Infant</Button>
    </ButtonGroup>
    <ButtonBottomWrap>
       <Button variant="contained">Apply</Button>
    </ButtonBottomWrap>
    <Typography variant="h6" gutterBottom> Flight Filters</Typography>
    <FormGroup>
        <FormControlLabel control={<Checkbox/>} label="Morning" />
        <FormControlLabel control={<Checkbox/>} label="Afternoon" />
        <FormControlLabel control={<Checkbox/>} label="Evening" />
        <FormControlLabel control={<Checkbox/>} label="Direct" />
        <FormControlLabel control={<Checkbox/>} label="1 Stop" />
        <FormControlLabel control={<Checkbox/>} label="2+ Stop" />
    </FormGroup>
    <FormControl>
    <Typography variant="h6" gutterBottom> Sort Flights By</Typography>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Departure Time" />
    <FormControlLabel value="male" control={<Radio />} label="Arrival Time" />
    <FormControlLabel value="other" control={<Radio />} label="Duration" />
  </RadioGroup>
  <OrderBottomWrap>
    <span className='labelText'>Order</span>
      <Stack className="orderButton" spacing={2} direction="row">
        <Button variant="contained" startIcon={<ArrowUpwardIcon />}>
            Ascending
        </Button>
        <Button variant="contained" endIcon={<ArrowDownwardIcon/>}>
            Descending
        </Button>
    </Stack>
    </OrderBottomWrap>
    </FormControl>



    


    </FareListFilterWrap>  
  );
};
export default FareListFilter;
