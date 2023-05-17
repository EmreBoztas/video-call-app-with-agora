import { useState } from "react";
import VideoCall from "./VideoCall";

export default function Rooms(props) {
  const [inCall, setInCall] = useState(true);
  {
    return (
      <div>

          <VideoCall setInCall={setInCall} Id={props} />
       
      </div>
    );
  }
}
