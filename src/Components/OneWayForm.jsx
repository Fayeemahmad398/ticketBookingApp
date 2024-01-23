/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { tickets } from "../utils/tickets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { actionToSearchTicket } from "../redux/actions/actionsCreators";
import { useNavigate } from "react-router-dom";
function OneWayForm({ value }) {
  const [oneWayInfo, setOnewayInfo] = useState({
    direct: value == 0 ? true : false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleOnewWayDetails(e, key) {
    oneWayInfo[key] = e.target.value;
    setOnewayInfo({
      ...oneWayInfo,
      direct: value == 0 ? true : false,
      searching: true,
    });
  }

  function isReadyToSearchTicket() {
    if (oneWayInfo.source == oneWayInfo.destination) {
      toast.warn("Source and Destination cannot be same");
      return;
    }
    dispatch(actionToSearchTicket(oneWayInfo));
    setOnewayInfo({ direct: value == 0 ? true : false });
  }

  function handleBuyTicket(tckt) {
    localStorage.setItem("selectedTckt", JSON.stringify(tckt));
    dispatch(actionToSearchTicket({}));

    navigate("/flight-booking");
  }

  const tktsForYou = useSelector((store) => {
    return store.ticketReducer.tktsForYou;
  });
  console.log(tktsForYou);

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"250px"}
        gap={"20px"}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-autowidth-label">
            source city
          </InputLabel>
          <Select
            label="Choose city"
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={(e) => handleOnewWayDetails(e, "source")}
            autoWidth
          >
            {tickets.map((tckt) => {
              return <MenuItem value={tckt.source}>{tckt?.source}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-autowidth-label">
            Destination city
          </InputLabel>
          <Select
            label="Destination city"
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={(e) => handleOnewWayDetails(e, "destination")}
            autoWidth
          >
            {tickets.map((tckt) => {
              return (
                <MenuItem value={tckt.destination}>{tckt.destination}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="date"
          onChange={(e) => handleOnewWayDetails(e, "date")}
        />

        {value == 1 && (
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="date"
            placeholder="Date"
            onChange={(e) => handleOnewWayDetails(e, "Journeydate")}
          />
        )}

        <Button
          variant="outlined"
          disabled={
            !oneWayInfo?.source || !oneWayInfo?.destination || !oneWayInfo?.date
          }
          style={{ maxWidth: "150px" }}
          onClick={isReadyToSearchTicket}
        >
          SEARCH FLIGHT
        </Button>
      </Box>

      <div>
        {console.log(oneWayInfo)}
        {tktsForYou.map((tckt) => {
          return (
            <div className="card w-75 mt-3">
              <div className="card-body">
                <p className="card-text">{tckt.source}</p>
                <p className="card-text">{tckt.destination}</p>
                <p className="card-text">
                  {tckt?.direct ? "direct oneway" : "stops"}
                </p>
                <button onClick={() => handleBuyTicket(tckt)}>
                  Rs.{tckt.price}
                </button>
              </div>
            </div>
          );
        })}
        {tktsForYou?.length == 0 && (
          <h6>No tickets available for this route ,change the route</h6>
        )}
      </div>
    </div>
  );
}

export default OneWayForm;
