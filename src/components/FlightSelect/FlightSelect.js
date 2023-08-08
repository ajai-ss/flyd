import React from 'react'
import {FlightSelectWrapper} from "./FlightSelect.styled";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import {
    Box,
    Typography,
    Select,
    InputLabel,
    FormControl,
    Button
} from "@mui/material";

const FlightSelect = () => {
  return (
    <div>
        <FlightSelectWrapper>
            <Box className="flight-select-wrapper">
                <Box className="flight-select-filter-bar">
                    <Box className="flight-name">
                        <Typography>MCT-BOM</Typography>
                        <Typography>BOM-MCT</Typography>
                    </Box>

                    <Box className="flight-select-filters">
                        <FilterAltIcon ></FilterAltIcon>
                        <SortIcon></SortIcon>
                    </Box>
                </Box>
            </Box>
        </FlightSelectWrapper>
    </div>
  )
}

export default FlightSelect