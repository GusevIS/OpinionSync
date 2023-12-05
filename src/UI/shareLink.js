import React, { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
      <span className="small-text text-sm text-black">Share this room</span>
      <div className="flex border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          value={link}
          className="p-2 flex-grow"
          readOnly // This makes the input not editable by the user
        />
        <button
          onClick={copyToClipboard}
          className="p-2"
          style={{ backgroundColor: '#EF7068', transition: 'background-color 0.3s' }}
        >
          {/* Icon placeholder - replace with actual icon */}
          <ContentCopyIcon style={{ color: 'white' }}>
          </ContentCopyIcon>
        </button>
      </div>
      {copySuccess && (
        <div className="small-text ">{copySuccess}</div>
      )}
    </div>
  );
};

export default ShareLink;
