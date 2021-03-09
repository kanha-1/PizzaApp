const Orders = require("../../model/order");
const moment = require('moment')
module.exports={
    Orders:(req, res)=>{
        Orders.find({ status: { $ne: 'completed' } }, null, { sort: { 'createdAt': -1 }}).populate('customerId', '-password').exec((err, orders) => {
            if(req.xhr) {
                return res.json(orders)
            } else {
             return res.render('admin/orders',{moment: moment})
            }
        })
     },
    OrderStatus:(req, res)=>{
        res.send('admin orders status')
    }
}