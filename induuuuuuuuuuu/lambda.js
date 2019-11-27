let AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = function (event, context, callback) {
    rekognition.detectFaces({
        Image: {
            S3Object: {
                Bucket: "test.indunil1",
                Name: "quiz400.jpg"
            }
        }
    }).promise()
        .then(data => {
            console.log(data);
            console.log("dataaa");
            // your code goes here
        })
        .catch(err => {
            console.log(err);
            console.log("errrrrrrr");

            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}