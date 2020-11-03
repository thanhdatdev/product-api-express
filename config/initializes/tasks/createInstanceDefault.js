const uuidv1 = require('uuid');
require('../../database');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const maSanPham = 'SP1';
const tenSanPham = 'Máy chiếu'
const soLuong = 20

const params = {
    TableName: 'Products',
    Item: {
        maSanPham,
        tenSanPham,
        soLuong
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