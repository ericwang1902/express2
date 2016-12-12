var express = require('express');
var router = express.Router();

var regionRoutes = require('./regionRoutes')
var orgRoutes = require('./orgRoutes')
var orgToRetionRoutes = require('./orgToRetionRoutes')
var authorityRoutes = require('./authorityRoutes')
var roleRoutes = require('./roleRoutes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 所属区域
router.use('/region',regionRoutes);

//快递点（组织）
router.use('/org',orgRoutes);

//区域组织对应关系
router.use('/ortoreion',orgToRetionRoutes);

//权限
router.use('/authority',authorityRoutes);

//角色
router.use('/role',roleRoutes);





module.exports = router;
