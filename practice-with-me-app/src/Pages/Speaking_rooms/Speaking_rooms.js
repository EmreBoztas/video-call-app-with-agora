import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./Speaking_rooms.css";
import English from "../Rooms/English";
import French from "../Rooms/French";
import German from "../Rooms/German";

const Speaking_rooms = () => {
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
          <div class="box">
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

export default Speaking_rooms;

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
