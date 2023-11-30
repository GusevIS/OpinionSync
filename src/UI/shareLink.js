import React, { useState } from "react";

const ShareLink = () => {
  const [link, setLink] = useState("https://example.com"); // Replace with your actual link
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <hr className="w-full border-t border-gray-800" />
      <span className="text-sm text-black">Share this question</span>
      <div className="flex border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          value={link}
          className="p-2 flex-grow"
          readOnly // This makes the input not editable by the user
        />
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-200 hover:bg-gray-300"
        >
          {/* Icon placeholder - replace with actual icon */}
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M13 5H6v4M4 6h18v12H4z"></path>
          </svg>
        </button>
      </div>
      {copySuccess && (
        <div className="text-sm text-green-500">{copySuccess}</div>
      )}
    </div>
  );
};

export default ShareLink;
