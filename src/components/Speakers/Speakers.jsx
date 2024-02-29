import { useState } from "react";
import "./Speakers.css";

const DummyData = (name) => {
  return <div className="speaker--card"></div>;
};

const SpeakerCards = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="speaker--card" onClick={handleClick}>
      <div className="speaker--item">
        <img className="speaker--image spk" src={props.speaker_img} alt="" />
      </div>
      <div className="speaker--text-wrapper">
        <div className="speaker--name grid">{props.firstname}</div>
        <div className="speaker--name grid">{props.secondname}</div>
      </div>
      <div
        className="speaker-overlay-wrapper"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="speaker-overlay">
          <div className="speaker-overlay-img">
            <img
              src={props.speaker_img}
              className="speaker-image-main"
              alt=""
            />
            <div className="black-fade-gradient">
              <div className="speaker-name">
                {props.firstname} {props.secondname}
              </div>
            </div>
            <div className="text-overlay-wrapper">
              <div className="white-line"></div>
              <div className="speaker-about">{props.speaker_about}</div>
            </div>
          </div>
        </div>
        <div className="blur-bg"></div>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <div className="speakers">
      <div className="speaker--grid grid">
        <SpeakerCards
          firstname="Nikita"
          secondname="Sharma"
          speaker_img="./speakers/nikita.JPG"
          speaker_about="Nikita Sharma is a Motivational Speaker, social media influencer, and fitness enthusiast. She has been felicitated by the Government of India as a Cultural Ambassador of the Nation. Her accolades include prestigious awards such as The Young Woman Achiever Award 2017 and the Exceptional Woman Of Excellence Award 2019, received at the International Women Economic Forum. Notably, she was recently invited to speak at the International Reliance Jio platform, helmed by Mr. Mukesh Ambani, for their Jio Talks, where she delivered a compelling speech on 'Body Positivity. As the Founder & Director of Silver Linings Organization, Nikita has established herself as a prominent figure in advocating for body positivity"
        />
        <SpeakerCards
          firstname="Dr. Vijendra"
          secondname="Chauhan"
          speaker_img="./speakers/vijender.JPG"
          speaker_about="Dr. Vijender Singh Chauhan, an Associate Professor at Zakir Husain Delhi College, DU, boasts over 15 years of teaching experience at Delhi University.He also interviews the best and brightest at Drishti IAS coaching center and played an important role in shaping the future of many UPSC aspirants. Moreover, as a distinguished writer, he has received national and state awards for his creative works, including three books and numerous articles. Beyond academia, his interests include walking, traveling, and active engagement in social activism. In the UPSC mentoring domain, he stands out as an industry leader, recognized for his contributions in guiding and mentoring interviews for over two decades. With over 1.2 million followers on Instagram and 400,000 subscribers on YouTube, "
        />
        <SpeakerCards
          firstname="Gaurav"
          secondname="Juyal"
          speaker_img="./speakers/Gaurav.JPG"
          speaker_about="Gaurav Juyal, an esteemed figure in the realm of creativity and education, is renowned as the host of Art Attack India, a popular show that celebrates art and imagination. He is also an Ex-Learning Experience Designer at BYJU and one of the founding faculty at JK Lakshmipat University. Gaurav is an alumnus of the National Institute of Design. His specialization areas include design foundation studies, material intelligence, animation, student-centric curriculum development, art integration, multi-disciplinary learning, and student culture in academic systems."
        />
        <SpeakerCards
          firstname="Nirbhik"
          secondname="Datta"
          speaker_img="./speakers/nirbhik.jpg"
          speaker_about="Nirbhik Datta, a renowned magician and mentalist, showcases his exceptional talents in mind reading and mind control through Instagram magic videos. His recent event hosting Road and Transport Minister Nitin Gadkari underscores his prominence in the field. Datta gained widespread attention for uncovering the ATM pin of Harsh Beniwal using mind-reading techniques. With over a decade of experience, he creates illusions of reading and influencing minds, captivating audiences with his performances. Datta graduated from VIT Vellore with a B.Tech in Computer Science.
          "
        />
        <SpeakerCards
          firstname="Padamjeet"
          secondname="Sehrawat"
          speaker_img="./speakers/Padamjeet.JPG"
          speaker_about="From a Ranji Player representing Haryana to a revered sports commentator Padamjeet Sehrawat's journey has been truly remarkable. With over 3000 shows anchored on prestigious channels like Star Sports, Sony Six, and Ten Sports, he has lent his expert voice to a multitude of sporting events, including the Pro Kabaddi League, Indian Premier League, Wimbledon Championships, and the Olympics. Beyond his prowess in sports, his musical talent shines through with over 200 penned songs, culminating in the celebrated album 'India Hai Meri Jaan,'' featuring an impressive lineup of 42 celebrities.
          "
        />
        <SpeakerCards
          firstname="Shivani"
          secondname="Kalra"
          speaker_img="./speakers/Shivani.JPG"
          speaker_about="Capt. Shivani Kalra is an extraordinary aviator whose journey from overcoming setbacks in the global economic recession to becoming the Queen of Evacuation during the pandemic and Russia-Ukraine war, made her a symbol of resilience. Breaking barriers in a male-dominated field, her unwavering belief in herself, supported by her family, has propelled her to the position of a stellar pilot with Air India. This inspiring story urges us all to dream bigger, encapsulated in her mantra: 'My true passion is – setting a goal, achieving it, and then giving myself a bigger goal.'"
        />
        <SpeakerCards
          firstname="Siddharth"
          secondname="Jain"
          speaker_img="./speakers/sid.jpg"
          speaker_about="Sidharth Jain is a luminary in the Indian Entertainment Industry with a career spanning over two decades. The visionary founder of The Story Ink, India's largest Screen Adaptation Company, this individual has orchestrated the adaptation of 200+ books across 50+ Production Houses, representing 250+ Authors. The recent success of House of Talkies, marked by the Netflix-commissioned series 'Trial By Fire,' further cements his impact on the industry. Formerly a key figure at Hotstar.com during India's rise in the OTT content space, this person has produced groundbreaking films like India's first digitally-shot-theatrical-found-footage horror film 'Ragini MMS' in 2002 and the international hit 'Marigold' in 2003.
          "
        />
        <SpeakerCards
          firstname="Navin"
          secondname="Reddy"
          speaker_img="./speakers/navin.jpg"
          speaker_about="Navin Reddy, a YouTube sensation with 2 million subscribers and more than 1 billion views, is a luminary in the tech world. As the Founder and CEO of Telusko EduTech Pvt Ltd, his expertise spans Java, Blockchain, Python, Scala, Kotlin, AWS, and more. Having trained industry giants like JP Morgan Chase and Accenture, he has left an indelible mark on the tech community. A TEDx and international speaker, he often emphasizes, 'We don't teach, we educate,' reflecting his commitment to a holistic learning experience. 
          "
        />
        <SpeakerCards
          firstname="Vipin"
          secondname="Kumar Mishra"
          speaker_img="./speakers/vipin.jpg"
          speaker_about="Vipin Mishra is an acclaimed National Award-winning film composer and multifaceted artist hailing from Mumbai, India. His exceptional work on films like 'Aurangzeb' and 'Ghayal Once Again,' along with the critically acclaimed Netflix series 'Powder,' has left an indelible mark. As the co-founder of Songbird Studios, he has created a musical haven in Mumbai. His independent work under the name 'Vipin Mishra Project' showcases diverse musical talents on platforms like YouTube and Spotify. Former guitarist for 'Parikrama' and a collaborator with 'Silk Route.'"
        />
        <SpeakerCards
          firstname="Akshay"
          secondname="Chopra"
          speaker_img="./speakers/akshay.jpg"
          speaker_about="Akshay Chopra, a National Defence Academy and Air Force Academy graduate, served as a pilot and captain of the Air Force Bodybuilding team. A versatile figure, he is not only a prolific writer with numerous articles and eBooks but also an engaging speaker who has addressed diverse audiences nationwide. As a fitness entrepreneur, he founded WE R Stupid and Genesis, and co-founded Mango Herbs, earning him the Business World 40 under 40 award. Akshay's distinguished military background seamlessly combines with his entrepreneurial spirit, making him a notable figure inspiring across various platforms."
        />
        <DummyData />
        <SpeakerCards
          firstname="Devyani"
          secondname="Sharma"
          speaker_img="./speakers/devyani.jpg"
          speaker_about="Devyani Sharma seamlessly blends her passion for Odissi dance and devotion to Lord Krishna with her professional expertise in data science. As the Artistic Director of KalaTattva, her Odissi dance company, she brings a unique perspective, drawing from four years of training in the lineage of Guru Kelucharan Mohapatra. Devyani's innovative choreography reflects her artistic illustrations, portraying the rich cultural heritage and Vedic Indian wisdom. Beyond the stage, she is a skilled musician, playing Bengal Khol, cymbals, harmonium, and singing devotional songs. Professionally affiliated with WIPRO and VIT, she excels in the integrated field of data science, embodying a harmonious balance between artistic expression and analytical prowess.
          "
        />
        <SpeakerCards
          firstname="Aditya"
          secondname="Goela"
          speaker_img="./speakers/aditya.jpg"
          speaker_about="Aditya Goela, CFA is the co-founder of Goela School of Finance since 2015, combining technical expertise and fundamental research, aiming to simplify stock market concepts for both informed and novice investors. With 482 graduates, GSF has conducted seminars in top colleges across India. Aditya's journey began with recognizing the importance of market timing and mastering both technical and fundamental analysis. With over 6 years of experience, he is a CFA program graduate and a specialist in the derivatives market, contributing to finance course development at GSF. Aditya's commitment to continuous learning is evident in his out-of-classroom approach and co-authorship of the e-book 'Stock Market: A Disaster Waiting to Happen.'"
        />
        <SpeakerCards
          firstname="Dr. Kousar"
          secondname="Shah"
          speaker_img="./speakers/kausar.jpg"
          speaker_about="Dr. Kousar Shah has been the Senior Vice President at Max Healthcare in New Delhi since February 2022. Before this, he held the position of Group Chief Operating Officer at AHPL (Aakash Healthcare) in the NCR region from August 2019 to February 2022. Before that, he spent 3 years as Zonal Director at Fortis Healthcare, overseeing operations in Noida and Faridabad. Dr Shah is also a health care visionary and a great speaker who aims to motivate and inspire people with his work. In addition to his corporate roles, Dr. Shah is a respected author, public speaker, and new leaders developer, sharing insights on leadership, business maximization, spirituality, and personal development. As an NLP-certified professional, he brings a unique perspective to leadership development, blending practical strategies with mindfulness and emotional intelligence."
        />
      </div>
    </div>
  );
}
