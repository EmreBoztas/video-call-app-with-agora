import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import LoginIcon from "@mui/icons-material/Login";

export default function Rooms(props) {
  const [inCall, setInCall] = useState(false);
  const [roomId, setRoomId] = useState(0);
  console.log(props.roomId);
  {
    return (
      <div className="App" style={{ height: "100%" }}>
        {inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInCall(true)}
          >
            Join Call
          </Button>
        )}
      </div>
    );
  }
}
