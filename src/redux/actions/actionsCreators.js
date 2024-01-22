import { tktconfirming } from "./actionTypes.js";
import { searching } from "./actionTypes.js";

export const actionToSearchTicket = (ticketInfo) => {
  console.log(ticketInfo);
  return {
    type: searching,
    payload: ticketInfo,
  };
};

export const actionToCnfTkts = (tckt) => {
  return {
    type: tktconfirming,
    payload: tckt,
  };
};
