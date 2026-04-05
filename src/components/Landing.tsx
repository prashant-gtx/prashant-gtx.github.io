import { PropsWithChildren } from "react";
import ScrambleText from "./ScrambleText";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRASHANT
              <br />
              <span>GUPTA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <ScrambleText texts={["Data Analyst", "Data Engineer", "SIESGST'25", "CDAC Mumbai"]} />
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
