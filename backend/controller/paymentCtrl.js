const Razorpay = require ('razorpay');

 /*const instance = new Razorpay({
   key_id:"", key_secret:""
})*/

const checkout = async(req,res) => {
    const {amount} = req.body;
    const option = {
        ammount: amount * 100,
        currency: "PKR"
    }

    const order = await instance.orders.create(option)
    res.json({
        succes: true,
        order
    })
}
const paymentVerification = async(req,res) => {
    const{razorpayOrderId, razorpayPaymentId} = req.body;
    res.json({
        razorpayOrderId, razorpayPaymentId
    })
}

module.exports = {
    checkout,
    paymentVerification
}