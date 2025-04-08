import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CustomerPolicy() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
      {
        question: 'How do I track my order?',
        answer: 'You will receive a tracking number via email once your order ships.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards and PayPal.'
      },
      {
        question: 'Can I modify my order?',
        answer: 'Contact us immediately if you need to modify your order. Changes can only be made before shipment.'
      }
    ];
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Policy
          </h1>
          <p className="text-lg text-gray-600">
            Our commitment to your satisfaction
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-8">
            {/* Returns & Exchanges */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Returns & Exchanges
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We accept returns within 30 days of purchase. Items must be in
                original condition with tags attached. Please contact our
                support team to initiate a return and include your order number.
              </p>
            </div>

            {/* Shipping Policy */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Shipping Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We process orders within 1-2 business days. Standard shipping
                takes 3-5 business days. Expedited shipping options are
                available at checkout. International shipping rates and times
                vary by location.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We value your privacy and never share your personal information
                with third parties. All transactions are secured with SSL
                encryption. You can review our full privacy policy in your
                account settings.
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center"
                    >
                      <h3 className="font-medium text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-600 transform transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-blue-50 p-6 rounded-lg text-center mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Our support team is here to help
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#af8a39] text-white px-6 py-2 rounded-md hover:bg-[#a78d58] transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
