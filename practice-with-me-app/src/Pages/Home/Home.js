import "./home.css";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Background from "../../Images/background.mp4";
import ref from "../../Images/ref1.png";

const Home = () => {
  return (
    <div>
      <video src={Background} className="video-slide" autoPlay muted loop />

      <div className="top-container">
        <p className="ref-text">
          Practice with people <br /> and improve yourself.
        </p>
        <img src={ref} alt="" className="ref" />
      </div>
      <div className="container">
        <h3 className="container-title">Popular Speaking Rooms</h3>
        <div className="speaking-rooms">
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
          <Card language="English" level="Any Level" subject="Politic" />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
