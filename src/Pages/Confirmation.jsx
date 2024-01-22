import { NavLink } from "react-router-dom";

function Confirmation() {
  return (
    <div>
      <h3>thank you for booking. Click the below button to ruturn home page</h3>
      <button>
        <NavLink to={"/"}>Back to Home</NavLink>
      </button>
    </div>
  );
}
1;

export default Confirmation;
