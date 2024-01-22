import { Box, Button, TextField } from "@mui/material";
import { tickets } from "../utils/tickets";

function RoundWayForm() {
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
        >
          {tickets.map((ticket) => (
            <option key={ticket.destination} value={ticket.destination}>
              {ticket.destination}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Journey Date"
          variant="outlined"
          type="date"
        />
        <TextField
          //   id="outlined-basic"
          label="Return Date"
          variant="outlined"
          type="date"
        />
        <Button variant="outlined" disabled style={{ maxWidth: "150px" }}>
          SEARCH FLIGHT
        </Button>
      </Box>
    </div>
  );
}

export default RoundWayForm;
