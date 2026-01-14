import React from "react";

export default function TrackingApp() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="bg-white border rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs uppercase text-gray-400 font-bold">
              Reference Number
            </p>
            <h1 className="text-[#003A8F] text-2xl font-extrabold">
              #ICICI-8829103
            </h1>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-1 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              In Transit
            </span>
            <p className="text-xs text-gray-400 mt-1">
              Last updated: 2 mins ago
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 border-t pt-6">
          <Info label="Recipient" value="Rajesh Kumar" />
          <Info label="Amount Sent" value="$5,000.00 USD" />
          <Info label="Exchange Rate" value="1 USD = 83.45 INR" />
          <Info label="Est. Arrival" value="Oct 26, 2023" highlight />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-8 shadow-sm">
          <h3 className="font-extrabold text-lg text-secondary mb-8">
            Transaction Journey
          </h3>

          <Timeline
  title="Initiated"
  desc="Transfer request submitted via mobile app."
  time="Oct 24, 10:00 AM"
  status="done"
/>

<Timeline
  title="In Compliance"
  desc="FEMA and regulatory checks cleared."
  time="Oct 24, 11:30 AM"
  status="done"
/>

<Timeline
  title="Payment Successful"
  desc="Funds debited from source account."
  time="Oct 24, 02:15 PM"
  status="done"
/>

<Timeline
  title="Processing"
  desc="International wire transfer in progress."
  status="active"
/>

<Timeline
  title="Completed"
  desc="Waiting for recipient’s bank confirmation."
  status="pending"
/>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-xs uppercase font-bold text-gray-400 mb-4">
              Manage Transaction
            </p>

            <button className="w-full bg-primary text-white py-4 rounded-lg font-bold mb-3">
              Download Receipt (PDF)
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-4 px-4 rounded-lg transition-all border border-gray-200">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>
  Share Details
</button>
          </div>

          {/* Recipient */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-xs uppercase font-bold text-gray-400 mb-4">
              Recipient Details
            </p>

            <div className="space-y-3 text-sm">
              <Row label="Name" value="Rajesh Kumar" />
              <Row label="Bank" value="ICICI Bank Ltd" />
              <Row label="Account" value="•••• 8291" />
              <Row label="Purpose" value="Family Maintenance" />
            </div>
          </div>

          {/* Help */}
         <div className="bg-[#003A8F] text-white rounded-xl p-6 shadow-lg">
            <h4 className="font-extrabold text-lg mb-2">Need Help?</h4>
            <p className="text-sm text-white/80 mb-4">
              Our relationship managers are available 24/7.
            </p>
            <button className="w-full bg-white text-[#003A8F] py-3 rounded-lg font-bold">
              Chat with Support
            </button>
          </div>

          <button className="text-[#003A8F] font-bold text-sm">
            ← Back to Transactions
          </button>
        </div>
      </div>
    </main>
  );
}

/* Reusable components */

const Info = ({ label, value, highlight }) => (
  <div>
    <p className="text-xs uppercase text-gray-400 font-bold mb-1">
      {label}
    </p>
    <p
      className={`font-bold ${
        highlight ? "text-primary" : "text-gray-900"
      }`}
    >
      {value}
    </p>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

const Timeline = ({ title, desc, time, status }) => {
  /*
    status: "done" | "active" | "pending"
  */

  const isDone = status === "done";
  const isActive = status === "active";

  return (
    <div className="relative flex gap-6 pb-10">
      {/* Vertical Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gray-200">
        {(isDone || isActive) && (
          <div
            className={`w-full ${
              isDone ? "h-full bg-[#10B981]" : "h-1/2 bg-[#F58220]"
            }`}
          />
        )}
      </div>

      {/* Status Circle */}
      <div className="relative z-10">
        {isDone && (
          <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        )}

        {isActive && (
          <div className="w-6 h-6 rounded-full bg-[#F58220] flex items-center justify-center animate-pulse shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </div>
        )}

        {!isDone && !isActive && (
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p
            className={`font-bold ${
              isDone
                ? "text-gray-900"
                : isActive
                ? "text-[#F58220]"
                : "text-gray-400"
            }`}
          >
            {title}
          </p>

          {time && (
            <span className="text-xs text-gray-400">{time}</span>
          )}

          {isActive && (
            <span className="text-xs font-bold text-[#F58220] animate-pulse">
              Ongoing
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
};
