import "./Rewind.css";

const ProfleHolder = (props) => {
  return (
    <div className="profile-container">
      <a href={props.speaker_link} target="__blank">
        <img src={props.speaker_img} width="100px" height="100px" />
        <div className="middle">
          <div className="text">{props.speaker_name}</div>
        </div>
      </a>
    </div>
  );
};

const YearCardRight = (props) => {
  return (
    <div className="newspaper__content">
      <div className="newspaper__image">
        <img
          src={props.edition_img}
          alt="Newspaper Image"
          width="320px"
          height="250px"
        />
        <div className="newspaper__content-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="newspaper__right">
        <div className="newspaper__header--1">{props.edition_name}</div>
        <author className="newspaper__author">by TEDxNIIT University</author>
        <div className="newspaper__profile-images">
          <ProfleHolder
            speaker_img={props.speaker_img1}
            speaker_name={props.speaker_name1}
            speaker_link={props.speaker_link1}
          />
          <ProfleHolder
            speaker_img={props.speaker_img2}
            speaker_name={props.speaker_name2}
            speaker_link={props.speaker_link2}
          />
          <ProfleHolder
            speaker_img={props.speaker_img3}
            speaker_name={props.speaker_name3}
            speaker_link={props.speaker_link3}
          />
          <ProfleHolder
            speaker_img={props.speaker_img4}
            speaker_name={props.speaker_name4}
            speaker_link={props.speaker_link4}
          />
          <ProfleHolder
            speaker_img={props.speaker_img5}
            speaker_name={props.speaker_name5}
            speaker_link={props.speaker_link5}
          />
          <ProfleHolder
            speaker_img={props.speaker_img6}
            speaker_name={props.speaker_name6}
            speaker_link={props.speaker_link6}
          />
          <ProfleHolder
            speaker_img={props.speaker_img7}
            speaker_name={props.speaker_name7}
            speaker_link={props.speaker_link7}
          />
          <ProfleHolder
            speaker_img={props.speaker_img8}
            speaker_name={props.speaker_name8}
            speaker_link={props.speaker_link8}
          />
          <ProfleHolder
            speaker_img={props.speaker_img9}
            speaker_name={props.speaker_name9}
            speaker_link={props.speaker_link9}
          />
          <ProfleHolder
            speaker_img={props.speaker_img10}
            speaker_name={props.speaker_name10}
            speaker_link={props.speaker_link10}
          />
        </div>
      </div>
    </div>
  );
};

const YearCardLeft = (props) => {
  return (
    <div class="newspaper__content">
      <div class="newspaper__right">
        <div class="newspaper__header--1">{props.edition_name}</div>
        <div class="newspaper__author">by TEDxNIIT University</div>
        <div class="newspaper__profile-images">
          <ProfleHolder
            speaker_img={props.speaker_img1}
            speaker_name={props.speaker_name1}
            speaker_link={props.speaker_link1}
          />
          <ProfleHolder
            speaker_img={props.speaker_img2}
            speaker_name={props.speaker_name2}
            speaker_link={props.speaker_link2}
          />
          <ProfleHolder
            speaker_img={props.speaker_img3}
            speaker_name={props.speaker_name3}
            speaker_link={props.speaker_link3}
          />
          <ProfleHolder
            speaker_img={props.speaker_img4}
            speaker_name={props.speaker_name4}
            speaker_link={props.speaker_link4}
          />
          <ProfleHolder
            speaker_img={props.speaker_img5}
            speaker_name={props.speaker_name5}
            speaker_link={props.speaker_link5}
          />
          <ProfleHolder
            speaker_img={props.speaker_img6}
            speaker_name={props.speaker_name6}
            speaker_link={props.speaker_link6}
          />
          <ProfleHolder
            speaker_img={props.speaker_img7}
            speaker_name={props.speaker_name7}
            speaker_link={props.speaker_link7}
          />
          <ProfleHolder
            speaker_img={props.speaker_img8}
            speaker_name={props.speaker_name8}
            speaker_link={props.speaker_link8}
          />
          <ProfleHolder
            speaker_img={props.speaker_img9}
            speaker_name={props.speaker_name9}
            speaker_link={props.speaker_link9}
          />
          <ProfleHolder
            speaker_img={props.speaker_img10}
            speaker_name={props.speaker_name10}
            speaker_link={props.speaker_link10}
          />
        </div>
      </div>
      <div class="newspaper__image">
        <img
          src={props.edition_img}
          alt="Newspaper Image"
          width="320px"
          height="250px"
        />
        <div class="newspaper__content-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default function Rewind() {
  return (
    <div className="rewind">
      <div class="newspaper">
        <div class="header_rewind">
          <div class="header__banner">
            <div class="header__banner__left">★ ★ ★ ★ ★</div>
            <div class="header__banner__title">REVISIT THE PAST EVENTS</div>
            <div class="header__banner__right">★ ★ ★ ★ ★</div>
          </div>
          <div class="header__title">
            <span className="header-title">The</span>
            <span className="header-title">TedX</span>
            <span className="header-title">Times</span>
          </div>
          <div class="newspaper__subheader">
            <div class="divider"></div>
            <div class="newspaper__subheader__content">
              <span>Neemrana, Rajasthan</span>
              <span>Wednesday January 4</span>
              <span>7 Pages</span>
            </div>
            <div class="divider"></div>
          </div>
        </div>
        <YearCardRight
          edition_name="T.H.I.N.C - 2023"
          edition_img="./rewind/23.png"
          edition_descp=""
          speaker_img1=""
          speaker_name1=""
          speaker_img2=""
          speaker_name2=""
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
        <YearCardLeft
          edition_name="Parvaaz: Azaad, Aagaaz, Aseem - 2022"
          edition_img="./rewind/22.png"
          edition_descp=""
          speaker_img1="./rewind/Parvaaz/Author_sherry.jpg"
          speaker_name1="Author Sherry"
          speaker_link1=""
          speaker_img2=""
          speaker_name2="Maj Gen (Dr) Bipin Bakshi"
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
        <YearCardRight
          edition_name="Swadhyaya - 2021"
          edition_img="./rewind/21.png"
          edition_descp=""
          speaker_img1=""
          speaker_name1=""
          speaker_img2=""
          speaker_name2=""
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
        <YearCardLeft
          edition_name="QUO VADIS - 2020"
          edition_img="./rewind/20.jpg"
          edition_descp=""
          speaker_img1=""
          speaker_name1=""
          speaker_img2=""
          speaker_name2=""
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
        <YearCardRight
          edition_name="Sparking Metanoia - 2021"
          edition_img="./rewind/19.jpg"
          edition_descp=""
          speaker_img1=""
          speaker_name1=""
          speaker_img2=""
          speaker_name2=""
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
        <YearCardLeft
          edition_name="The Precipice, On the Brink of Change - 2018"
          edition_img="./rewind/18.jpg"
          edition_descp=""
          speaker_img1=""
          speaker_name1=""
          speaker_img2=""
          speaker_name2=""
          speaker_img3=""
          speaker_name3=""
          speaker_img4=""
          speaker_name4=""
          speaker_img5=""
          speaker_name5=""
          speaker_img6=""
          speaker_name6=""
          speaker_img7=""
          speaker_name7=""
          speaker_img8=""
          speaker_name8=""
          speaker_img9=""
          speaker_name9=""
          speaker_img10=""
          speaker_name10=""
        />
      </div>
    </div>
  );
}
