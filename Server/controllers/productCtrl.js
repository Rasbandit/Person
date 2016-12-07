var stripeKey = require('./../stripeSecretKeys');
var stripe = require('stripe')(stripeKey.secretKey);

module.exports = {

   getProducts:function(req,res) {
      res.status(200).send();
   },

   processPayment: function(req, res, next) {

     //convert amount to pennies
     var chargeAmt = req.body.amount;
     var amountArray = chargeAmt.toString().split('');
     var pennies = [];
     for (var i = 0; i < amountArray.length; i++) {
         if (amountArray[i] === ".") {
             if (typeof amountArray[i + 1] === "string") {
                 pennies.push(amountArray[i + 1]);
             } else {
                 pennies.push("0");
             }
             if (typeof amountArray[i + 2] === "string") {
                 pennies.push(amountArray[i + 2]);
             } else {
                 pennies.push("0");
             }
             break;
         } else {
             pennies.push(amountArray[i])
         }
     }
     const convertedAmt = parseInt(pennies.join(''));

     var charge = stripe.charges.create({
         amount: convertedAmt, // amount in cents, again
         currency: 'usd',
         source: req.body.payment.token,
         description: 'Test charge for Go.com'
     }, function(err, charge) {
         res.sendStatus(200);
     });
   }

};
