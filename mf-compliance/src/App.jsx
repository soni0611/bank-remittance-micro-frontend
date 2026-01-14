import React from "react";

export default function ComplianceApp() {
  return (
    <div style={{ border: "2px solid green", padding: 20 }}>
      <h3>💸 Compliance Micro-Frontend</h3>
      <input placeholder="Beneficiary Name" /><br /><br />
      <input placeholder="Amount" /><br /><br />
      <button>Proceed</button>
    </div>
  );
}
