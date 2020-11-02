var express = require('express');
var router = express.Router();
const DATA = require('../app/controllers/student_controller');

router.get('/students', function(req, res) {
    DATA.getAllItem(res);
});

router.get('/new', ((req, res) => {
    res.render('createForm', { title: 'Create Form' });
}));

router.post('/students', ((req, res) => {
    let maSinhVien = req.body.maSinhVien;
    let tenSinhVien = req.body.tenSinhVien;
    let ngaySinh = req.body.ngaySinh;
    let avatar = req.body.avatar;
    DATA.createItem(maSinhVien, tenSinhVien, ngaySinh, avatar, res);
}));

router.post('/students/:maSinhVien/:tenSinhVien', ((req, res) => {
    let maSinhVien = req.params.maSinhVien;
    let tenSinhVien = req.params.tenSinhVien;
    DATA.deleteItem(maSinhVien, tenSinhVien, res);
}));

router.post('/students/update/:maSinhVien/:tenSinhVien/:ngaySinh/:avatar', ((req, res, next) => {
    res.render('updateForm', { maSinhVien: req.params.maSinhVien, tenSinhVien: req.params.tenSinhVien, ngaySinh: req.params.ngaySinh, avatar: req.params.avatar });
}));

router.post('/students/update/:maSinhVien/:tenSinhVien', ((req, res) => {
    let id = req.body.id;
    let maSinhVien = req.params.maSinhVien;
    let tenSinhVien = req.params.tenSinhVien;
    let ngaySinh = req.body.ngaySinh;
    let avatar = req.body.avatar;
    DATA.updateItem(id, maSinhVien, tenSinhVien, ngaySinh, avatar, res);
}));

module.exports = router;