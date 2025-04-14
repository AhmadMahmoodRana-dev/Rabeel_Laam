import React from "react";

export default function CheckoutForm() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e86e09] focus:border-[#e86e09] transition-all"
                    placeholder="john.doe@company.com"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input type="text" className={`${inputStyle}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input type="text" className={`${inputStyle}`} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className={`${inputStyle}`}
                    placeholder="Street address"
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    className={`${inputStyle}`}
                    placeholder="Apt, suite, etc. (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input type="text" className={`${inputStyle}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select className={`${inputStyle}`}>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input type="text" className={`${inputStyle}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP code
                  </label>
                  <input type="text" className={`${inputStyle}`} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={`${inputStyle}`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            {/* Delivery Method */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Delivery Method
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="delivery-option">
                  <input
                    type="radio"
                    name="delivery"
                    className="sr-only"
                    defaultChecked
                  />
                  <div className="p-4 border-2 border-gray-400 rounded-xl hover:border-[#e86e09] transition-colors">
                    <span className="block font-medium text-gray-900">
                      Standard Shipping
                    </span>
                    <span className="block text-sm text-gray-500 mt-1">
                      4–10 business days
                    </span>
                    <span className="block font-medium text-gray-900 mt-2">
                      $5.00
                    </span>
                  </div>
                </label>
                <label className="delivery-option">
                  <input type="radio" name="delivery" className="sr-only" />
                  <div className="p-4 border-2 border-gray-400 rounded-xl hover:border-[#e86e09] transition-colors">
                    <span className="block font-medium text-gray-900">
                      Express Shipping
                    </span>
                    <span className="block text-sm text-gray-500 mt-1">
                      2–5 business days
                    </span>
                    <span className="block font-medium text-gray-900 mt-2">
                      $16.00
                    </span>
                  </div>
                </label>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Payment Details
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 border-b pb-4">
                  <label className="payment-method">
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only"
                      defaultChecked
                    />
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400">
                      <span>💳</span> Credit Card
                    </div>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" className="sr-only" />
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400">
                      <span>🔵</span> PayPal
                    </div>
                  </label>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card number
                    </label>
                    <input
                      type="text"
                      className={`${inputStyle}`}
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className={`${inputStyle}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration date
                      </label>
                      <input
                        type="text"
                        className={`${inputStyle}`}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        className={`${inputStyle}`}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Order Summary
            </h2>

            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4">
                  <div
                    style={{
                      backgroundImage: `url("https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-20 h-24 bg-gray-200 border border-gray-300 rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Basic Tee</h3>
                    <p className="text-sm text-gray-600 mt-1">Black - Large</p>
                    <p className="text-sm font-medium text-gray-900 mt-2">
                      $32.00
                    </p>
                  </div>
                  <select className="h-fit border-gray-300 rounded-md text-sm px-2 py-1">
                    {[1, 2, 3].map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">$64.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-gray-900">$5.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes</span>
                <span className="font-medium text-gray-900">$6.52</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">$75.52</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-[#e86e09] hover:bg-[#e86e09] text-white py-3 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility classes
const inputStyle =
  "w-full px-4 py-3 border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-[#e86e09] focus:border-[#e86e09] transition-all text-sm";
