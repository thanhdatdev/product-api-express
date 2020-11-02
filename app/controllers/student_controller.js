require('../../config/database');
const AWS = require('aws-sdk');
var uuid = require('uuid');

let docClient = new AWS.DynamoDB.DocumentClient();

function getAllItem(res) {
    let params = {
        TableName: "Students"
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log("Lỗi không hiển thị được");
        } else {
            res.render('index', { datas: data.Items });
        }

    });
}

function createItem(maSinhVien, tenSinhVien, ngaySinh, avatar, res) {
    let params = {
        TableName: 'Students',
        Item: {
            id: uuid.v4(),
            maSinhVien: String(maSinhVien),
            tenSinhVien: String(tenSinhVien),
            ngaySinh: String(ngaySinh),
            avatar: String(avatar)
        }
    };
    docClient.put(params, (err, data) => {
        if (err) {
            console.log("Lỗi không thêm được item");
        } else {
            res.redirect('/students');
        }
    });
}

function deleteItem(maSinhVien, tenSinhVien, res) {
    let params = {
        TableName: 'Students',
        Key: {
            "maSinhVien": String(maSinhVien),
            "tenSinhVien": String(tenSinhVien),
        }
    };
    docClient.delete(params, (err, data) => {
        if (err) {
            console.log("Lỗi không xoá được item");
        } else {
            res.redirect('/students');
        }
    });
}

function updateItem(maSinhVien, tenSinhVien, ngaySinh, avatar, res) {
    let params = {
        TableName: 'Students',
        Key: {
            "maSinhVien": String(maSinhVien),
            "tenSinhVien": String(tenSinhVien),
        },
        UpdateExpression: "set #i = :id, #n = :ngaySinh, #a = :avatar",
        ExpressionAttributeNames: {
            '#i': 'id',
            '#n': 'ngaySinh',
            '#a': 'avatar'
        },
        ExpressionAttributeValues: {
            ':id': String(id),
            ':ngaySinh': String(ngaySinh),
            ':avatar': String(avatar)
        },
        ReturnValues: "UPDATED_NEW"
    };
    docClient.update(params, (err, data) => {
        if (err) {
            console.log("Lỗi không xoá được item");
        } else {
            res.redirect('/students');
        }
    });
}
module.exports = {
    getAllItem: getAllItem,
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
};