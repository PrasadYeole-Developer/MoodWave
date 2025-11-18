const ImageKit = require("imagekit");
const uuid = require("uuid");

require("dotenv").config();

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    imageKit.upload(
      {
        file: file.buffer,
        fileName: uuid.v4() + "-" + file.originalname,
        mime: file.mimetype,
        folder: "/moodwave_audios",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });
};

module.exports = { uploadFile };

// const uploadFile = (file) => {
//   return imageKit.upload({
//     file: file.buffer,
//     fileName: file.originalname,
//   });
// };
// This commented function works the same as above if we didn't give callback imagekit returns a Promise
