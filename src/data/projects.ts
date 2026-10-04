import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "MarketPulse AI",
    description:
      "MarketPulse-AI is an AI-powered financial news intelligence platform that aggregates real-time market news, performs sentiment analysis using FinBERT, and applies a Retrieval-Augmented Generation (RAG) pipeline to provide grounded, context-aware insights through a local LLM (Llama 3.2).",
    tools:
      "Fast API, RAG, ChromaDB, Llama 3.2, FinBERT, BeautifulSoup, APScheduler",
    image: "/images/proj_6.jpg",
    link: "https://github.com/prashant-gtx/MarketPulse-AI",
  },
  {
    title: "Detecting Early Stage Knee Osteoarthritis Using Deep Transfer Learning",
    description:
      "Developed an automated diagnostic system using deep learning to classify knee osteoarthritis severity (KL grades 0–4) from X-ray images. Integrated the model into a Streamlit web app with Grad-CAM for visual explanations and clinical support.",
    tools: "Python, Deep Learning, CNN, Streamlit",
    image: "/images/proj_4.jpg",
    link: "https://github.com/prashant-gtx/Detecting-Early-Stage-Knee-Osteoarthritis",
  },
  {
    title: "SuperStore Sales Analysis and Forecasting",
    description:
      "Built an interactive Power BI dashboard for Superstore sales, featuring regional KPIs, product trends, and 15-day sales forecasting to support data-driven decisions.",
    tools: "Power BI, Forecasting, Data Analysis",
    image: "/images/proj_1.jpg",
    link: "https://github.com/prashant-gtx/SuperStore-Sales-Analysis-and-Forecasting",
  },
  {
    title: "E-Commerce Sales Dashboard",
    description:
      "Created a dynamic Power BI dashboard to visualize e-commerce sales, profits, and product trends by state, category, and payment modes for performance optimization.",
    tools: "Power BI, Data Visualization, E-Commerce",
    image: "/images/proj_2.jpg",
    link: "https://github.com/prashant-gtx/E-Commerce-Sales-Dashboard",
  },
];
