var moment = require('moment')
moment.locale('zh-cn');

var addressCtrl = require('../addressController')

var getrequestdata= function(sendadd,receiveadd,goodsname,org){

    addressCtrl.show

    var requestdata={
        OrderCode:getordernum(),//要生成订单号
        PayType:'1',
        LogisticCode:'',
        ExpType:'1',
        Sender:{
           Name:,
           Mobile:,
           PostCode:,
           ProvinceName:,
           CityName:,
           ExpAreaName:,
           Address:
        },
        Receiver:{
           Name:,
           Mobile:,
           PostCode:,
           ProvinceName:,
           CityName:,
           ExpAreaName:,
           Address:
         },
         Commodity:[{
           GoodsName:order.goodsname,
           GoodsDesc:order.goodsdes
         }],
         IsReturnPrintTemplate:'1'
    };

    switch(org){
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '10':
            break;
        case '11':
            break;
        case '12':
            //圆通
            requestdata.ShipperCode="YTO";
            requestdata.CustomerName=org.orgaccount;
            requestdata.MonthCode=org.orgpsd;
            
            break;
        case '13':
            break;
        case '14':
            break;
        case '15':
            break;
        case '16':
            break;
        default:
            break;      
    }
}

//
var getordernum =function(){
    var now = moment();
    var ordercode = now.format(YYYY).toString()+now.format(MM).toString()+now.format(DD).toString()+now.format(HH).toString()+now.format(mm).toString()+now.format(ss).toString()+(Math.random()*1000000).toString();
    return ordercode;
}

module.exports={
    getrequestdata:getrequestdata
}