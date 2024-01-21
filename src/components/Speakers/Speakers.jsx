import "./Speakers.css";

const SpeakerCards = () => {
  return (
    <div className="speaker--card">
      <div className="speaker--item">
        <img className="speaker--image spk" src="./nikita.png" alt="" />
      </div>
      <div className="speaker--text-wrapper">
        <div className="speaker--name grid">Nikita</div>
        <div className="speaker--name grid">Sharma</div>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <div className="speakers">
      <div className="speaker--grid">
        <SpeakerCards />
        <SpeakerCards />
      </div>
    </div>
  );
}
