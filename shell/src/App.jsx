import React, { Suspense, lazy, useState } from "react";

// Lazy load all micro-frontends
const OnboardingApp = lazy(() => import("onboarding/OnboardingApp"));
const RemittanceApp = lazy(() => import("remittance/RemittanceApp"));
const ComplianceApp = lazy(() => import("compliance/ComplianceApp"));
const PaymentApp = lazy(() => import("payment/PaymentApp"));
const TrackingApp = lazy(() => import("tracking/TrackingApp"));

export default function App() {
  const [currentStep, setCurrentStep] = useState("onboarding");

  const renderMF = () => {
    switch (currentStep) {
      case "onboarding":
        return <OnboardingApp />;
      case "remittance":
        return <RemittanceApp />;
      case "compliance":
        return <ComplianceApp />;
      case "payment":
        return <PaymentApp />;
      case "tracking":
        return <TrackingApp />;
      default:
        return <OnboardingApp />;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🏦 Bank Remittance Portal (Shell)</h2>

      {/* Navigation */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setCurrentStep("onboarding")}>Onboarding</button>
        <button onClick={() => setCurrentStep("remittance")}>Remittance</button>
        <button onClick={() => setCurrentStep("compliance")}>Compliance</button>
        <button onClick={() => setCurrentStep("payment")}>Payment</button>
        <button onClick={() => setCurrentStep("tracking")}>Tracking</button>
      </div>

      <hr />

      {/* Micro-Frontend Loader */}
      <Suspense fallback={<div>Loading Micro-Frontend...</div>}>
        {renderMF()}
      </Suspense>
    </div>
  );
}
