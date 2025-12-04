import React from 'react'
import { lifeMembers } from '../../../constants/constants'

const MembersList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            Life Members
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-1">
                <h3 className="font-semibold text-lg">ID</h3>
              </div>
              <div className="col-span-3">
                <h3 className="font-semibold text-lg">Name</h3>
              </div>
              <div className="col-span-4">
                <h3 className="font-semibold text-lg">Address</h3>
              </div>
              <div className="col-span-2">
                <h3 className="font-semibold text-lg">Mobile</h3>
              </div>
              <div className="col-span-2">
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
            </div>
          </div>

          <div className="divide-y divide-green-100">
            {lifeMembers.map((member, index) => (
              <div
                key={member.id}
                className={`grid grid-cols-12 gap-4 p-6 transition-all duration-200 hover:bg-green-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-base font-medium text-gray-700 bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    {member.id}
                  </span>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className="text-base text-gray-800 font-medium">
                    {member.name}
                  </span>
                </div>
                <div className="col-span-4 flex items-center">
                  <span className="text-base text-gray-600">
                    {member.address}
                  </span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-base text-gray-600">
                    {member.mobile}
                  </span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-base text-gray-600">
                    {member.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersList