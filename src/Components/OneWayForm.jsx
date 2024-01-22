import { Box, Button, TextField } from "@mui/material";
import { tickets } from "../utils/tickets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { actionToSearchTicket } from "../redux/actions/actionsCreators";
function OneWayForm() {
  const [oneWayInfo, setOnewayInfo] = useState({ direct: true });

  const dispatch = useDispatch();

  function handleOnewWayDetails(e, key) {
    oneWayInfo[key] = e.target.value;
    setOnewayInfo({ ...oneWayInfo });
  }

  function isReadyToSearchTicket() {
    if (oneWayInfo.from == oneWayInfo.to) {
      toast.warn("Source and Destination cannot be same");
      return;
    }
    dispatch(actionToSearchTicket(oneWayInfo));
    setOnewayInfo({ direct: true });
  }

  console.log(oneWayInfo);
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"250px"}
        gap={"20px"}
      >
        <TextField
          id="standard-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          onChange={(e) => handleOnewWayDetails(e, "from")}
        >
          {tickets.map((ticket) => (
            <option key={ticket.source} value={ticket.source}>
              {ticket.source}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          onChange={(e) => handleOnewWayDetails(e, "to")}
        >
          {tickets.map((ticket) => (
            <option key={ticket.source} value={ticket.source}>
              {ticket.source}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="date"
          onChange={(e) => handleOnewWayDetails(e, "date")}
        />
        <Button
          variant="outlined"
          disabled={!oneWayInfo?.from || !oneWayInfo?.to || !oneWayInfo?.date}
          style={{ maxWidth: "150px" }}
          onClick={isReadyToSearchTicket}
        >
          SEARCH FLIGHT
        </Button>
      </Box>
    </div>
  );
}

export default OneWayForm;
