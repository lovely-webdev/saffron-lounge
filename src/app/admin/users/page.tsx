"use client";

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch {
        setError('Could not load users');
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 px-2 sm:px-4 relative">
      <ThemeToggle />
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Users List</h1>
        {loading && <div className="flex justify-center items-center h-32"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></span></div>}
        {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
        {!loading && !error && (
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <colgroup>
                <col style={{ width: '40%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: { id: string; name: string; email: string }, idx: number) => (
                  <tr key={idx} className="hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
                        {user.name?.[0]?.toUpperCase() || <span className="opacity-50">?</span>}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{user.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/admin/users/${user.id}`} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-700 font-semibold text-sm transition-all">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 0l-3-3m3 3l-3 3" /></svg>
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
