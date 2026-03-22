import "./styles/Certifications.css";

const certifications = [
  {
    title: "AWS Academy Graduate – Data Engineering",
    issuer: "AWS Academy",
  },
  {
    title: "AWS Academy Graduate – Generative AI Fundamentals",
    issuer: "AWS Academy",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
  },
  {
    title: "Data Engineering with Hadoop and Spark",
    issuer: "GeeksforGeeks",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
  },
  {
    title: "SQL (Basic, Intermediate, Advanced)",
    issuer: "HackerRank",
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks Academy",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
  },
  {
    title: "Python for Data Science",
    issuer: "Sololearn",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <h2>
        My <span>Certifications</span>
      </h2>
      <p className="certifications-intro">
        Professional certifications that validate my skills and expertise.
      </p>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-content">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
            </div>
            <div className="cert-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
