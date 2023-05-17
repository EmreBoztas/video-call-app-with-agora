import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "00f8cf76213a4230a7b4b6796e801a44 ";
const token = [
"007eJxTYCgwU2A87etRJuvOoln1O/DA5k+tywXv9++3ubfbKGlJh7cCg4FBmkVymrmZkaFxoomRsUGieZJJkpm5pVmqhYFhoomJxq7klIZARoborU9YGBkgEMRnZ3DNS8/JLM5gYAAAJJcfJQ==", 
"007eJxTYCgwU2A87etRJuvOoln1O/DA5k+tywXv9++3ubfbKGlJh7cCg4FBmkVymrmZkaFxoomRsUGieZJJkpm5pVmqhYFhoomJxq7klIZARoborU9YGBkgEMRnZ3DNS8/JLM5gYAAAJJcfJQ=="
];


export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config); //Hook
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(); // Hook
export const channelName = ["English", "English"];
