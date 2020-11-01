const uuidv1 = require('uuid');
require('../../database');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const id = uuidv1.v4();
const maSinhVien = 'SV1';
const tenSinhVien = 'Nguyễn Lê Thành Đạt';
const ngaySinh = '21-04-1999';
const avatar = 'https://www.w3schools.com/howto/img_avatar.png';

const params = {
    TableName: 'Students',
    Item: {
        id,
        maSinhVien,
        tenSinhVien,
        ngaySinh,
        avatar
    },
};

docClient.put(params, (err, data) => {
    if (err) {
        console.error('Unable to add instance. Error JSON:', JSON.stringify(err, null, 2));
        return false;
    } else {
        console.log('Added An Instance', JSON.stringify(params));
        return true;
    }
});