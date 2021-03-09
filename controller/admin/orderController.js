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
    OrderStatus:(req, res) =>{
        Orders.updateOne({_id: req.body.orderId}, { status: req.body.status }, (err, data)=> {
            if(err) {
                return res.redirect('/admin/orders')
            }
            // Emit event 
            const eventEmitter = req.app.get('eventEmitter')
            eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
            return res.redirect('/admin/orders')
        })
    }
}