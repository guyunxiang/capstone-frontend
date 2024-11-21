import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
  import { toast } from "react-toastify";


const Profile = () => {
  const { VITE_Paypal_Client_ID } = import.meta.env;

  const initialOptions = {
    "client-id": VITE_Paypal_Client_ID,
    currency: "CAD",
  };

  const [amount, setAmount] = useState(5);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div
        id="donation-page"
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('./pexels-nitin-arya-386173-1029141.jpg')",
        }}
      >
        <div className="container px-3 mx-auto py-3 text-white">
          <h1 className="text-3xl mb-3">Donation Page</h1>
          <p>
            Thank you for considering to donate to our cause. Your donation will
            help us continue to provide free resources to those in need.
          </p>
          <p>For more information on how to donate, please contact us at</p>
          <br />
          <div className="flex items-center gap-3">
            <label className="text-xl">Amount:</label>
            <input
              type="number"
              className="text-black py-3 px-3 rounded-sm"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <PayPalButtons
              key={amount}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: parseFloat(amount).toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  console.log(details.payer.name.given_name);
                  toast(`🦄 Thank you so much for your generous donation!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                  });
                });
              }}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default Profile;
