import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PG Diploma in Big Data Analytics</h4>
                <h5>CDAC</h5>
              </div>
              <h3>80.63%</h3>
            </div>
            <p>
              Specialized in big data technologies, data pipelines, Hadoop, Spark, and advanced scalable data systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Engineering</h4>
                <h5>Mumbai University (SIES-GST)</h5>
              </div>
              <h3>7.51 CGPA</h3>
            </div>
            <p>
              Gained strong foundations in computer science, software engineering, algorithms, and data structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (2020 - 2021)</h4>
                <h5>DAV Public School, Nerul</h5>
              </div>
              <h3>84%</h3>
            </div>
            <p>
              Completed higher secondary education with a strong focus on science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X (2018 - 2019)</h4>
                <h5>DAV Public School, Nerul</h5>
              </div>
              <h3>90.40%</h3>
            </div>
            <p>
              Completed secondary education with an excellent academic record.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
