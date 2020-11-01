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
    let avarta = req.body.avarta;
    DATA.createItem(maSinhVien, tenSinhVien, ngaySinh, avarta, res);
}));

router.post('/students/:maSinhVien/:tenSinhVien', ((req, res) => {
    let maSinhVien = req.params.maSinhVien;
    let tenSinhVien = req.params.tenSinhVien;
    DATA.deleteItem(maSinhVien, tenSinhVien, res);
}));

router.post('/update/:id/:masv/:ten/:ngaysinh/:avata', ((req, res, next) => {
    // let id = req.params.id;
    // let masv = req.params.masv;
    // let ten = req.params.ten;
    // let ngaysinh = req.params.ngaysinh;
    // let avata = req.params.avata;

    // DATA.sendItem(id, masv, ten, ngaysinh, avata, res);


    res.render('updateForm', { id: req.params.id, masv: req.params.masv, ten: req.params.ten, ngaysinh: req.params.ngaysinh, avata: req.params.avata });
}));

router.post('/updatestudents/:masv/:ten', ((req, res) => {
    let id = req.body.id;
    let masv = req.params.masv;
    let ten = req.params.ten;
    let ngaysinh = req.body.ngaysinh;
    let avata = req.body.avata;
    DATA.updateItem(id, masv, ten, ngaysinh, avata, res);
}));

module.exports = router;