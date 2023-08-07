import React, { useState } from 'react';
import { Typography, TextField, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PassengerSelection = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleAdultChange = (value: any) => {
        setAdults(Math.max(0, value)); // Ensure the minimum value is 0 (no negative values).
    };

    const handleChildrenChange = (value: any) => {
        setChildren(Math.max(0, value)); // Ensure the minimum value is 0.
    };

    const handleInfantChange = (value: any) => {
        setInfants(Math.max(0, value)); // Ensure the minimum value is 0.
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                '& .MuiTextField-root': { width: '10ch', height: '4ch' },
                '& .MuiTypography-root': { marginBottom: '10px', marginRight: '50px' },
            }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Adult</Typography>
                <IconButton onClick={() => handleAdultChange(adults - 1)}>
                    <RemoveIcon onClick={() => handleAdultChange(adults - 1)} />
                </IconButton>
                <TextField id="adult" size="small" value={adults} />
                <IconButton onClick={() => handleAdultChange(adults + 1)}>
                    <AddIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Child</Typography>
                <IconButton onClick={() => handleChildrenChange(children - 1)}>
                    <RemoveIcon />
                </IconButton>
                <TextField id="child" size="small" value={children} />
                <IconButton onClick={() => handleChildrenChange(children + 1)}>
                    <AddIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>Infant</Typography>
                <IconButton onClick={() => handleInfantChange(infants - 1)}>
                    <RemoveIcon />
                </IconButton>
                <TextField id="infant" size="small" value={infants} />
                <IconButton onClick={() => handleInfantChange(infants + 1)}>
                    <AddIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default PassengerSelection;
