import React from 'react';

const APTSMSPresidents = () => {
  const presidentsData = [
    { id: 1, president: "Prof. G.Lakshmi Narayana", generalSecretary: "-" },
    { id: 2, president: "Prof. D.Ramakotaiah", generalSecretary: "-" },
    { id: 3, president: "Prof.K.Sitaram", generalSecretary: "-" },
    { id: 4, president: "Prof. P.V.Arunachalam", generalSecretary: "-" },
    { id: 5, president: "Prof.K.L.N.Swamy", generalSecretary: "-" },
    { id: 6, president: "Prof.I.H.NagarajaRao", generalSecretary: "-" },
    { id: 7, president: "Prof.D.V.Krishna", generalSecretary: "-" },
    { id: 8, president: "Prof.Sivarama Prasad", generalSecretary: "-" },
    { id: 9, president: "Prof.T.K.V.Iyengar", generalSecretary: "-" },
    { id: 10, president: "Prof.U.M.Swamy", generalSecretary: "-" },
    { id: 11, president: "Prof.D.Ramamurthy", generalSecretary: "-" },
    { id: 12, president: "Prof.V.V.Hara Gopal", generalSecretary: "-" },
    { id: 13, president: "Prof L.Anand Babu", generalSecretary: "-" },
    { id: 14, president: "Prof G.Sarojamma", generalSecretary: "-" },
    { id: 15, president: "Prof.S. Sreenadh", generalSecretary: "-" },
    { id: 16, president: "Prof.B. Maheswari", generalSecretary: "-" },
    { id: 17, president: "Prof. T. Srinivas", generalSecretary: "-" },
    { id: 18, president: "Prof. E. Keshava Reddy", generalSecretary: "-" },
    { id: 19, president: "Prof. N Kishan", generalSecretary: "Dr. C Jaya Subba Reddy" },
    { id: 20, president: "Prof. D Srinivasacharya", generalSecretary: "Prof. N. Ramakrishna" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            APTSMS Presidents
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold text-lg">S No</h3>
              </div>
              <div className="col-span-6 md:col-span-7">
                <h3 className="font-semibold text-lg">PRESIDENT</h3>
              </div>
              <div className="col-span-4">
                <h3 className="font-semibold text-lg">General Secretary</h3>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-green-100">
            {presidentsData.map((item, index) => (
              <div 
                key={item.id} 
                className={`grid grid-cols-12 gap-4 p-6 transition-all duration-200 hover:bg-green-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="col-span-2 md:col-span-1 flex items-center">
                  <span className="text-base font-medium text-gray-700 bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    {item.id}
                  </span>
                </div>
                <div className="col-span-6 md:col-span-7 flex items-center">
                  <span className="text-base text-gray-800 font-medium">
                    {item.president}
                  </span>
                </div>
                <div className="col-span-4 flex items-center">
                  <span className="text-base text-gray-600">
                    {item.generalSecretary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default APTSMSPresidents;