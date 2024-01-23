/* eslint-disable react/jsx-key */
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import OneWayForm from "../Components/OneWayForm";
// import { useSelector } from "react-redux";

function SearchFlight() {
  const [value, setValue] = useState(0);
  

  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <div>
      <h1>Search Flight</h1>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div>
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="One Way trip"
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Round Way trip"
              />
            </div>
          </RadioGroup>
        </FormControl>
        <OneWayForm value={value} />
      </div>
    </div>
  );
}

export default SearchFlight;
