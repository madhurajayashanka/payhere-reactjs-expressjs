
# PayHere Payment Integration Demo

## [Article on How to implement this A-Z: Medium](https://medium.com/@madhurajayashanka/how-to-integrate-payhere-payment-gateway-in-react-js-and-node-js-d4ba06443821)

![Thumbnail](https://github.com/madhurajayashanka/payhere-reactjs-expressjs/blob/f674a5062b892c566a245cbe03c008fcbef98e9d/thumbnail.png)


This project demonstrates a simple payment integration using the PayHere payment gateway. The application consists of a Node.js backend with Express and a React.js frontend. The integration is tested using the PayHere [sandbox](https://sandbox.payhere.lk/merchant/sign-up) environment.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/madhurajayashanka/payhere-reactjs-expressjs.git
    cd payhere-reactjs-expressjs
    ```

2. **Install dependencies for backend**:

    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for frontend**:

    ```bash
    cd ../frontend
    npm install
    ```

## Configuration

### PayHere Sandbox Setup

1. **Sign Up on PayHere Sandbox**:

   Visit the [PayHere Sandbox](https://sandbox.payhere.lk/) and create an account.

2. **Create a New Merchant**:

   - After signing in, navigate to the **Merchant** section.
   - Create a new merchant account.
   - Note down the **Merchant ID** and **Merchant Secret** provided.

  ![Merchant Panel](https://github.com/madhurajayashanka/payhere-reactjs-expressjs/blob/aed71726b0bb05b443ba388261c162c13d84d931/credentials.png)

3. **Configure Notify URL**:

   - For payment notifications, you need a publicly accessible URL for your backend. Use a tool like [ngrok](https://ngrok.com/) to expose your localhost or deploy your backend on a public server (AWS/ Digital Ocean/ Azure).
   - Set the **Notify URL** in your PayHere merchant settings to the publicly accessible endpoint (e.g., `https://sea-lion-app-qfh5d.ondigitalocean.app/payment/notify`).

### Environment Variables

1. **Backend Configuration**:

   Replace the `merchant_id` and `merchant_secret` in the backend code with the values obtained from PayHere Sandbox.


   - Open `backend/routes/payment.js` and replace the placeholders:

     ```javascript
     const merchant_id = "YOUR_MERCHANT_ID";
     const merchant_secret = "YOUR_MERCHANT_SECRET";
     ```
   ![Merchant Panel](https://github.com/madhurajayashanka/payhere-reactjs-expressjs/blob/f674a5062b892c566a245cbe03c008fcbef98e9d/replacing-credentials.png)


## Running the Application

1. **Start the Backend Server**:

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5001`. 
   If you deployed the NodeJs backend, use that link.

2. **Start the Frontend Development Server**:

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend development server will run on `http://localhost:3000`.

3. **Access the Application**:

   Open your browser and go to `http://localhost:3000` to access the payment integration page.



## Screenshots

![Thumbnail](https://github.com/madhurajayashanka/payhere-reactjs-expressjs/blob/f674a5062b892c566a245cbe03c008fcbef98e9d/thumbnail.png)
![Transactions](https://github.com/madhurajayashanka/payhere-reactjs-expressjs/blob/f674a5062b892c566a245cbe03c008fcbef98e9d/transactions.png)



### Additional Notes

- **Public IP Requirement**: Remember, PayHere requires a public IP for the `notify_url`. Tools like ngrok can be used during development to expose your local backend.
- **Security**: Ensure that sensitive information like the `merchant_secret` is handled securely, especially in production environments.
