export const cleanAudioQueue = (queue: HTMLAudioElement[]): [] => {
  queue.forEach((audio) => {
    audio.pause();
  });
  return [];
};
