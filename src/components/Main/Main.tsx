import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
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

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": PremierePro,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": AfterEffects,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Animate,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Fcp,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Davinci,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Blender,
                  "width": 20,
                  "height": 20
                },
                // {
                //   "src": mysqlIcon,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  "src": Photoshop,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": LightRoom,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Illustrator,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": Dream,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": CA,
                  "width": 20,
                  "height": 20
                },
                // {
                //   "src": vscodeIcon,
                //   "width": 20,
                //   "height": 20
                // },
                {
                  "src": Animate,
                  "width": 20,
                  "height": 20
                },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}