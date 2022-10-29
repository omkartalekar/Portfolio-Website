import React, { useEffect } from "react";
import Header from "./Header/Header";
import intro from "./images/c1.gif";
import about from "./images/c.gif";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMaterialui,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql

} from "react-icons/si";
import { TbArrowTopSquare } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer/Footer";
import Work from "./Work/Work";

function App() {
  useEffect(() => {
    Aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const wdata = [
    {
      pname: 'FLIPKART CLONE',
      pdes: `A full E-Commerce FlipKart Clone which built MERN Stack.                       
      This Project which helps to understand how MERN STACK works.

      Features :
       1. Login Page.
       2. Products Page.
       3. Cart Page.
       4. Payment Page.
       5. Add / Remove item to Cart.
       6. Make Order with Online Payment
       `,
      pstack: 'HTML , CSS , JAVASCRIPT , NODEJS ,EXPRESS JS , MONGO DB , REACT, REACT-ROUTER, REDUX, MATERIAL UI, ',
      plive: 'https://flipkartsonesuccess.herokuapp.com/',
      psource: 'https://github.com/omkartalekar/heroku-Deployed-Flipkart-Clone',
    },

    {
      pname: 'GMAIL CLONE ',
      pdes: `A Gmail Clone that you can sign with your Google Account, compose a new Email and send real time Email to the Project.

      I am building Gmail Clone from Scratch with the help of React js, Redux, Material UI Icons and Firebase.`,
      pstack: 'REACT, REACT-ROUTER, MATERIAL UI, FIREBASE',
      plive: 'https://clone-7dfcb.web.app/',
      psource: 'https://github.com/omkartalekar/GMAIL-CLONE-',
    },

    {
      pname: 'LINKEDIN CLONE',
      pdes: ` I am building Linkedin Clone from Scratch with the help of React js, Redux, Material UI Icons and Firebase.
      Built using React JS, Redux, Firebase & Styled-Components within a week. My first project after learning React JS referencing a tutorial on YouTube by 'Clever Programmer'. 
     
      
      Features and Fuctionality : 
      1. Login using Google (Firebase Authentication)
      2. Create a new post using Text, Images.
      3. Sign Out`,
      pstack: 'REACT, REACT-ROUTER, MATERIAL UI, FIREBASE',
      plive: 'https://linkedin-clone-edf2a.web.app/',
      psource: 'https://github.com/omkartalekar/LINKEDIN-CLONE',
    },

    {
      pname: 'AMAZON CLONE',
      pdes: `A full E-Commerce Amazon Clone which built using ReactJS.
      You can Register , Sign In , and shop.
      In this Amazon Clone application you can register on the site , log in with your Account , buy some products , see your products in yor Cart.
      I am building Linkedin Clone from Scratch with the help of React js, Redux, Material UI Icons and Firebase.
      Features : 1. Accounts and Login Page 👨
       2. Products Page 📦
       3. Cart and Checkout Page 🛒
       4. Deploy the project on firebase.
      `,
      pstack:  'REACT, REDUX , HTML, CSS,MATRIAL UI,FIREBASE,',
      plive: 'https://clone-e610c.web.app/',
      psource: 'https://github.com/omkartalekar/Amazon-Clone-Done',
    },

    
  ]

  return (
    <>
      <div className="app">
        <div id="tops"></div>
        <div className="top">
          <a href="#tops">
            <TbArrowTopSquare />
          </a>
        </div>
        {/* ================= Header ================= */}
        <Header />

        {/* ============= Intro ====================== */}
        <div id="intro" className="intro">
          <h3  >
            Hi, I am <span>Omkar Talekar</span>
          </h3>
          <h1 >Frontend Web Developer & Freelancer </h1>
          <p>I create beautiful responsive websites, and I love what I do.</p>

          <div className="introimg">
            <img src={intro} alt="" />
          </div>
        </div>

        {/*============== about ================ */}
        <div id="about" className="about" >
          <div className="atext">
            <h3>About Me</h3>
            <p>
              Hello I’m Omkar Talekar a developer who has passion for building
              clean web applications with intuitive functionality. I enjoy the
              process of turning ideas into reality using creative solutions.
              I’m always curious about learning new skills, tools, and concepts.
            </p>{" "}
            <br />
            <p>
              {" "}
              I’m currently looking for a position as a Frontend Developer / Software Engineer / Java Developer in an
              estemeed organization where I can learn and grow with the company.
              I’m open for learning and solving challenges using my skills and
              provide value to the growth of an organization.
            </p>
            <div className="abtn" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" >
              <a
                target="_blank" rel="noreferrer"
                href="https://www.linkedin.com/in/omkar-talekar-19b025211/"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="aimg">
            <img src={about} alt="" />
          </div>
        </div>
        {/* ============= Skills ============= */}
        <div id="skills" className="skills" >
          <div className="stext">
            <h3>My Skills</h3>
            <p>
              I build simple, intuitive and responsive user interface with
              latest technologies that helps users get things done with less
              effort and time.
            </p>
            <div className="sbtn" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" >
              <a
                 target='_blank'
                href="https://drive.google.com/file/d/15iFceIABI00HWqBStwRX2Hpkik3d-dgx/view?pli=1"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="simg" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" >
            <div className="scon">
              <div className="box" >
                <SiHtml5 />
              </div>
              <div className="box" >
                <SiCss3 />
              </div>
              <div className="box" >
                <SiJavascript />
              </div>
              {/* <div className="box" >
                <SiBootstrap />
              </div> */}
              <div className="box" >
                <SiReact />
              </div>
              <div className="box" >
              <SiNodedotjs />
              </div>
              <div className="box" >
              <SiExpress />
              </div>
              <div className="box" >
              <SiMongodb />
              </div>

              <div className="box" >
                <SiMysql />
              </div>
              
              <div className="box" >
                <SiMaterialui />
              </div>
              <div className="box" >
                <SiGit />
              </div>
            </div>
          </div>
        </div>

        {/* ============= work =============== */}
        <div className="work" id="work" >
          <h3>My Works</h3>
          <div className="wcardcon">
            {wdata.map((elem) => (
              <Work pname={elem.pname} pdes={elem.pdes} pstack={elem.pstack} plive={elem.plive} psource={elem.psource} />
            ))

            }

          </div>
        </div>
        {/* ============= connect ============= */}

        <div className="pconnect" >
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150" className="cbox">
            <h3>Start a Project</h3>
            <p>Interested in Working Together ??</p>
            <a target='_blank' href="https://www.linkedin.com/in/omkar-talekar-19b025211/" rel="noreferrer" >Lets do this</a>
          </div>
        </div>

        {/* ============= Footer ============== */}

        <Footer />
      </div>
    </>
  );
}

export default App;
