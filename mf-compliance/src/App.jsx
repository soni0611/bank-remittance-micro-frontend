import React from "react";

export default function ComplianceApp() {
  const proceedToPayment = () => {
    window.dispatchEvent(
      new CustomEvent("mf:navigate", {
        detail: { step: "payment" },
      })
    );
  };

  return (
    <main className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* HEADER */}
      <div className="border-l-4 border-[#F58220] pl-6">
        <h1 className="text-3xl font-extrabold text-[#003A8F]">
          Security & Compliance
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Automated verification completed on Oct 24, 2023 · 14:20 IST
        </p>
      </div>

      {/* STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="AML Sanctions Check"
          status="Passed"
          desc="No matches found in UN, EU, OFAC watchlists."
          color="#10B981"
          icon="check"
        />
        <StatusCard
          title="Transaction Risk Profile"
          status="Low Risk"
          desc="Transaction pattern aligns with historical behaviour."
          color="#003A8F"
          icon="shield"
        />
        <StatusCard
          title="LRS Limit Check"
          status="Within Limit"
          desc="Compliance Reference: LRS-992834-IND"
          color="#F58220"
          icon="doc"
        />
      </div>

      {/* VERIFICATION + UTILIZATION */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-3 bg-white border rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-[#003A8F]">
            Verification Checklist
          </h3>

          <CheckRow label="PAN Card (KYC)" />
          <CheckRow label="Source of Funds Declaration" />
          <CheckRow label="Recipient Bank Risk Assessment" />

          <div className="flex justify-between text-sm text-gray-400 italic border-t pt-3">
            <span>Final Clearing Review</span>
            <span>In Progress</span>
          </div>

          {/* REGULATORY DECLARATION */}
          <div className="bg-gray-50 border rounded-lg p-4 mt-4">
            <label className="flex gap-3 text-sm text-gray-700">
              <input type="checkbox" checked readOnly className="mt-1" />
              I hereby declare that this remittance complies with RBI’s
              Liberalised Remittance Scheme (LRS), FEMA guidelines, and all
              applicable Indian regulatory requirements.
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6 space-y-5">
          <h3 className="font-bold text-[#003A8F]">
            Annual LRS Utilization
          </h3>

          <div className="text-sm flex justify-between">
            <span>Total Permitted Limit</span>
            <strong>$250,000</strong>
          </div>

          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div className="bg-[#F58220] h-full w-[22%]" />
          </div>

          <div className="text-xs flex justify-between font-bold">
            <span className="text-[#F58220]">$55,000 Used</span>
            <span className="text-gray-400">$195,000 Remaining</span>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-xs uppercase text-gray-500 font-bold">
              Current Transaction
            </p>
            <p className="text-2xl font-extrabold text-gray-900">
              $12,450.00
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Exchange Rate: 1 USD = 83.24 INR
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER ACTION */}
      <div className="flex justify-between items-center pt-6 border-t">
        <button className="text-sm font-bold text-gray-500">
          ← Modify Transaction
        </button>

        <button
          onClick={proceedToPayment}
          className="bg-[#F58220] hover:bg-[#e0751a] text-white px-10 py-4 rounded-xl font-bold shadow-lg"
        >
          Proceed to Payment →
        </button>
      </div>
    </main>
  );
}

/* ---------- Helper Components ---------- */

const StatusCard = ({ title, status, desc, color, icon }) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <Icon type={icon} color={color} />
      <span
        className="text-xs font-bold px-3 py-1 rounded-full"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {status}
      </span>
    </div>
    <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);

const CheckRow = ({ label }) => (
  <div className="flex justify-between items-center border-b py-2 text-sm">
    <span>{label}</span>
    <span className="flex items-center gap-2 text-[#10B981] font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Verified
    </span>
  </div>
);

const Icon = ({ type, color }) => {
  if (type === "check") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6M7 4h7l3 3v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
      />
    </svg>
  );
};
