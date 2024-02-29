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
        sponsor_name="Indian Oil Corporation"
        sponsor_content=""
        sponsor_img="url(./sponsors/IOCL.png)"
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
