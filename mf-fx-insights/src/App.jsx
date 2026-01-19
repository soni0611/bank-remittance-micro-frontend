import React from "react";

export default function FxInsightsApp() {
  const goBack = () => {
    window.dispatchEvent(
      new CustomEvent("mf:navigate", {
        detail: { step: "tracking" },
      })
    );
  };

  const rates = [
    { pair: "USD → INR", rate: "83.24", trend: "up" },
    { pair: "EUR → INR", rate: "90.15", trend: "down" },
    { pair: "GBP → INR", rate: "105.70", trend: "up" },
  ];

  return (
    <main className="max-w-6xl mx-auto py-8 px-4 space-y-6">
      <div className="border-l-4 border-[#F58220] pl-6">
        <h1 className="text-3xl font-extrabold text-[#003A8F]">
          FX Rates & Insights
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Live indicative foreign exchange rates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rates.map((r) => (
          <div
            key={r.pair}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >
            <p className="text-sm text-gray-400 font-bold uppercase">
              {r.pair}
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-2xl font-extrabold text-gray-900">
                {r.rate}
              </p>

              {r.trend === "up" ? (
                <svg
                  className="w-6 h-6 text-[#10B981]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12l5-5 5 5M10 7v10" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-[#F58220]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12l5 5 5-5M10 17V7" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border rounded-lg p-4 text-sm text-gray-600">
        Rates are indicative and subject to market fluctuations.
      </div>

      <div className="flex justify-end">
        <button
          onClick={goBack}
          className="bg-[#003A8F] hover:bg-[#002f73] text-white px-6 py-3 rounded-lg font-bold"
        >
          Back to Tracking
        </button>
      </div>
    </main>
  );
}
