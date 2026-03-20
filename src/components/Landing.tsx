import { PropsWithChildren } from "react";
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
              <div className="landing-h2-1">Data Engineer</div>
              <div className="landing-h2-2">Data Analyst</div>
              <div className="landing-h2-3">Computer Engineer</div>
              <div className="landing-h2-4">SIESGST'25</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Data Engineer</div>
              <div className="landing-h2-info-1">Data Analyst</div>
              <div className="landing-h2-info-2">Computer Engineer</div>
              <div className="landing-h2-info-3">SIESGST'25</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
