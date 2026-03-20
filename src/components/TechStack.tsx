import "./styles/TechStack.css";

const dataEngineering = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "PySpark", icon: "/images/pyspark.png" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks/white" },
  { name: "Hadoop", icon: "/images/hadoop_colored.png" },
  { name: "Hive", icon: "/images/hive.png" },
  { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/white" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
];

const dataAnalysis = [
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
  { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
  { name: "n8n", icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" },
];

const MarqueeTrack = ({ items, reverse }: { items: any[]; reverse?: boolean }) => {
  return (
    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      <div className="marquee-items">
        {items.map((tech, idx) => (
          <div className="tech-icon" key={idx} data-cursor="disable">
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="marquee-items" aria-hidden="true">
        {items.map((tech, idx) => (
          <div className="tech-icon" key={idx} data-cursor="disable">
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <h2>
        My <span>Techstack</span>
      </h2>
      <div className="marquee-container">
        <MarqueeTrack items={dataEngineering} />
        <MarqueeTrack items={dataAnalysis} reverse={true} />
      </div>
    </div>
  );
};

export default TechStack;
