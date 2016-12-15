//用户初始化（管理员帐号初始化）
var authModel = require('../../models/authorityModel')
var roleModel = require('../../models/roleModel')
var userModel = require('../../models/userModel')

var mongoose = require('mongoose')
var async = require('async')
var bcrypt = require('bcryptjs');

//系统管理权限
var adminAuth = {
    code: "sysmanage",
    name: "系统管理",
    description: "系统管理菜单的使用权限"
}

//系统管理员角色
var adminRole = {
    code: "adminRole",
    name: "系统管理员",
    description: "系统管理员角色",
    authArray: []

}
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("qwer5211314", salt);
//系统管理员帐号
var adminUser = {
    username: "18501609618",
    psd: hash,
    roleArray: [],
    openid: "",
    reccode: ""
}

//判断是否有管理员帐号
userModel.findOne({ username: "18501609618" }, function (err, user) {
    if (err) return console.log(err);

    if (!user) {
        adduser();
    } else {
        console.log("已经有管理员账号了！")
    }

})

//添加管理员帐号
var adduser = function () {
    async.waterfall([
        function (callback) {
            authModel.findOne({ code: adminAuth.code }, function (err, auth) {
                if (err) { return console.log(err) };
                if (!auth) {
                    var adminAuthInstance = new authModel(adminAuth);
                    adminAuthInstance.save(function (err, authresult) {
                        if (err) { return console.log(err) }

                        callback(null, authresult);
                    })
                }
            })
        },
        function (arg1, callback) {
            roleModel.findOne({ code: adminRole.code }, function (err, role) {
                if (err) { return console.log(err) };
                if (!role) {
                    adminRole.authArray.push(arg1._id);
                    var adminRoleInstance = new roleModel(adminRole);

                    adminRoleInstance.save(function (err, roleresult) {
                        if (err) { return console.log(err) };

                        callback(null, roleresult);
                    })
                }
            })
        },
        function (arg1, callback) {
            // arg1 now equals 'three'
            userModel.findOne({ username: adminUser.username }, function (err, user) {
                if (err) { return console.log(err) };
                if (!user) {
                    adminUser.roleArray.push(arg1._id);

                    var adminUserInstance = new userModel(adminUser);

                    adminUserInstance.save(function (err, userresult) {
                        if (err) { return console.log(err) };

                        callback(null, 1)
                    })
                }
            })
        }
    ], function (err, result) {
        // result now equals 'done'
        if (err) { return console.log(err) };
        
        console.log(result);
    });
}

