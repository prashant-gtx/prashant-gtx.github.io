import "./styles/About.css";
import { MdOutlineDataExploration, MdStorage, MdAutoGraph } from "react-icons/md";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h2 className="title">About <span>Me</span></h2>
        
        <div className="bento-grid">
          <div className="bento-card bio-card">
            <p>
              Versatile data professional with strong foundations in data analysis, data engineering, and applied machine learning. Skilled in transforming raw, large-scale data into reliable analytics solutions and intelligent applications.
            </p>
          </div>
          
          <div className="bento-card feature-card">
            <MdStorage className="bento-icon" />
            <h3>Data Engineering</h3>
            <p>Building end-to-end data pipelines with big data tools and cloud platforms.</p>
          </div>

          <div className="bento-card feature-card">
            <MdOutlineDataExploration className="bento-icon" />
            <h3>Data Analysis</h3>
            <p>Performing EDA, developing dynamic dashboards, and enabling data-driven decisions.</p>
          </div>

          <div className="bento-card feature-card wide-card">
            <MdAutoGraph className="bento-icon" />
            <div>
              <h3>Applied AI & ML</h3>
              <p>Practical experience integrating intelligent systems including LLMs and RAG into real-world applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
