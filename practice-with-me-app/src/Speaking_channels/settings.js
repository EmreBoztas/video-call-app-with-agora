import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "00f8cf76213a4230a7b4b6796e801a44 ";
const token = "007eJxTYDhxjSdxB0NR2+aK7Ik1H4KVY7Y2SoUIBk/+O+nH4dj4z9wKDAYGaRbJaeZmRobGiSZGxgaJ5kkmSWbmlmapFgaGiSYmDw4kpDQEMjLsmJ7EyMgAgSA+O4NrXnpOZnEGAwMArdkgtg==";
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config); //Hook
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(); // Hook
export const channelName = "English";
