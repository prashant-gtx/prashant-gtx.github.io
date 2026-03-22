import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>Contact <span>Me</span></h2>
        
        <div className="contact-layout">
          <div className="contact-form-container">
            <h4 className="form-heading">Have a <span>Question?</span></h4>
            <form action="https://formspree.io/f/xojnabva" method="POST" className="contact-form">
              <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" cols={30} rows={3} className="form-control" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info-container">
            <div className="contact-box">
              <h4>Address</h4>
              <p>Navi Mumbai, India</p>
              <h4>Download Resume</h4>
              <p>
                <a href="/assets/Resume.pdf" download="Prashant_Gupta_Resume.pdf" data-cursor="disable">
                  Click here
                </a>
              </p>
            </div>
            
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/prashant-gtx"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                <FaGithub /> Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-gtx/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                <FaLinkedin /> Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://x.com/PrashantGupta_0"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                <FaTwitter /> Twitter <MdArrowOutward />
              </a>
              <a
                href="https://www.instagram.com/prashant.gtx/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                <FaInstagram /> Instagram <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed by <span>Prashant Gupta</span>
          </h2>
          <h5>
            <MdCopyright /> {new Date().getFullYear()} All rights reserved
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
