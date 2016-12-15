//数据库链接工具
var mongoose = require('mongoose')



module.exports={
    createconnection:function()
    {
       mongoose.Promise = global.Promise;
       mongoose.connect('mongodb://localhost/express2');
    },
    getconnection:function()
    {
        return  mongoose.connection;
    }
}