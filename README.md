# payment_gateway
A Node.js integration for secure payment processing with Stripe

Setup
1. Clone the repository:

git clone <repository-url>
cd payment-gateway

2. Install dependencies:
npm install

3. Set up environment variables:
Create a .env file in the root directory and add your Stripe secret key and publishable key:

STRIPE_SECRET_KEY=your-secret-key
STRIPE_PUBLISHABLE_KEY=your-publishable-key

4. Run the backend server:
Start the backend server by running:

node app.js
Test the payment API in Postman by sending a POST request to:

http://localhost:3000/api/payment/create-payment-intent

Request Body (JSON):
{
    "amount": 5000
}

Response:
{
    "clientSecret": "pi_Shjsfugyfh6Hc3rGwwdkjhwA17BkQ_secret_bDMSqasdhf0uPTl1vjm4vPi"
}

5. Run the frontend:
Navigate to the public folder and start a local server:

npm install -g http-server
cd public
http-server

6. Access the application:
Open http://localhost:8080 in your browser to access the frontend.

Features
Stripe Integration: Handles payments securely using Stripe.
Backend: Express server to process payment intents and manage transactions.
Frontend: Client-side Stripe elements integrated for seamless payments.