const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe = stripe('sk_test_51LPiuwJrAgLp47RRfBG034RmkceXlk1OVxBft9yEPuwawbG9rC1xQ0fFH49mT5JWRTcBKMEJfPcdAyYAmWdu74ud008LGYOVVH');

router.post('/', async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

  module.exports = router;
