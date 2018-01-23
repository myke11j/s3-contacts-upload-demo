import fs from 'fs'
import AWS from 'aws-sdk'

const s3 = new AWS.S3();

const fileName = 'contacts.csv';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'testBucket', // pass your bucket name
         Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

uploadFile();
