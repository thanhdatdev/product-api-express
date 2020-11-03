var express = require('express');
var router = express.Router();
const DATA = require('../app/controllers/product_controller');

router.get('/', function(req, res) {
    DATA.getAllItem(res);
});

router.get('/product/new', ((req, res) => {
    res.render('createForm', {
        title: 'Create Form'
    });
}));

router.post('/product', (req, res) => {
    let maSanPham = req.body.maSanPham;
    let tenSanPham = req.body.tenSanPham;
    let soLuong = req.body.soLuong;

    DATA.createItem(maSanPham, tenSanPham, soLuong, res);
});

module.exports = router;