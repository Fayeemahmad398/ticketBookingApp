/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
import { tickets } from "../../../utils/tickets";
import { searching, tktconfirming } from "../actionTypes";

const initial_State = {
  totalTickets: tickets,
  tktsForYou: [],
  bookedTckts: [],
};

function ticketReducer(state = initial_State, action) {
  switch (action.type) {
    case searching:
      let filteredTickets = checkAvailability(
        state.totalTickets,
        action.payload
      );
      return { ...state, tktsForYou: filteredTickets };

    case tktconfirming:
      let allbokedTkts = state.bookedTckts;
      allbokedTkts.push(action.payload);
      const remainingTickets = updateBookedAndTotalTkts(
        state.totalTickets,
        action.payload
      );

      return {
        ...state,
        totalTickets: remainingTickets,
        bookedTckts: allbokedTkts,
      };

    default:
      return state;
  }
}

function checkAvailability(data, requirement) {
  let remainingTickets = data.filter((ticket) => {
    if (
      ticket.destination == requirement.to &&
      ticket.source == requirement.from
    ) {
      return true;
    } else {
      false;
    }
  });
  return remainingTickets;
}

function updateBookedAndTotalTkts(totalTickets, tckt) {
  return totalTickets.filter((obj) => {
    if (obj.id != tckt.id) return true;
  });
}
export default ticketReducer;
