import React, { useState } from "react";

export default function OnboardingApp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials
    if (username === "admin" && password === "123456") {
      setError("");

      // Navigate to Remittance MF
      window.dispatchEvent(
        new CustomEvent("mf:navigate", {
          detail: { step: "remittance" },
        })
      );
    } else {
      setError("User details are incorrect. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f7f9] px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT PANEL */}
        <div className="bg-[#003A8F] text-white p-10 flex flex-col justify-between">
          <div>
            {/* Step Label */}
            <span className="inline-block bg-white/10 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6">
              Step 1 of 5 · Onboarding
            </span>

            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Swift, Secure &<br />Global Remittances
            </h2>

            <p className="text-white/80 text-sm leading-relaxed">
              Access ICICI Bank’s international remittance platform designed
              for secure, compliant, and real-time global transfers.
            </p>
          </div>

          {/* Info Card */}
          <div className="mt-10 bg-white/10 rounded-xl p-5">
            <p className="text-xs uppercase text-white/60 font-bold">
              Security Notice
            </p>
            <p className="font-semibold mt-1">
              All sessions are protected with 256-bit encryption
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
            Corporate Login
          </h3>

          <p className="text-gray-500 text-sm mb-8">
            Please enter your corporate credentials to continue.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-xs font-bold uppercase text-gray-500">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter corporate username"
                className="mt-2 w-full h-12 px-4 border rounded-lg font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-500">
                Password
              </label>
              <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter password"
  autoComplete="new-password"
  name="icici-password"
  className="mt-2 w-full h-12 px-4 border rounded-lg font-semibold"
/>

            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#F58220] hover:bg-[#e0751a] text-white py-4 rounded-lg font-extrabold text-lg transition-all"
            >
              Login & Continue →
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-6 text-center">
            © ICICI Bank Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
