// server.js

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());

const s3 = new AWS.S3();

const upload = multer();

app.post('/upload', upload.array('images'), async (req, res) => {
  const uploadedImages = [];

  for (const file of req.files) {
    const params = {
      Bucket: 'cc_images_djw',
      Key: `uploads/${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const data = await s3.upload(params).promise();
      uploadedImages.push(data.Location);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  res.json(uploadedImages);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
