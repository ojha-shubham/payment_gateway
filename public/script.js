const stripe = Stripe('Add Your STRIPE_PUBLISHABLE_KEY ');
const elements = stripe.elements();

const card = elements.create('card');
card.mount('#card-element'); 

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', async function () {

    const amount = 5000;

    try {

        const response = await fetch('http://localhost:3000/api/payment/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount }),
        });

        const paymentIntent = await response.json();

        const { error, paymentIntent: confirmedPaymentIntent } = await stripe.confirmCardPayment(
            paymentIntent.clientSecret,
            {
                payment_method: {
                    card: card,
                },
            }
        );

        if (error) {
            console.error(error.message);
            alert(error.message);
        } else if (confirmedPaymentIntent.status === 'succeeded') {
            alert('Payment successful!');
        }
    } catch (error) {
        console.error('Error processing payment:', error);
        alert('Error processing payment.');
    }
});
