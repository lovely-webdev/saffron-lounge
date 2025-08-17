"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UserDetailPage() {
  const params = useParams();
  const userId = params?.id;
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users?id=${userId}`);
        if (!res.ok) throw new Error('Failed to fetch user');
        const data = await res.json();
        // If API returns an array, find the user by id
        const found = Array.isArray(data) ? data.find((u: { id: string }) => String(u.id) === String(userId)) : data;
        setUser(found);
      } catch {
        setError('Could not load user');
      } finally {
        setLoading(false);
      }
    }
    if (userId) fetchUser();
  }, [userId]);

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <Link href="/admin/users" className="text-blue-600 hover:underline">&larr; Back to Users List</Link>
      <h1 className="text-2xl font-bold mb-6 mt-4">User Information</h1>
      {loading && <div>Loading user...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && user && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="mb-4">
            <span className="font-semibold">Name:</span> {user.name}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Email:</span> {user.email}
          </div>
          {/* Add more user fields here as needed */}
        </div>
      )}
      {!loading && !error && !user && (
        <div className="text-gray-500">User not found.</div>
      )}
    </div>
  );
}
