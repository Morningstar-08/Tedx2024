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
          speaker_name2="Maj Gen (Dr) Bipin Bakshi"
          speaker_img2="./rewind/Parvaaz/MajGenDrBipin_Bakshi.jpg"
          speaker_link2=""
          speaker_name3="Harish Mehta"
          speaker_img3="./rewind/Parvaaz/Harish_Mehta.jpg"
          speaker_link3="https://www.youtube.com/watch?v=u4KNmBXKe-4"
          speaker_name4="Kevin Missal"
          speaker_img4="./rewind/Parvaaz/kevin_missal.jpg"
          speaker_link4="https://www.youtube.com/watch?v=LOwVLyPCdgM&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=7"
          speaker_name5="Lakshay Jangid"
          speaker_img5="./rewind/Parvaaz/lakshay.jpg"
          speaker_link5="https://www.youtube.com/watch?v=7sXgpj_Co9I&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=5"
          speaker_name6="Ridhi Khakhar"
          speaker_img6="./rewind/Parvaaz/ridhi.jpg"
          speaker_link6="https://www.youtube.com/watch?v=fA6ady8Xrq8&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=9"
          speaker_name7="Sagar Lalwani"
          speaker_img7="./rewind/Parvaaz/Sagar_Lalwani.jpg"
          speaker_link7="https://www.youtube.com/watch?v=Fg9ixhDzPEo&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=3"
          speaker_name8="Sangeeta Singh Bahl"
          speaker_img8="./rewind/Parvaaz/sangeeta.jpeg"
          speaker_link8="https://www.youtube.com/watch?v=7-8v_IM7OKs&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=2"
          speaker_name9="Srikanth Velamakanni"
          speaker_img9="./rewind/Parvaaz/srikant.jpg"
          speaker_link9="https://www.youtube.com/watch?v=PuyKr-jnguA&list=PLaD3WGQNtnEREfUq24XJx99n5lOXxTOHx&index=8"
          speaker_name10="Yoga Bhavagna Jonnala"
          speaker_img10="./rewind/Parvaaz/yoga.jpg"
          speaker_link10=""
        />
        <YearCardRight
          edition_name="Swadhyaya - 2021"
          edition_img="./rewind/21.png"
          edition_descp=""
          speaker_img1="./rewind/Swadhyaya/aabir _vyas.jpg"
          speaker_name1="Aabir Vyas"
          speaker_link1="https://www.youtube.com/watch?v=ftMj6E4wX60"
          speaker_img2="./rewind/Swadhyaya/Abhash_Jha.jfif"
          speaker_name2="Abhash Jha"
          speaker_link2="https://www.youtube.com/watch?v=k_FdxLP2qIk&t=1s"
          speaker_img3="./rewind/Swadhyaya/anirban_bhattacharyya.jpg"
          speaker_name3="Anirban Bhattacharyya"
          speaker_link3="https://www.youtube.com/watch?v=jsX0MMr35lk"
          speaker_img4="./rewind/Swadhyaya/Avinash_Singh.jfif"
          speaker_name4="Avinash Singh Alag"
          speaker_link4="https://www.youtube.com/watch?v=IiVl2UgszFc"
          speaker_img5="./rewind/Swadhyaya/EPR_Iyer.jpeg"
          speaker_name5="EPR Iyer"
          speaker_link5="https://www.youtube.com/watch?v=IaHkabRhBq4&t=1s"
          speaker_img6="./rewind/Swadhyaya/Richie_Mehta.jpg"
          speaker_name6="Richie Mehta"
          speaker_link6="https://www.youtube.com/watch?v=N_8CsLScgKg"
          speaker_img7="./rewind/Swadhyaya/vanndana_vaadera .jpg"
          speaker_name7="Vanndana Vaadera"
          speaker_link7="https://www.youtube.com/watch?v=bB97hvh-7sI"
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
          speaker_img1="./rewind/Quovadis/Aditya_Bhandari.jpg"
          speaker_name1="Aditya Bhandari"
          speaker_link1="https://www.youtube.com/watch?v=jrH3_NANVJA"
          speaker_img2="./rewind/Quovadis/aswekeepsearching.jpg"
          speaker_name2="aswekeepsearching"
          speaker_link2="https://www.youtube.com/watch?v=9m2sk3r2icI"
          speaker_img3="./rewind/Quovadis/Chameli_Debnath.jpg"
          speaker_name3="Chameli Debnath"
          speaker_link3="https://www.youtube.com/watch?v=aCQv_A2wxrw"
          speaker_img4="./rewind/Quovadis/manoj_keshwar.jpg"
          speaker_name4="Manoj Keshwar"
          speaker_link4="https://www.youtube.com/watch?v=GIvHlKXDmgk"
          speaker_img5="./rewind/Quovadis/msingh_avyas.jpg"
          speaker_name5="Manraj Singh & Arpit Vyas"
          speaker_link5="https://www.youtube.com/watch?v=JeH9v7ohjWc&t=7s"
          speaker_img6="./rewind/Quovadis/shalin_IPS.jpg"
          speaker_name6="Shalin IPS"
          speaker_link6="https://www.youtube.com/watch?v=sSqYNOIvoI8"
          speaker_img7="./rewind/Quovadis/Sugata_mitra.jpg"
          speaker_name7="Sugata Mitra"
          speaker_link7="https://www.youtube.com/watch?v=jrH3_NANVJA"
          speaker_img8="./rewind/Quovadis/Sushruthi-Krishna.jpeg"
          speaker_name8="Sushruthi Krishna"
          speaker_link8="https://www.youtube.com/watch?v=3YOpdfr-agQ"
          speaker_img9="./rewind/Quovadis/Tirthak_Saha.jpg"
          speaker_name9="Tirthak Saha"
          speaker_link9="https://www.youtube.com/watch?v=GBplgW4c3gY"
          speaker_img10="./rewind/Quovadis/Zoe_Modgill.jpg"
          speaker_name10="Zoe Modgill"
          speaker_link10="https://www.youtube.com/watch?v=4wa3XDh72lE"
        />
        <YearCardRight
          edition_name="Sparking Metanoia - 2021"
          edition_img="./rewind/19.jpg"
          edition_descp=""
          speaker_img1="./rewind/Sparking/atif_khan.jpg"
          speaker_name1="Atif Khan"
          speaker_link1="https://www.youtube.com/watch?v=VaegXWjUhN0"
          speaker_img2="./rewind/Sparking/digital-gandhi.jpg"
          speaker_name2="Digital Gandhi"
          speaker_link2="https://www.youtube.com/watch?v=umH9yka1siY"
          speaker_img3="./rewind/Sparking/Kamal_Morya.jpg"
          speaker_name3="Kamal Morya"
          speaker_link3="https://www.youtube.com/watch?v=B8QRhZi_PVk"
          speaker_img4="./rewind/Sparking/Nidhi_Lauria.jfif"
          speaker_name4="Nidhi Lauria"
          speaker_link4="https://www.youtube.com/watch?v=taQbsxI-IfU"
          speaker_img5="./rewind/Sparking/Richard_Rekhy.jpg"
          speaker_name5="Richard Rekhy"
          speaker_link5="https://www.youtube.com/watch?v=PjrM3G8PCb8"
          speaker_img6="./rewind/Sparking/Salman_Khurshid.jpg"
          speaker_name6="Salman Khurshid"
          speaker_link6="https://www.youtube.com/watch?v=ZljJEjJ7n_g"
          speaker_img7="./rewind/Sparking/Sanchit_Batra.jpg"
          speaker_name7="Sanchit Batra"
          speaker_link7="https://www.youtube.com/watch?v=0qsQpUJv-Ck&t=1s"
          speaker_img8="./rewind/Sparking/sangeeta-bahl.jpg"
          speaker_name8="Sangeeta Bahl"
          speaker_link8="https://www.youtube.com/watch?v=ysYik6Ptfy4"
          speaker_img9="./rewind/Sparking/siya-jain.jpg"
          speaker_name9="Siya Jain"
          speaker_link9="https://www.youtube.com/watch?v=1i2Fruw4Vf4"
          speaker_img10="./rewind/Sparking/Vinod_Bhatia.jpg"
          speaker_name10="Vinod Bhatia"
          speaker_link10="https://www.youtube.com/watch?v=4wa3XDh72lE"
        />
        <YearCardLeft
          edition_name="The Precipice, On the Brink of Change - 2018"
          edition_img="./rewind/18.jpg"
          edition_descp=""
          speaker_img1="/rewind/Precipice/Ananta_Singhi.jpg"
          speaker_name1="Ananta Singh Raghuvanshi"
          speaker_link1="https://www.youtube.com/watch?v=BjRjuQnmJLY"
          speaker_img2="./rewind/Precipice/anuv_jain.jpg"
          speaker_name2="Anuv Jain"
          speaker_link2="https://www.youtube.com/watch?v=fAYaSIMsxQs"
          speaker_img3="/rewind/Precipice/narayanai-gupta.jpg"
          speaker_name3="Narayani Gupta"
          speaker_link3="https://www.youtube.com/watch?v=yc8-XT-awzY"
          speaker_img4="/rewind/Precipice/Nimisha_Verma.jpg"
          speaker_name4="Nimisha Verma"
          speaker_link4="https://www.youtube.com/watch?v=RsqOdZepzVs"
          speaker_img5="/rewind/Precipice/pankhuri_gidwani.jpg"
          speaker_name5="Pankhuri Gidwani"
          speaker_link5="https://www.youtube.com/watch?v=XmE4mk8x00s&t=1s"
          speaker_img6="/rewind/Precipice/Prasanth_Nori.jpg"
          speaker_name6="Prasanth Nori"
          speaker_link6="https://www.youtube.com/watch?v=zxusiA7UsHI"
          speaker_img7="/rewind/Precipice/Prem_Atreja.jfif"
          speaker_name7="Prem Atreja"
          speaker_link7="https://www.youtube.com/watch?v=531nxrBke88"
          speaker_img8="/rewind/Precipice/sushant_kalra.jfif"
          speaker_name8="Sushant Kalra"
          speaker_link8="https://www.youtube.com/watch?v=tZoxCmda56I"
          speaker_img9="/rewind/Precipice/Umang_Sethi.jpg"
          speaker_name9="Maj. Gen. Umang Sethi"
          speaker_link9="https://www.youtube.com/watch?v=nZkhF12fO8c"
        />
      </div>
    </div>
  );
}
