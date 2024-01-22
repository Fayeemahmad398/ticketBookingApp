/* eslint-disable react/jsx-key */
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import OneWayForm from "../Components/OneWayForm";
import RoundWayForm from "../Components/RoundWayForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function SearchFlight() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e, newValue) => setValue(newValue);

  function handleBuyTicket(tckt) {
    localStorage.setItem("selectedTckt", JSON.stringify(tckt));
    navigate("/flight-booking");
  }

  const tktsForYou = useSelector((store) => {
    return store.ticketReducer.tktsForYou;
  });
  console.log(tktsForYou);
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
        {value == 0 && <OneWayForm />}
        {value == 1 && <RoundWayForm />}
      </div>

      {tktsForYou.map((tckt) => {
        return (
          <div className="card w-75 mt-3">
            <div className="card-body">
              <p className="card-text">{tckt.source}</p>
              <p className="card-text">{tckt.destination}</p>
              <button onClick={() => handleBuyTicket(tckt)}>
                Rs.{tckt.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFlight;
