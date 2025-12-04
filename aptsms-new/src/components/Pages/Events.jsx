import React from "react";

function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-2 md:p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            Upcoming Events
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 p-4">
          <h2 className="text-lg font-semibold text-green-700 mb-1">
            XXXIII Annual Congress of APTSMS &amp; International Conference on
            Applied Mathematics and Computing 2025 (ICAMC2025)
          </h2>
          <div className="mb-3">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full mr-2 mb-1">
              17th - 19th May 2025
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
              VIT-AP University, Dept. of Mathematics
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            Organized By:{" "}
            <span className="font-medium">
              Department of Mathematics, School of Advanced Sciences, VIT-AP
              University
            </span>{" "}
            in collaboration with <span className="font-medium">APTSMS</span>
          </p>
          <div className="mb-3">
            <h3 className="text-base font-semibold text-green-600 mb-1">Registration Fee</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-green-200 text-sm">
                <thead>
                  <tr className="bg-green-100 text-green-900">
                    <th className="border border-green-200 px-3 py-2 text-left font-semibold">Category</th>
                    <th className="border border-green-200 px-3 py-2 text-center font-semibold">Early Bird Registration<br/>(Non-Members of APTSMS)</th>
                    <th className="border border-green-200 px-3 py-2 text-center font-semibold">Early Bird Registration<br/>(Members of APTSMS)</th>
                    <th className="border border-green-200 px-3 py-2 text-center font-semibold">Delayed Registration<br/>(Non-Members of APTSMS)</th>
                    <th className="border border-green-200 px-3 py-2 text-center font-semibold">Delayed Registration<br/>(Members of APTSMS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-200 px-3 py-2">Delegates from Academic and R&amp;D Institutions</td>
                    <td className="border border-green-200 px-3 py-2 text-center">3500 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">3000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">4000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">3500 INR</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-green-200 px-3 py-2">Student/Research Scholar (Presentation)</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2500 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">3000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2500 INR</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-3 py-2">Participation</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">1500 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2500 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center">2000 INR</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-green-200 px-3 py-2">Industry Delegates</td>
                    <td className="border border-green-200 px-3 py-2 text-center" colSpan={2}>6000 INR</td>
                    <td className="border border-green-200 px-3 py-2 text-center" colSpan={2}>7000 INR</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 px-3 py-2">Foreign Delegates</td>
                    <td className="border border-green-200 px-3 py-2 text-center" colSpan={2}>USD 150</td>
                    <td className="border border-green-200 px-3 py-2 text-center" colSpan={2}>USD 200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-600 mb-1">
              Important Dates
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <span className="font-medium">Registration:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    First date of registration:{" "}
                    <span className="font-medium">20th March 2025</span>
                  </li>
                  <li>
                    Last date of early registration:{" "}
                    <span className="font-medium">5th May 2025</span>
                  </li>
                  <li>
                    Last date of delayed registration:{" "}
                    <span className="font-medium">12th May 2025</span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Abstract:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Last date for submission of Abstract:{" "}
                    <span className="font-medium">5th May 2025</span>
                  </li>
                  <li>
                    Notification of Acceptance of Abstract:{" "}
                    <span className="font-medium">7th May 2025</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-600 mb-1">Links</h3>
            <ul className="list-disc list-inside text-blue-700">
              <li>
                Registration &amp; Payment:{" "}
                <a
                  href="https://shorturl.at/oaqWe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  https://shorturl.at/oaqWe
                </a>
              </li>
              <li>
                Abstract Submission:{" "}
                <a
                  href="https://forms.gle/wisqNjJhcfYCM3p68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  https://forms.gle/wisqNjJhcfYCM3p68
                </a>
              </li>
              <li>
                Conference Website:{" "}
                <a
                  href="https://shorturl.at/a11Ht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  https://shorturl.at/a11Ht
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:icamc25@vitap.ac.in"
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  icamc25@vitap.ac.in
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-3">
            <a
              href="https://aptsms.org/assets/pdf/XXXIII%20Annual%20Congress%20of%20APTSMS%20&%20International%20Conference%20at%20VIT-AP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Download Brochure
            </a>
            <a
              href="https://aptsms.org/assets/pdf/XXXIII%20Annual%20Congress%20of%20APTSMS%20&%20International%20Conference%20at%20VIT-AP.pdf"
              download
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
