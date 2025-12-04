import React from 'react';

const JournalCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-3 border rounded shadow-sm text-center">
        <h2 className="text-xl font-semibold underline mb-1">
          Mathema Sciences Today
        </h2>
        <p className="text-xs text-gray-700 mb-2">
          Volume 1 Issue 1 June 2021
        </p>
        <div className="flex justify-center space-x-1">
          <a
            href="https://aptsms.org/assets/pdf/e-magazine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            View
          </a>
          <a
            href="https://aptsms.org/assets/pdf/e-magazine.pdf"
            download
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
