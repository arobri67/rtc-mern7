const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const multer = require("multer");

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "avatars",
//     allowFormats: ["jpg", "png", "jpeg", "gif"],
//   },
// });

// const uploadFile = multer({ storage });

// module.exports = uploadFile;

const createCloudinaryStorage = (folder) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder,
      allowFormats: ["jpg", "png", "jpeg", "gif"],
    },
  });
};

const uploadFile = (folder) => {
  const storage = createCloudinaryStorage(folder);
  return multer({ storage: storage }).single("avatar");
};
module.exports = { uploadFile };
