import React from "react";

export default function ServiceUnavailable({ serviceName }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="bg-white border rounded-xl shadow-lg p-10 max-w-md text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 4h.01M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-extrabold text-gray-900">
          Service Temporarily Unavailable
        </h2>

        <p className="text-gray-500 mt-3 text-sm">
          The <strong>{serviceName}</strong> module is currently unavailable.
          Please try again later or continue with other available services.
        </p>

        <div className="mt-6 text-xs text-gray-400">
          Error Code: MF-{serviceName?.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
