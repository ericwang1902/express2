var express = require('express');
var router = express.Router();

var regionRoutes = require('./regionRoutes')
var orgRoutes = require('./orgRoutes')
var orgToRetionRoutes = require('./orgToRegionRoutes')
var authorityRoutes = require('./authorityRoutes')
var roleRoutes = require('./roleRoutes')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;



/* GET home page. */
router.get('/', isLogedIn,function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// 所属区域
router.use('/region', regionRoutes);

//快递点（组织）
router.use('/org', orgRoutes);

//区域组织对应关系
router.use('/ortoreion', orgToRetionRoutes);

//权限
router.use('/authority', authorityRoutes);

//角色
router.use('/role', roleRoutes);



























//**********************************测试区***************************
//自定义回调函数
router.post('/login', passportAuth,function(req,res,next){
  console.log('success!')
  return res.json({
      state: 200,
        authresult: true,
        info: "info"
  })
});


//passport登录中间件
function passportAuth (req, res, next) {
  //自调用匿名函数，将req，res，next直接传递给了匿名函数
  //如果不通过验证，user的值为false
  passport.authenticate('local', function (err, user, info) {

    if (err) { return next(err); }
    if (!user) {
      //验证失败的返回
      var result = {
        state: 200,
        authresult: false,
        info: info
      }
        return res.json(result)
    }
    //可以直接在这里写验证成功的返回
    //用户登录
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      console.log("验证成功")
      return next();
    });
  })(req, res, next);
}

//检测是否登录中间件
function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', '您尚未登陆！');
    res.redirect("/login");
  }

}
module.exports = router;
