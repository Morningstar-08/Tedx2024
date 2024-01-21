import "./Aboutus.css";

const Card = (props) => {
  return (
    <div className="aboutus">
      <div className="card">
        <div className="front">
          <img src={props.profile} />
          <div className="details">
            <h1>{props.name}</h1>
            <span>{props.position}</span>
          </div>
        </div>
        <div className="back">
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default function Aboutus() {
  return (
    <div className="aboutus--container">
      <div className="row">
        <Card
          profile="./logo2.png"
          name="S. Aadhira"
          position="Organizer"
          description="Hello i am aadhiraaaa"
        />
        <Card
          profile="./logo2.png"
          name="Jigme Choden"
          position="Co-Organizer"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Agnishwar Raychaudhuri"
          position="Ediotrial and Speaker's Experience Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Khushi Singh"
          position="Sponsorship Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Srachet Rai"
          position="Design Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Sarabjoth Singh Bhatia"
          position="Production Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Swastik Tripathy"
          position="Tech Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Mohit Srivastava"
          position="Creative Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Nalin Kaul"
          position="Social Media Core"
          description=""
        />
        <Card
          profile="./logo2.png"
          name="Ayush Ranjan"
          position="Capture and Post Production Core"
          description=""
        />
      </div>
    </div>
  );
}
