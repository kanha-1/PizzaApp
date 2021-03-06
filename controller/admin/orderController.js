const Orders = require("../../model/order");
module.exports={
    Orders:(req, res)=>{
        res.send('admin orders')
    },
    OrderStatus:(req, res)=>{
        res.send('admin orders status')
    }
}