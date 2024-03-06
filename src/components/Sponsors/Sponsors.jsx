import "./Sponsors.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const SponsorCard = (props) => {
  return (
    <div
      className="sponsor-card-wrap"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="card-grid-space">
        <div className="sponsor-title">{props.sponsor_title}</div>
        <a
          className="sponsor-card"
          style={{
            backgroundImage: props.sponsor_img,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div>
            <div className="sponsor-content">
              <p>{props.sponsor_content}</p>
            </div>
            <div className="ted-title">TEDxNIITUniversity</div>
            <div className="tags">
              <div className="tag">{props.sponsor_name}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default function Sponsors() {
  return (
    <div className="sponsors">
      <SponsorCard
        sponsor_title="Insight Partner"
        sponsor_name="Rallision Wires and Cables"
        sponsor_content=""
        sponsor_img="url(./sponsors/Rallison.png)"
      />
      <SponsorCard
        sponsor_title="Insight Partner"
        sponsor_name="Servo Lubricants and Greases"
        sponsor_content="Servo: Servo, a subsidiary of Indian Oil Corporation, epitomizes excellence and sustainability in India's energy sector. With a customer-centric approach, they deliver top-notch solutions across the hydrocarbon value chain, fueling India's progress and development. Guided by integrity and innovation, they are dedicated to shaping a sustainable future while meeting the evolving energy needs of the nation.
        As the world grapples with environmental challenges, sustainability takes center stage in Servo's operations. With a deep sense of responsibility towards the environment and society, Servo invests in cutting-edge technologies and practices that minimize its ecological footprint. 
        In essence, Servo isn't just a subsidiary of Indian Oil Corporation; it's a symbol of India's resilience, ingenuity, and progress."
        sponsor_img="url(./sponsors/servo.jpg)"
      />
      <SponsorCard
        sponsor_title="Travel Partner"
        sponsor_name="Bustro"
        sponsor_content=""
        sponsor_img="url(./sponsors/Bustro.png)"
      />
      <SponsorCard
        sponsor_title="Change Catalyst Partner"
        sponsor_name="Stud Cops"
        sponsor_content=""
        sponsor_img="url(./sponsors/StudCops.png)"
      />
      <SponsorCard
        sponsor_title="Change Catalyst Partner"
        sponsor_name="Nescafe"
        sponsor_content=""
        sponsor_img="url(./sponsors/nescafe.jpg)"
      />
      <SponsorCard
        sponsor_title="Change Catalyst Partner"
        sponsor_name="Ravi Aggarwarl Global Rockstar"
        sponsor_content=""
        sponsor_img="url(./sponsors/rav.png)"
      />
      <SponsorCard
        sponsor_title="Change Catalyst Partner"
        sponsor_name="BCH"
        sponsor_content=""
        sponsor_img="url(./sponsors/bch.png)"
      />
      <SponsorCard
        sponsor_title="Change Catalyst Partner"
        sponsor_name="GDX"
        sponsor_content=""
        sponsor_img="url(./sponsors/GDX.png)"
      />
      <SponsorCard
        sponsor_title="Safety Partner"
        sponsor_name="Boombird"
        sponsor_content=""
        sponsor_img="url(./sponsors/boombird.png)"
      />
    </div>
  );
}
