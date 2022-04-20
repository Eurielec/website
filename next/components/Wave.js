import { Children } from "react";

function Wave({ children }) {
  return (
    <div className="wave-container">
      <svg
        className="upper-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 100 1438 220"
      >
        <path
          fill="#E52A30"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,133.3C672,149,768,171,864,176C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="child">
        {children}
      </div>
      <svg
        className="lower-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E52A30"
          fillOpacity="1"
          d="M0,288L48,277.3C96,267,192,245,288,213.3C384,181,480,139,576,138.7C672,139,768,181,864,218.7C960,256,1056,288,1152,288C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;
