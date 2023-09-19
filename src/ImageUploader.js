import React, { useState } from 'react';
import AWS from 'aws-sdk';

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    var name = document.getElementById('fileInput');
    const files = [];
    [...event.target.files].forEach(file => {
      files.push(file)
    });
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = [];
    [...event.target.files].forEach(file => {
      files.push(file)
    });
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = () => {
    console.log(JSON.stringify(selectedFiles, null, 2))
    const s3 = new AWS.S3();
    
    selectedFiles.forEach((file, index) => {
      const params = {
        Bucket: 'cc_images_djw',
        Key: file.name,
        // name
        // Key: `image_${index}_${Date.now()}`,
        Body: file,
        ACL: 'public-read',
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File uploaded successfully: ${data.Location}`);
        }
      });
    });
  };

  return (
    <div>
      <div>
        <input id="fileInput" type="file" onChange={handleFileChange} multiple />
      </div>
      <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        Drop files here
      </div>
      <div>
        {selectedFiles.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`preview_${index}`}
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
      <button onClick={handleUpload}>Upload to S3</button>
    </div>
  );
};

export default ImageUploader;
