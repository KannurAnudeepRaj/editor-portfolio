import { Container } from "./styles";
import AnudeepRaj from "../../assets/Anudeep Raj.png";
import PremierePro from "../../assets/adobe-premiere-svgrepo-com.svg"
import AfterEffects from "../../assets/adobe-after-effects-svgrepo-com.svg"
import Fcp from "../../assets/final_cut_pro_macos_bigsur_icon_190177.png";
import Davinci from "../../assets/Davinci.svg";
import Blender from "../../assets/blender-svgrepo-com.svg";
import LightRoom from "../../assets/adobe-lightroom-svgrepo-com.svg";
import Photoshop from "../../assets/adobe-photoshop-svgrepo-com.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import Illustrator from "../../assets/adobe-illustrator-svgrepo-com.svg";
import Dream from "../../assets/adobe-dreamweaver-svgrepo-com.svg";
import CA from "../../assets/adobe-character-animator-icon.svg";
import Animate from "../../assets/adobe-animate-svgrepo-com.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I'm Anudeep Raj Kannur, a video editor and visual creator with 5+ years of experience in video editing, motion graphics, VFX, and 3D design. I create engaging visual content ranging from cinematic edits and animations to social media visuals and live stream productions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I’m experienced with tools such as Premiere Pro, After Effects, DaVinci Resolve, Blender, Final Cut Pro, Adobe Animate, Photoshop, and Illustrator. I also integrate Gen AI tools and prompt engineering techniques to speed up workflows and push creative boundaries.
          </p>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Video Editor • 3D Artist • Assistant Cinematographer</h4>
            <p>VIVADI FILMS | 2020 - 2022</p>
            <p>Hyderabad, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={PremierePro} alt="Adobe Premiere Pro" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={AfterEffects} alt="Adobe After Effects" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={Fcp} alt="Final Cut Pro" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={Davinci} alt="DaVinci Resolve" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={Blender} alt="Blender" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={Photoshop} alt="Photoshop" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={LightRoom} alt="Adobe Lightroom" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={Illustrator} alt="Adobe Illustrator" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={Dream} alt="Adobe Dreamweaver" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={CA} alt="Adobe Character Animator" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={Animate} alt="Adobe Animate" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={AnudeepRaj} alt="Anudeep Raj" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
