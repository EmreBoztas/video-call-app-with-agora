import { useState } from "react";
import Rooms from "./Speaking_channels/Rooms";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Profile from "./Pages/Profile/Profile";
import Speaking_rooms from "./Pages/Speaking_rooms/Speaking_rooms"
import { Route,Routes } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speaking_rooms" element={<Speaking_rooms />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/room" element={<Rooms roomId={0} />} />
      </Routes>
      
    </div>
  );
}
// <Rooms roomId={0}/>
// <Rooms roomId={1}/>
export default App;
