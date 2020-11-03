require('../../config/database');
const AWS = require('aws-sdk');

let docClient = new AWS.DynamoDB.DocumentClient();

function getAllItem(res) {
    let params = {
        TableName: "Products"
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log("Lỗi không hiển thị được");
        } else {
            res.render('index', {
                datas: data.Items
            });
        }

    });
}

function createItem(maSanPham, tenSanPham, soLuong, res) {
    let params = {
        TableName: 'Products',
        Item: {
            maSanPham: String(maSanPham),
            tenSanPham: String(tenSanPham),
            soLuong: String(soLuong)
        }
    };
    docClient.put(params, (err, data) => {
        if (err) {
            console.log("Lỗi không thêm được item");
        } else {
            res.redirect('/');
        }
    });
}


module.exports = {
    getAllItem: getAllItem,
    createItem: createItem,
};