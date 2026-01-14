import React from "react";

export default function RemittanceApp() {
  const proceedToCompliance = () => {
    window.dispatchEvent(
      new CustomEvent("mf:navigate", {
        detail: { step: "compliance" },
      })
    );
  };

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">
          Enter Remittance Details
        </h1>
        <p className="text-gray-500 mt-1">
          Please provide the amount and purpose of your international transfer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* RECIPIENT */}
          <div className="bg-white p-5 rounded-xl border shadow-sm flex justify-between items-center">
            <div>
              <p className="text-xs uppercase text-gray-400 font-bold">
                Selected Recipient
              </p>
              <p className="font-bold text-gray-900">
                Aditya Sharma → Aman Sharma
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#F58220] font-bold text-sm hover:underline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487a2.121 2.121 0 113 3L7.5 19.85l-4.5 1 1-4.5L16.862 4.487z"
    />
  </svg>
  Change
</button>

          </div>

          {/* TRANSFER DETAILS */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="font-bold text-lg text-gray-900">
                Transfer Details
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="h-11 px-4 border rounded-lg">
                  <option>United States of America</option>
                </select>

                <select className="h-11 px-4 border rounded-lg">
                  <option>US Dollar (USD)</option>
                </select>
              </div>

             <div>
  <label className="text-xs font-bold uppercase text-gray-500">
    Amount to Send
  </label>

  <div className="relative">
    {/* Rupee Symbol */}
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-500">
      ₹
    </span>

    {/* Amount Input */}
    <input
      className="w-full h-14 pl-10 pr-20 text-2xl font-bold border rounded-lg text-gray-900"
      value="50,000"
      readOnly
    />

    {/* INR Chip */}
    <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 border px-3 py-1 rounded-full text-xs font-bold text-gray-600">
      INR
    </span>
  </div>

  <p className="text-xs text-gray-500 mt-1">
    Available balance: ₹4,52,300.50
  </p>
</div>


              <div>
  <label className="text-xs font-bold uppercase text-gray-500">
    Purpose
  </label>

  <select className="mt-2 w-full h-11 px-4 border rounded-lg font-semibold text-gray-900">
    <option>Family Maintenance</option>
    <option>Education</option>
    <option>Medical Expenses</option>
    <option>Travel</option>
  </select>
</div>

            </div>
          </div>

          {/* PREFERENTIAL RATE */}
          <div className="bg-[#F58220]/5 border border-[#F58220]/20 p-5 rounded-xl flex gap-4">
            <div className="text-[#F58220] font-bold">★</div>
            <div>
              <p className="font-bold text-[#F58220]">
                Preferential Rate Applied
              </p>
              <p className="text-xs text-gray-600">
                As a Wealth management customer, you are receiving a 0.5% markup discount on today's mid market rate. 
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION – TRANSFER SUMMARY */}
        <div className="space-y-6">
          <div className="bg-[#003A8F] text-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/20">
              <h3 className="text-lg font-extrabold">
                Transfer Summary
              </h3>
            </div>

            {/* Content */}
            <div className="px-6 py-5 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Exchange Rate</span>
                <span className="font-bold">
                  1 INR = 0.01202 USD
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">
                  Transfer Amount
                </span>
                <span className="font-bold">₹50,000.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">
                  Transfer Fee
                </span>
                <span className="font-bold">₹500.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">
                  GST (18% on fee)
                </span>
                <span className="font-bold">₹90.00</span>
              </div>

              <div className="mt-4 p-4 bg-white/10 rounded-lg flex justify-between items-center font-extrabold">
                <span>Recipient Gets</span>
                <span>$601.00</span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 bg-[#002F73] flex justify-between items-center">
              <div>
                <p className="text-xs uppercase text-white/60 font-bold tracking-widest">
                  Total Payable
                </p>
                <p className="text-2xl font-extrabold">
                  ₹50,590.00
                </p>
              </div>

              <span className="text-xs bg-white/10 px-3 py-1 rounded-full font-bold">
                INR
              </span>
            </div>
          </div>
{/* Security Assurance */}
<div className="flex items-center gap-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  className="w-5 h-5 flex-shrink-0"
>
  {/* Shield */}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z"
  />
  {/* Tick */}
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4"
  />
</svg>


  <span className="font-semibold">
    Your transaction is protected by 256-bit encryption
  </span>
</div>

          <button
            onClick={proceedToCompliance}
            className="w-full bg-[#F58220] hover:bg-[#e0751a] text-white py-4 rounded-lg font-bold text-lg"
          >
            Proceed to Compliance →
          </button>

          <button className="w-full border py-3 rounded-lg font-bold">
            Save as Draft
          </button>
        </div>
      </div>
    </main>
  );
}
