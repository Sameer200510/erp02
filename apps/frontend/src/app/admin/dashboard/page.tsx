import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 border-t-4 border-t-blue-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Applications</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">1,204</p>
          <p className="mt-2 text-sm text-green-600 flex items-center">
            <span>↑ 12% from last month</span>
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 border-t-4 border-t-green-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Approved Admissions</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">842</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 border-t-4 border-t-yellow-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pending Verifications</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">146</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100 border-t-4 border-t-red-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Rejected</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">216</p>
        </div>
      </div>

      {/* Recent Activity Table Mock */}
      <div className="bg-white shadow rounded-lg mt-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Applications</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">B.Tech CS</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Verification Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-06-05</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">MBA</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-06-04</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
