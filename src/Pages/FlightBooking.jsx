/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionToCnfTkts } from "../redux/actions/actionsCreators";
import { useDispatch } from "react-redux";

function FlightBooking() {
  const [cnfInfo, setCnfInfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleConfirm() {
    dispatch(actionToCnfTkts(JSON.parse(localStorage.getItem("selectedTckt"))));
    localStorage.removeItem("selectedTckt");
    setCnfInfo({});
    navigate("/confirmation");
  }

  function handleConfirmDetails(e, key) {
    cnfInfo[key] = e.target.value;
    setCnfInfo({ ...cnfInfo });
  }
  console.log(cnfInfo);

  return (
    <div>
      <h1>Booking confirmation for flight air india(A-34N)</h1>
      <Box>
        <div className="mt-3">
          <TextField
            id="standard-basic"
            label="Firstname"
            variant="standard"
            onChange={(e) => handleConfirmDetails(e, "firstName")}
          />
        </div>
        <div className="mt-3">
          <TextField
            id="standard-basic"
            label="Lastname"
            variant="standard"
            onChange={(e) => handleConfirmDetails(e, "lastName")}
          />
        </div>

        <div className="mt-3">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e) => handleConfirmDetails(e, "email")}
          />
        </div>
        <div className="mt-3">
          <TextField
            id="standard-basic"
            label="Mobile No"
            variant="standard"
            onChange={(e) => handleConfirmDetails(e, "mobileNo")}
          />
        </div>
        <Button
          variant="outlined"
          disabled={
            !cnfInfo?.email ||
            !cnfInfo?.firstName ||
            !cnfInfo?.mobileNo ||
            !cnfInfo?.lastName
          }
          style={{ maxWidth: "fitcontent", color: "blue" }}
          className="mt-3"
          onClick={() => handleConfirm()}
        >
          Confirm Booking
        </Button>
      </Box>
    </div>
  );
}

export default FlightBooking;
