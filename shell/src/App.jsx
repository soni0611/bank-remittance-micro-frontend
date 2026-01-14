import React, { Suspense, lazy, useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ServiceUnavailable from "./ServiceUnavailable";
// Lazy load micro-frontends
const OnboardingApp = lazy(() => import("onboarding/OnboardingApp"));
const RemittanceApp = lazy(() => import("remittance/RemittanceApp"));
const ComplianceApp = lazy(() => import("compliance/ComplianceApp"));
const PaymentApp = lazy(() => import("payment/PaymentApp"));
const TrackingApp = lazy(() => import("tracking/TrackingApp"));

export default function App() {
  const [currentStep, setCurrentStep] = useState("onboarding");

  const steps = [
    "onboarding",
    "remittance",
    "compliance",
    "payment",
    "tracking",
  ];

  const currentIndex = steps.indexOf(currentStep);

  useEffect(() => {
    const handler = (e) => {
      setCurrentStep(e.detail.step);
    };

    window.addEventListener("mf:navigate", handler);
    return () => window.removeEventListener("mf:navigate", handler);
  }, []);

  const renderMF = () => {
  switch (currentStep) {
    case "onboarding":
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Onboarding" />}
        >
          <OnboardingApp />
        </ErrorBoundary>
      );

    case "remittance":
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Remittance" />}
        >
          <RemittanceApp />
        </ErrorBoundary>
      );

    case "compliance":
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Compliance" />}
        >
          <ComplianceApp />
        </ErrorBoundary>
      );

    case "payment":
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Payment" />}
        >
          <PaymentApp />
        </ErrorBoundary>
      );

    case "tracking":
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Tracking" />}
        >
          <TrackingApp />
        </ErrorBoundary>
      );

    default:
      return (
        <ErrorBoundary
          fallback={<ServiceUnavailable serviceName="Onboarding" />}
        >
          <OnboardingApp />
        </ErrorBoundary>
      );
  }
};


  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      {/* ================= HEADER ================= */}
      <header className="bg-white border-b">
        {/* ---------- TOP BAR ---------- */}
        <div className="h-16 px-6 flex items-center justify-between">
          {/* LOGO (Clickable Home) */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentStep("onboarding")}
            title="Go to Home"
          >
            <div className="bg-[#003A8F] p-2 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="currentColor"
                className="text-white"
              >
                <path d="M24 4H6V17.33V30.66H24V44H42V30.66V17.33H24V4Z" />
              </svg>
            </div>
            <div>
              <p className="font-extrabold text-[#003A8F] uppercase leading-none">
                ICICI Bank
              </p>
              <p className="text-[9px] font-bold tracking-widest text-[#F58220] uppercase">
                International Remittance
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-[#003A8F]">
                Corporate Portal
              </p>
              <p className="text-[10px] text-gray-400">Demo Instance</p>
            </div>

            {/* NOTIFICATION ICON */}
            <div className="relative">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#F58220] rounded-full ring-2 ring-white" />
            </div>
          </div>
        </div>

        {/* ---------- STEP NAVIGATION ---------- */}
        <div className="h-12 px-6 flex items-center justify-center gap-6 text-xs font-bold uppercase">
          {steps.map((step, index) => {
            let classes = "text-gray-400 border-transparent";

            if (index < currentIndex) {
              // completed
              classes = "text-[#10B981] border-[#10B981]";
            } else if (index === currentIndex) {
              // active
              classes = "text-[#F58220] border-[#F58220]";
            }

            return (
              <div
                key={step}
                className={`pb-2 border-b-2 transition-colors ${classes}`}
              >
                {index + 1}. {step}
              </div>
            );
          })}
        </div>
      </header>

      {/* ================= MICRO-FRONTEND CONTENT ================= */}
      <Suspense fallback={<FullScreenLoader />}>
        {renderMF()}
      </Suspense>
    </div>
  );
}

/* ================= FULL SCREEN LOADER ================= */

function FullScreenLoader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <div className="w-14 h-14 border-4 border-[#003A8F]/20 border-t-[#F58220] rounded-full animate-spin" />
      <p className="mt-4 font-bold text-[#003A8F]">
        Loading Secure Module…
      </p>
    </div>
  );
}
