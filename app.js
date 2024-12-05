require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const paymentRoutes = require('./routes/payment');
const path = require('path')

console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());



app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.json(__dirname, 'public', 'index.html'))
})

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://js.stripe.com");
    next();
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})