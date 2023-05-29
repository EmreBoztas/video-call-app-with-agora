import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "00f8cf76213a4230a7b4b6796e801a44 ";
const token = [
  "007eJxTYJjUKJUX88Xv5Iwd5z9ckfl8atWT75dF378QPH9sy4ovF/OfKzAYGKRZJKeZmxkZGieaGBkbJJonmSSZmVuapVoYGCaamPz4UZzSEMjIoHV6AysjAwSC+OwMrnnpOZnFGQwMAHK4JnE=",
  "007eJxTYNgoej3t1I+EgFbewGaVtfEyvCVHr9zefeKdnFOvnoiaeLUCg4FBmkVymrmZkaFxoomRsUGieZJJkpm5pVmqhYFhoomJ3s/ilIZARgZB1blMjAwQCOKzM7jmpedkFmcwMAAALX4eKA==",
  "007eJxTYPhQX7RPKfytlujktHz2fwExJ3NmvcysT1B9cnvqGzHDIgkFBgODNIvkNHMzI0PjRBMjY4NE8ySTJDNzS7NUCwPDRBMTt5/FKQ2BjAzXcg2ZGRkgEMRnZ3DNS8/JLM5gYAAAmDUgAQ==",
  "007eJxTYNCeLWU9i+XlfxfuiqX5G2OrvX3Ntszy+JJ/qucx9/WXXecUGAwM0iyS08zNjAyNE02MjA0SzZNMkszMLc1SLQwME01MYn4WpzQEMjJMZ/7AwAiFID47g2teek5mcQYDAwCpQiC/",
  "007eJxTYLjoKrry7ve5q1S+6ndf10hgM/e/va9rSjdzi9XdffEcTdsUGAwM0iyS08zNjAyNE02MjA0SzZNMkszMLc1SLQwME01M8n4WpzQEMjKkX/FlYIRCEJ+dwTUvPSezOIOBAQC/sSCR",
  "007eJxTYEj4uOqIi+AnjqkrbqV+DdyrU//gVmb75q78DW0Gadtv3vNQYDAwSLNITjM3MzI0TjQxMjZINE8ySTIztzRLtTAwTDQxqf1ZnNIQyMhwfJM1KyMDBIL47Ayueek5mcUZDAwAc4oi9w==",
  "007eJxTYLhSZhnizpjcfeBveuMST4eYYJ5Jbke8t63sY+6NYuHjv6PAYGCQZpGcZm5mZGicaGJkbJBonmSSZGZuaZZqYWCYaGIy62dxSkMgI0PaupusjAwQCOKzM7jmpedkFmcwMAAA9EUekg==",
  "007eJxTYJhwsyZNISzhs60cX6Xx1x2PxVKvcZ3sFWkRTFbKcU3XyVVgMDBIs0hOMzczMjRONDEyNkg0TzJJMjO3NEu1MDBMNDFZ/7M4pSGQkWGWwiYGRigE8dkZXPPSczKLMxgYAOtFHhU=",

  "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",

];

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config); //Hook
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(); // Hook
export const channelName = ["English", "English", "English", "English", "English", "English", "English", "English", 
                            "German", "German", "German", "German", "German", "German", "German", "German",
                            "French", "French", "French", "French", "French", "French", "French", "French" ];
