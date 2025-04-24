import React, { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function CheckoutForm() {
  const [selectedPayment, setSelectedPayment] = useState("cod"); // State to track selected payment

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>

    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white shadow-2xl rounded-3xl p-8 space-y-10 border border-gray-100">
          {/* Contact */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Contact Information
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email or mobile phone number"
                className={`${inputStyle} focus:shadow-md`}
                required
              />
              <label className="inline-flex items-center gap-3 text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  className="w-4 h-4 accent-[#70c1f3c2] rounded border-gray-300"
                />
                Email me with news and offers
              </label>
            </div>
          </section>

          {/* Delivery */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Delivery Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="country"
                className={`${inputStyle} cursor-pointer md:col-span-2`}
              >
                <option value="Pakistan">Pakistan</option>
              </select>

              {/* First Name & Last Name in same line */}
              <input
                name="firstName"
                placeholder="First name"
                className={inputStyle}
                required
              />
              <input
                name="lastName"
                placeholder="Last name"
                className={inputStyle}
                required
              />

              {/* Address fields full width */}
              <input
                name="address"
                placeholder="Address"
                className={`${inputStyle} md:col-span-2`}
                required
              />
              <input
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                className={`${inputStyle} md:col-span-2`}
              />

              {/* City & Postal Code in same line */}
              <input
                name="city"
                placeholder="City"
                className={inputStyle}
                required
              />
              <input
                name="postalCode"
                placeholder="Postal code (optional)"
                className={inputStyle}
              />

              {/* Phone full width */}
              <input
                name="phone"
                placeholder="Phone"
                className={`${inputStyle} md:col-span-2`}
                required
              />
            </div>
            {/* Checkboxes remain unchanged */}
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <label className="inline-flex items-center gap-3 hover:text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  name="saveInfo"
                  className="w-4 h-4 accent-[#70c1f3c2] rounded border-gray-300"
                />
                Save this information for next time
              </label>
              <label className="inline-flex items-center gap-3 hover:text-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  name="textUpdates"
                  className="w-4 h-4 accent-[#70c1f3c2] rounded border-gray-300"
                />
                Text me with news and offers
              </label>
            </div>
          </section>
          {/* Shipping Method */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Shipping Method
            </h2>
            <div className="p-5 border-2 border-[#247cb1c2] bg-[#70c1f3c2] rounded-xl text-sm font-medium text-gray-700">
              Standard Shipping —{" "}
              <strong className="text-green-600 ml-1">FREE</strong>
            </div>
          </section>

          {/* Payment */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Details
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              🔒 All transactions are secure and encrypted with 256-bit SSL
              protection
            </p>
            <div className="space-y-5">
              {/* COD Option */}
              <label
                className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer ${
                  selectedPayment === "cod"
                    ? "border-[#075686] bg-[#70c1f3c2]"
                    : "border-gray-200 hover:border-[#075686]"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  defaultChecked
                  className="w-5 h-5 accent-[#075686]"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <span className="font-medium">Cash on Delivery (COD)</span>
              </label>

              {/* Card Option */}
              <label
                className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer ${
                  selectedPayment === "card"
                    ? "border-[#075686] bg-[#70c1f3c2]"
                    : "border-gray-200 hover:border-[#075686]"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  className="w-5 h-5 accent-[#075686]"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <span className="font-medium">Debit - Credit Card</span>
              </label>

              {/* Bank Deposit Option */}
              <label
                className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer ${
                  selectedPayment === "bank"
                   ? "border-[#075686] bg-[#70c1f3c2]"
                    : "border-gray-200 hover:border-[#075686]"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  className="w-5 h-5 accent-[#075686]"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <span className="font-medium">Bank Deposit</span>
              </label>

              {/* Bank Details - Shown only when bank is selected */}
              {selectedPayment === "bank" && (
                <div className="ml-10 p-4 bg-gray-50 rounded-lg text-sm space-y-2 text-gray-600">
                  <p>
                    <strong>Bank:</strong> Meezan Bank
                  </p>
                  <p>
                    <strong>A/C Title:</strong> SAFDAR PERVAIZ
                  </p>
                  <p>
                    <strong>A/C#:</strong> 02220102248234
                  </p>
                  <p>
                    <strong>IBAN:</strong> PK95MEZN0002220102248234
                  </p>
                  <p className="mt-3 text-red-600 font-medium">
                    Please Note: After payment, please send a screenshot on
                    WhatsApp (+92 315 7418509)
                  </p>
                </div>
              )}

              <div className="text-sm text-gray-500 ml-6 mb-4">
                After clicking "Pay now", you will be redirected to complete
                your purchase securely.
              </div>
            </div>
          </section>

          {/* Billing Address */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Billing Address
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="billingAddress"
                  value="same"
                  defaultChecked
                  className="w-5 h-5 accent-[#075686]"
                />
                Same as shipping address
              </label>
              <label className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="billingAddress"
                  value="different"
                  className="w-5 h-5 accent-[#075686]"
                />
                Use a different billing address
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-red-200 transition-all duration-300"
            >
              Pay Now ➔
            </button>
          </section>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 h-fit sticky top-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/17/18/03/slippers-5181650_960_720.jpg"
              alt="Peshawari Chappal"
              className="w-24 h-24 object-cover rounded-lg border-2 border-gray-100"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                Peshawari Chappal - ZXP 10158
              </p>
              <p className="text-sm text-gray-600 mt-1">Size: 39/6</p>
              <p className="font-medium mt-2 text-red-600">Rs. 11,900.00</p>
            </div>
          </div>

          <div className="text-sm space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>Rs. 11,900.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6 pt-6 border-t-2 border-gray-100">
            <span className="text-gray-800">Total</span>
            <span className="text-red-600">PKR Rs. 11,900.00</span>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            🚚 Free Shipping Nationwide — Plus, enjoy a 15-day easy return
            policy!
          </p>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  );
}

const inputStyle =
  "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#70c1f3c2] focus:border-[#70c1f3c2] outline-none text-sm transition-all duration-200 placeholder-gray-400 hover:border-gray-300";
