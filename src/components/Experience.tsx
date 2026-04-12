import "./styles/Experience.css";

const Experience = () => {
  const calculateDuration = () => {
    const startDate = new Date(2026, 2, 1); // March 1st, 2026
    const today = new Date();
    
    const diffInMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth()) + 1;
    
    if (diffInMonths < 12) {
      return `${diffInMonths} mos`;
    } else {
      const years = Math.floor(diffInMonths / 12);
      const remainingMonths = diffInMonths % 12;
      return `${years} yr${years > 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} mos` : ""}`;
    }
  };

  return (
    <div className="experience-section section-container" id="experience">
      <div className="experience-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="experience-card">
          <div className="experience-card-header">
            <div className="experience-logo">
              <img src="/images/QualityKiosk.png" alt="QualityKiosk logo" />
            </div>
            <div className="experience-role-info">
              <h3>Trainee Engineer : Data Engineering & Validation (DSL-Solutions)</h3>
              <h4>QualityKiosk Technologies · Full-time</h4>
            </div>
            <div className="experience-date">
              <span>Mar 2026 - Present · {calculateDuration()}</span>
            </div>
          </div>
          
          <div className="experience-card-content">
            <p>
              Applying data engineering principles to build and optimize ETL pipelines. Performing rigorous data validation to ensure the accuracy and reliability of analytics solutions within the DSL-Solutions framework.
            </p>
            <div className="experience-tags">
              <span className="experience-tag">Data Engineering</span>
              <span className="experience-tag">Data Validation</span>
              <span className="experience-tag">DSL-Solutions</span>
              <span className="experience-tag">ETL Pipelines</span>
              <span className="experience-tag">SQL & Python</span>
              <span className="experience-tag">Quality Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
