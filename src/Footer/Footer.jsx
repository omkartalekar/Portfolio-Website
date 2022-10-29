import React from "react";
import {SiFacebook,SiInstagram,SiGithub,SiLinkedin,SiTwitter} from "react-icons/si";
import fimg from "../images/cfooter.gif"

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="name">
          
          <img src={fimg} alt="" />
        </div>
        <div className="connect">
          <h3>Connect with Me</h3>
          <div className="social_links">
            <a target='_blank' href="https://www.facebook.com/omkar.talekar.9028/"  rel="noreferrer" ><SiFacebook/></a>
            <a target='_blank' href="https://www.instagram.com/msdian_omkar/"  rel="noreferrer" ><SiInstagram/></a>
            <a target='_blank' href="https://github.com/omkartalekar"  rel="noreferrer" ><SiGithub/></a>
            <a target='_blank' href="https://www.linkedin.com/in/omkar-talekar-19b025211/"  rel="noreferrer" ><SiLinkedin/></a>

           
          </div>
        </div>
        <div className="contactform">
        <h3>Contact</h3>
          <form action="https://formcarry.com/s/1n0wWH8TR" method="POST">
            <label>
              <input type="text" name="Full_Name" placeholder="Full Name" required/>
            </label>
            <label>
              <input type="email" name="Email" placeholder="Email" required/>
            </label>
            <label>
                <textarea name="Message" rows="8" placeholder="Message"></textarea>
            </label>
            <label>
                <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
