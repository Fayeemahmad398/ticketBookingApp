import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the BookingApp</h1>
      <button type="button" className="btn btn-primary">
        <NavLink to="/search-flight" className="custum-btn-color">
          Search for Flight
        </NavLink>
      </button>
    </div>
  );
}

export default Home;
