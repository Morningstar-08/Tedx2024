import "./Aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Card = (props) => {
  return (
    <div
      className="aboutus"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
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
    <div className="aboutus">
      <div className="aboutus--container">
        <h1 className="title-team">ORGANISING TEAM 2024</h1>
        <div className="row">
          <Card
            profile="./core/aadhira.jpg"
            name="S. Aadhira"
            position="Organizer"
            description="Aadhira radiates a vibrant personality akin to a burst of confetti. Her infectious laughter and quirky yet pure demeanor effortlessly puts everyone at ease. She possesses a myriad of contrasting yet harmonious qualities that render her truly awesome. With grace as her companion, she stands as a beacon of confidence in her public speaking endeavors."
          />
          <Card
            profile="./core/jigme.jpg"
            name="Jigme Choden"
            position="Co-Organizer"
            description="Meet Jigme Choden the co-organizer of TEDxNIITUniversity,  a truly kind and caring individual. She's disciplined, hardworking, and knows how to balance politeness with assertiveness when required. Not only is she talented in various areas, but she's also a dedicated athlete who takes good care of her health. Always putting others first, she has a heart for people's well-being."
          />
          <Card
            profile="./core/agni.jpg"
            name="Agnishwar Raychaudhuri"
            position="Ediotrial Speaker's Experience Core"
            description="With a heart full of warmth and a razor-sharp wit, he infuses every project with a unique energy. From crafting compelling narratives to articulating complex concepts with clarity, his editorial ability is not just a skill but a form of art. A true maestro of the written word, he leaves an indelible mark with every stroke of the pen. 
            Beyond crafting words he has meticulous attention to detail and an innate talent for organization, he has a unique knack for understanding the pulse of an event, ensuring that each moment unfolds effortlessly. "
          />
          <Card
            profile="./core/khushi.JPG"
            name="Khushi Singh"
            position="Sponsorship Core"
            description="Little Khushi found joy in managing her own finances and mastering money management—an impressive knack. As the core for Sponsorship for TEDxNIITUniversity'24, Khushi Singh consistently wears the brightest smiles, embodying the team's caring 'mother figure.' Known for her straightforward approach, excellent communication, and caring demeanor, Khushi stands out."
          />
          <Card
            profile="./core/srachet.jpg"
            name="Srachet Rai"
            position="Design Core"
            description="Srachet Rai, the renowned Design Guru of TEDxNIITUniversity, possesses an exceptional flair for design that sets him apart in the field. His innate ability to craft compelling designs is truly extraordinary. His talent and expertise in design principles and technical prowess make him a true visionary. With an extensive command of various design technologies, there is no challenge too daunting for him to tackle."
          />
          <Card
            profile="./core/sarab.jpg"
            name="Sarabjoth Singh Bhatia"
            position="Production Core"
            description="Sarab is the driving force of exceptional leadership, exuding a resolute 'can-do' attitude that serves as a constant inspiration. Universally admired for his positive spirit, Sarab fearlessly tackles tasks, establishing himself as a reliable and empathetic team member. His unique ability to efficiently achieve tasks with cost-effective solutions showcases his resourcefulness and sets him apart in the realm of productivity."
          />
          <Card
            profile="./core/swastik.jpg"
            name="Swastik Tripathy"
            position="Tech Core"
            description="Picture someone deeply in love with continuous learning, whose passion for technology aligns with a commitment to bring out the best not only in themselves but also in those around them. Meet Swastik Tripathy, a tech enthusiast par excellence.
            Swastik has immersed himself in the world of coding and all things tech since middle school. His expertise extends beyond creating websites from scratch to a strong command of coding languages, including Flutter and React."
          />
          <Card
            profile="./core/mohit.jpg"
            name="Mohit Srivastava"
            position="Creative Core"
            description="Mohit Srivastava, the creative force behind TEDxNIlTUniversity's Creative Core, not only transforms artistic visions into awe-inspiring reality but also cultivates an atmosphere of collaboration and camaraderie. His paintings, each a vibrant narrative of water and color, reflect not just his artistic prowess but also his unparalleled passion for storytelling. Mohit's rock-solid discipline and exceptional work ethic, coupled with his leadership skills, make him more than a professional—he is a visionary who elevates the entire creative process."
          />
          <Card
            profile="./core/nalin.jpg"
            name="Nalin Kaul"
            position="Social Media Core"
            description="Nalin Kaul, the driving force behind TEDxNIITUniversity's Marketing team, is a dedicated and hardworking professional with a remarkable ability to solve challenges effortlessly. His consistent efforts have proven invaluable to the team's success. Nalin is not only a warm and caring leader but also an individual with unwavering determination, firmly believing that any goal is achievable with perseverance."
          />
          <Card
            profile="./core/ranjan.jpg"
            name="Ayush Ranjan"
            position="Capture and Post Production Core"
            description="Ayush Ranjan - this person stands out as a beacon of support, always ready to extend a helping hand to those in need. Their approach to assistance makes every interaction an opportunity to make a positive impact. Infused with an infectious sense of humor, he effortlessly turns dull moments into joyous occasions, leaving a trail of smiles in their wake."
          />
        </div>
        <div className="about-box">
          <div className="about-who">
            <div className="about-what">
              <h1 className="about-heading">
                What is<span className="ted-red">TEDx</span>?
              </h1>
              <p>
                In the spirit of ideas worth spreading, TED has created a
                program called TEDx. TEDx is a program of local, self-organized
                events that bring people together to share a TED-like
                experience. Our event is called TEDxNIITUniversity, where x =
                independently organized TED event.
              </p>
            </div>
            <div className="about-tedx">
              <h1 className="about-heading">
                About<span className="ted-red">TEDx</span>
              </h1>
              <p>
                In the spirit of ideas worth spreading, TEDx is a program of
                local, self-organized events that bring people together to share
                a TED-like experience. At a TEDx event, TED Talks video and live
                speakers combine to spark deep discussion and connection. These
                local, self-organized events are branded TEDx, where x =
                independently organized TED event. The TED Conference provides
                general guidance for the TEDx program, but individual TEDx
                events are self-organized.
              </p>
            </div>
          </div>
          <div className="about-ted">
            <h1 className="about-heading">
              About<span className="ted-red">TEDx</span>
            </h1>
            <p>
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman.
              <br />
              <br />
              The annual TED Conference takes place each spring in Vancouver,
              British Columbia. TED’s media initiatives include TED.com, where
              new TED Talks are posted daily; TED Translators, which provides
              subtitles and interactive transcripts as well as translations from
              volunteers worldwide; the educational initiative TED-Ed. TED has
              established The Audacious Project that takes a collaborative
              approach to funding ideas with the potential to create change at
              thrilling scale; TEDx, which supports individuals or groups in
              hosting local, self- organized TED-style events around the world,
              and the TED Fellows program, helping world-changing innovators
              from around the globe to amplify the impact of their remarkable
              projects and activities. Follow TED on Twitter
              http://twitter.com/TEDTalks or on Facebook at
              http://www.facebook.com/TED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
