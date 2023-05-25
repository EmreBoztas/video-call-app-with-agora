import "./Profile.css";
import Footer from "../../Components/Footer/Footer";
import Background from "../../Images/colors.mp4";
const Profile = () => {
  return (
    <div>
      <div className="profile_container">
        <video src={Background} autoPlay muted loop />
        <div className="top_conteiner">
          <h2 className="center_title">Profile</h2>
          <p className="short_text">Kullanıcının metni kısa bir söz yazıcak.</p>
        </div>
        <div className="mid_conteiner">
          <div className="mid_conteiner_child">
            <h4 className="u_font"> About me</h4>
            <p className="p_font">
              I am an allround web developer. I am a senior programmer with good
              knowledge of front-end techniques. Vitae sapien pellentesque
              habitant morbi tristique senectus et. Aenean sed adipiscing diam
              donec adipiscing tristique risus.
            </p>
          </div>
          <div className="mid_conteiner_child center_object">
            <img className="css_shadow" src="https://i.pravatar.cc/75" />
          </div>
          <div className="mid_conteiner_child">
            <h4 className="u_font">Details</h4>
            <p className="p_font">
              <span className="little_title">Name: </span>
              <br />
              Hunter Norton
              <br />
              <span className="little_title">Age: </span>
              <br />
              33 years
              <span className="little_title">
                <br />
                Location:
              </span>
              <br />
              's-Hertogenbosch, The Netherlands, Earth
              <span className="little_title">
                <br />
                Languages:
              </span>
              <br />
              Turkish, English, German
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
