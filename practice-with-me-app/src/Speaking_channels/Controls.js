import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button } from "@material-ui/core";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router";

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };
  const navigate = useNavigate();

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
    navigate("/");
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="default"
          onClick={() => leaveChannel()}
        >
          Leave
          <ExitToAppIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
