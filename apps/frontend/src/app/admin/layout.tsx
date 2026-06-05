import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-wider text-blue-400">ERP Admin</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/admin/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/admin/admissions" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-blue-400">
            Admissions
          </Link>
          <Link href="/admin/documents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-blue-400">
            Documents
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700 bg-gray-200 px-3 py-1 rounded-full">Admin User</span>
          </div>
        </header>
        <div className="p-6 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
