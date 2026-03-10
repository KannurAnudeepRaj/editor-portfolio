import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

import video1 from "../../assets/videos/edit1.mp4";
import video2 from "../../assets/videos/video2.MP4";
import video3 from "../../assets/videos/video3.MP4";
import video4 from "../../assets/videos/video4.MP4";
import video5 from "../../assets/videos/video5.mp4";

export function Project() {
  return (
    <Container id="project">
      <h2>My Work</h2>

      <div className="projects">

        {/* VIDEO 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <video width="100%" height="200px" controls>
              <source src={video1} type="video/mp4" />
            </video>
            <div className="body">
              <h3>Cinematic Edit</h3>
              <p>This project is a dance cover for the song "Pranavalaya" from the film Shyam Singha Roy. I contributed as the assistant cinematographer during filming and was responsible for the post-production process, including editing and color grading, to create a polished and visually engaging final video.</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* VIDEO 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <video width="100%" height="200px" controls>
              <source src={video2} type="video/mp4" />
            </video>
            <div className="body">
              <h3>Bride's Interview Segment</h3>
              <p>This is one of the many wedding films I’ve worked on. The video features an interview segment from the bride’s family, focusing on emotional storytelling and personal memories. My work involved shaping the narrative through editing to create a meaningful and engaging wedding film.</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* VIDEO 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <video width="100%" height="200px" controls>
              <source src={video3} type="video/mp4" />
            </video>
            <div className="body">
              <h3>Wedding emotions track</h3>
              <p>For this wedding film, my goal was to showcase the joy and emotional energy of the celebration. Through carefully paced editing and thoughtfully chosen music, I shaped the footage into a heartfelt story that reflects the happiness and memorable moments of the day.</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* VIDEO 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <video width="100%" height="200px" controls>
              <source src={video4} type="video/mp4" />
            </video>
            <div className="body">
              <h3>The Story The Sound tells</h3>
              <p>In this wedding film, I explored how music plays a central role in storytelling. By carefully selecting and syncing the soundtrack with the visuals, I used music to guide the emotional journey and strengthen the narrative of the film.</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* VIDEO 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <video width="100%" height="200px" controls>
              <source src={video5} type="video/mp4" />
            </video>
            <div className="body">
              <h3>3D Motion Graphics</h3>
              <p>Motion graphics and VFX created using Blender and After Effects.</p>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}