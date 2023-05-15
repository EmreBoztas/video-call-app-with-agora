import { useState, useEffect } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./settings.js";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Video from "./Video.js";
import Controls from "./Controls.js";

export default function VideoCall(props) {
  const { setInCall } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const { roomId } = props;


  useEffect(() => {
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          // önceki kullanıcıları alır user'den ve sonra yeni bir orada olan kullanıcıların listesini ve kendini geri döndürür.
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop(); // kapalı değilse kapatmasını sağlıyor
        }
        if (mediaType === "video") {
          // Eğer kullanıcı ekranı kapattıysa otomatikman görüntüden çıkar.
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(
          config.appId,
          name,
          config.token,
          null
        );
      } catch (error) {
        console.log("error");
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]); //Herhangibiri değişti zaman bu fonksiyonu çalıştır.

  return (
    <Grid container direction="column" style={{ height: "700px" }}>
      <Grid item style={{ height: "50px" }}>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={start} setInCall={setInCall} />
        )}
      </Grid>
      <Grid item style={{ width: "1000px", height: "700px" }}>
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
}
