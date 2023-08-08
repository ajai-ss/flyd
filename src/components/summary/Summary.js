import React from "react";
import {
    Box,
    Typography,
    Select,
    InputLabel,
    FormControl,
    Button
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {SummaryWrapper} from "./summary.styled"

const Summary = () => {
    return (
        <div>
            <SummaryWrapper>
                <Box className="summary-wrapper">
                    <Box className="summary-top-bar">
                        <Typography className="summary-title">SUMMARY</Typography>

                        <Box className="summary-right-segment-wrap">
                            <Typography className="summary-top-text">2 Segments | </Typography>
                            <Typography className="summary-top-text">3 Pax | </Typography>
                            <Box className="right-dropdpwn-wrap">
                                <FormControl sx={{ m: 1, minWidth: "110px" }}>
                                    <InputLabel
                                        className="summary-top-text"
                                        htmlFor="grouped-native-select"
                                    >
                                        OMR
                                    </InputLabel>
                                    <Select
                                        native
                                        defaultValue=""
                                        id="grouped-native-select"
                                        sx={{
                                            boxShadow: "none",
                                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                        }}
                                        label="Grouping"
                                    ></Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>




                    <Box className="flight-detail-bar">
                        <Typography className="flight-detail-text">Flight Details</Typography>
                    </Box>



                    <Box className="flight-details-wrap">
                        <Box className="flight-details-left-section">
                            <Box className="flight-location">
                                <Typography className="flight-location-text">MTC</Typography>
                                <ArrowForwardIcon className="flight-location-text" />
                                <Typography className="flight-location-text">BOM</Typography>
                            </Box>
                            <Typography className="flight-date">May 18</Typography>
                            <Box className="flight-timing-wrap">
                                <Typography variant="span" className="flight-time-text">
                                    16.15-19.50
                                </Typography>
                                <Typography variant="span" className="flight-duration-text">
                                    3h 35m/1 stop
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="flight-details-right-section">
                            <Box className="flight-detail-number-wrap">
                                <img
                                    className="plain-tail"
                                    src="./images/plaintail.png"
                                    alt="plain tail icon"
                                />
                                <Typography className="flight-no-text">FZ 044</Typography>

                                <img
                                    className="plain-tail"
                                    src="./images/plaintail.png"
                                    alt="plain tail icon"
                                />
                                <Typography className="flight-no-text">FZ 431</Typography>
                            </Box>
                            <Typography className="flight-class">A 380 | Business</Typography>
                            <Typography className="flight-detail-id">1,070 AED</Typography>
                        </Box>
                    </Box>

                    <Box className="flight-details-wrap">
                        <Box className="flight-details-left-section">
                            <Box className="flight-location">
                                <Typography className="flight-location-text">BOM</Typography>
                                <ArrowForwardIcon className="flight-location-text" />
                                <Typography className="flight-location-text">MTC</Typography>
                            </Box>
                            <Typography className="flight-date">May 21</Typography>
                            <Box className="flight-timing-wrap">
                                <Typography variant="span" className="flight-time-text">
                                    16.15-19.50
                                </Typography>
                                <Typography variant="span" className="flight-duration-text">
                                    3h 35m/1 stop
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="flight-details-right-section">
                            <Box className="flight-detail-number-wrap">
                                <img
                                    className="plain-tail"
                                    src="./images/plaintail.png"
                                    alt="plain tail icon"
                                />
                                <Typography className="flight-no-text">FZ 045</Typography>

                                <img
                                    className="plain-tail"
                                    src="./images/plaintail.png"
                                    alt="plain tail icon"
                                />
                                <Typography className="flight-no-text">FZ 431</Typography>
                            </Box>
                            <Typography className="flight-class">A 380 | Business</Typography>
                            <Typography className="flight-detail-id">1,070 AED</Typography>
                        </Box>
                    </Box>

                    <Box className="total-bar-wrap">
                        <Typography className="total-text">Total</Typography>
                        <Typography className="total-value">1,782,140.00 AED</Typography>
                    </Box>

                    <Box className="fare-wrap">
                        <Typography className="fare-text">Fare Quote</Typography>
                        <Button className="proceed-button">Proceed</Button>
                    </Box>
                </Box>
            </SummaryWrapper>
        </div>
    );
};

export default Summary;
