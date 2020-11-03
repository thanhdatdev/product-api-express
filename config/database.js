const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-southeast-1",

    //endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    endpoint: "http://localhost:8000",
    accessKeyId: 'AKIAJ4O2NKO4SSYMYVHA',
    secretAccessKey: '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'
});