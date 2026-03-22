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
                <h5>CDAC Mumbai</h5>
              </div>
              <h3>80.63%</h3>
            </div>
            <p>
              Specialized in big data technologies such as Hadoop, Spark, Hive, Kafka, AWS, Machine Learning and AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Engineering</h4>
                <h5>SIES Graduate School of Technology</h5>
              </div>
              <h3>75.42%</h3>
            </div>
            <p>
              Gained strong foundations in computer science, software engineering, algorithms, and data structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII</h4>
                <h5>DAV Public School, Nerul</h5>
              </div>
              <h3>84.00%</h3>
            </div>
            <p>
              Completed higher secondary education with a strong focus on science, mathematics and computer science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X</h4>
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
