import React, { useState } from "react";

export default function PaymentApp() {
  const [method, setMethod] = useState("upi");

  const confirmPayment = () => {
    window.dispatchEvent(
      new CustomEvent("mf:navigate", {
        detail: { step: "tracking" },
      })
    );
  };

  const Card = ({ id, title, desc, badge }) => (
    <div
      onClick={() => setMethod(id)}
      className={`p-6 rounded-xl border cursor-pointer transition-all
        ${
          method === id
            ? "border-navy shadow-lg"
            : "border-gray-200 hover:border-navy/30"
        } bg-white`}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-navy">{title}</h3>
        {badge && (
          <span className="text-xs font-bold bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">
        Choose Payment Method
      </h1>
      <p className="text-gray-500 mb-8">
        Select how you'd like to fund your transfer of $1,000.00
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">
          <Card
            id="upi"
            title="UPI - Instant Transfer"
            badge="Fastest"
            desc="Pay via GPay, PhonePe, or BHIM instantly from your linked bank account."
          />

          <Card
            id="bank"
            title="Bank Transfer (NEFT / IMPS)"
            desc="Best for large amounts above ₹1 Lakh. Processing time: 2–4 hours."
          />

          <Card
            id="card"
            title="Debit Card"
            desc="Secure payment via 3D Secure. Card fees may apply."
          />

          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg text-xs text-navy">
            All payments are processed via ICICI Bank’s secure gateway.Your financial data is encrypted and never stored.
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow-xl border p-6 space-y-6">
          <h3 className="font-extrabold text-navy">
            Transaction Summary
          </h3>

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Recipient Receives</span>
              <strong>$601.00</strong>
            </div>
            <div className="flex justify-between">
              <span>Exchange Rate</span>
              <strong>1 USD = ₹83.45</strong>
            </div>
            <div className="flex justify-between">
              <span>Transfer Amount</span>
              <strong>₹50,000.00</strong>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <strong>₹500.00</strong>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <strong>₹90.00</strong>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
            <p className="text-xs font-bold text-primary uppercase">
              Total Payable
            </p>
            <p className="text-2xl font-extrabold text-navy">
              ₹50,590.00
            </p>
          </div>

          <button
            onClick={confirmPayment}
            className="w-full bg-primary text-white py-4 rounded-xl font-extrabold shadow-lg"
          >
            Confirm Payment →
          </button>

          <button className="w-full text-sm font-bold text-gray-500">
            Edit Transaction Details
          </button>
        </div>
      </div>
    </main>
  );
}
