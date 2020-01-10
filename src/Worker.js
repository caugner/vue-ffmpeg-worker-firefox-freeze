import createWorker from "@ffmpeg/ffmpeg/src/createWorker";

createWorker()
  .load()
  .then(() => postMessage());
