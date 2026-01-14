import React from "react";

export default function OnboardingApp() {
  return (
    <div style={{ border: "2px solid blue", padding: 20 }}>
      <h3>👤 Onboarding Micro-Frontend</h3>
      <input placeholder="Username" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />
      <button>Login</button>
    </div>
  );
}
