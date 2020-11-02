const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-southeast-1",
    endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    accessKeyId: 'AKIAJ2777G2KVWOJBWDQ',
    secretAccessKey: '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'
});