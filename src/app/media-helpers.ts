export const getUserMedia = ({ audio, video }) => {
  return new Promise<MediaStream>((resolve, reject) => {
    navigator.getUserMedia({ audio, video }, resolve, reject);
  });
};
