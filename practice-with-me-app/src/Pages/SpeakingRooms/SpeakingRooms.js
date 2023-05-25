import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./SpeakingRooms.css";
import English from "../../Components/Rooms/English";
import French from "../../Components/Rooms/French";
import German from "../../Components/Rooms/German";

const SpeakingRooms = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "English":
        return <English />;
      case "French":
        return <French />;
      case "German":
        return <German />;
      default:
        return <English />;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="Header">
          <h3 className="container-title">Speaking Rooms</h3>
          <div className="box">
            <select value={selectedComponent} onChange={handleComponentChange}>
              <option value="English"> English </option>
              <option value="French"> French </option>
              <option value="German"> German </option>
            </select>
          </div>
        </div>
        {renderComponent()}
      </div>
      <Footer />
    </div>
  );
};

export default SpeakingRooms;

/*

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
      */

/*
      
      <select value={selectedComponent} onChange={handleComponentChange}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
      */
