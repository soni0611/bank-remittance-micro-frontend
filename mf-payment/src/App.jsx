import React from "react";

export default function PaymentApp() {
  return (
    <div style={{ border: "2px solid purple", padding: 20 }}>
      <h3>💳 Payment Micro-Frontend</h3>
      <button>Pay via UPI</button>
      <button>Pay via Bank</button>
    </div>
  );
}