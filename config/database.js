const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-southeast-1",
    endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    accessKeyId: '',
    secretAccessKey: ''
});