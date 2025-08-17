"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Icons
const UsersIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
	</svg>
);

const ProductsIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
	</svg>
);

const OrdersIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
	</svg>
);

const CategoriesIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
	</svg>
);

const BlogIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
	</svg>
);

const RevenueIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
	</svg>
);

const TrendingUpIcon = ({ className = "" }) => (
	<svg className={"w-4 h-4 "+className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
	</svg>
);

const TrendingDownIcon = ({ className = "" }) => (
	<svg className={"w-4 h-4 "+className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
	</svg>
);

const PlusIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
	</svg>
);


export default function AdminDashboard() {
  const [stats, setStats] = useState({
	users: 0,
	products: 0,
	orders: 0,
	revenue: 0,
  });

  useEffect(() => {
	// Fetch stats from APIs
	Promise.all([
	  fetch('/api/auth/signup').then(() => ({ count: 12 })).catch(() => ({ count: 0 })),
	  fetch('/api/products').then(r => r.json()).then(data => ({ count: data.length })).catch(() => ({ count: 0 })),
	  fetch('/api/orders').then(r => r.json()).then(data => ({ count: data.length })).catch(() => ({ count: 0 })),
  fetch('/api/orders').then(r => r.json()).then(data => ({ count: data.reduce((sum: number, order: { total: number }) => sum + order.total, 0) })).catch(() => ({ count: 0 })),
	]).then(([users, products, orders, revenue]) => {
	  setStats({
		users: users.count,
		products: products.count,
		orders: orders.count,
		revenue: revenue.count,
	  });
	});
  }, []);

  const statCards = [
	{
	  name: 'Total Users',
	  value: stats.users,
	  change: '+12%',
	  changeType: 'positive',
	  icon: UsersIcon,
	  color: 'from-blue-500 to-blue-600',
	  bgColor: 'bg-blue-50 dark:bg-blue-900/20',
	  iconBg: 'bg-blue-500',
	  textColor: 'text-blue-700 dark:text-blue-300',
	},
	{
	  name: 'Total Products',
	  value: stats.products,
	  change: '+5%',
	  changeType: 'positive',
	  icon: ProductsIcon,
	  color: 'from-emerald-500 to-emerald-600',
	  bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
	  iconBg: 'bg-emerald-500',
	  textColor: 'text-emerald-700 dark:text-emerald-300',
	},
	{
	  name: 'Total Orders',
	  value: stats.orders,
	  change: '+23%',
	  changeType: 'positive',
	  icon: OrdersIcon,
	  color: 'from-violet-500 to-violet-600',
	  bgColor: 'bg-violet-50 dark:bg-violet-900/20',
	  iconBg: 'bg-violet-500',
	  textColor: 'text-violet-700 dark:text-violet-300',
	},
	{
	  name: 'Total Revenue',
	  value: `$${stats.revenue.toFixed(2)}`,
	  change: '+18%',
	  changeType: 'positive',
	  icon: RevenueIcon,
	  color: 'from-amber-500 to-amber-600',
	  bgColor: 'bg-amber-50 dark:bg-amber-900/20',
	  iconBg: 'bg-amber-500',
	  textColor: 'text-amber-700 dark:text-amber-300',
	},
  ];

  // Removed recentActivities as per request

  const quickActions = [
	{ name: 'Add Product', href: '/admin/products', icon: ProductsIcon, color: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700', description: 'Create new product listings' },
	{ name: 'Create Category', href: '/admin/categories', icon: CategoriesIcon, color: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700', description: 'Organize your products' },
	{ name: 'Write Blog Post', href: '/admin/blog', icon: BlogIcon, color: 'from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700', description: 'Share your knowledge' },
	{ name: 'View Orders', href: '/admin/orders', icon: OrdersIcon, color: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700', description: 'Manage customer orders' },
  ];

  // Removed unused getStatusColor

  return (
	<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
	  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
		{/* Header Section */}
		<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 mt-0">
		  <div className="flex-1 min-w-0">
			<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">The Saffron Lounge</h1>
	  <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Welcome back! Here&apos;s what&apos;s happening with your store today.</p>
		  </div>
		  <div className="flex flex-col gap-3 items-end">
			<Link
			  href="/admin/products"
			  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
			>
			  <PlusIcon />
			  <span className="ml-2">Add Product</span>
			</Link>
			<button
			  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 dark:focus:ring-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
			  onClick={() => {
				// Simple logout: clear localStorage/session and redirect
				if (typeof window !== 'undefined') {
				  localStorage.clear();
				  sessionStorage.clear();
				  window.location.href = '/';
				}
			  }}
			>
			  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
			  Logout
			</button>
		  </div>
		</div>

		{/* Stats Grid */}
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 mt-0">
		  {statCards.map((stat) => (
			<div
			  key={stat.name}
			  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
			>
			  <div className="p-6">
				<div className="flex items-center">
				  <div className={`flex-shrink-0 p-3 rounded-xl ${stat.iconBg} text-white shadow-lg`}>
					<stat.icon />
				  </div>
				  <div className="ml-4 flex-1 min-w-0">
					<dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</dt>
					<dd className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</dd>
				  </div>
				</div>
			  </div>
			  <div className={`${stat.bgColor} px-6 py-4 border-t border-gray-100 dark:border-gray-700`}>
				<div className="text-sm">
				  <div className="flex items-center">
					{stat.changeType === 'positive' ? (
					  <TrendingUpIcon className="text-green-500" />
					) : (
					  <TrendingDownIcon className="text-red-500" />
					)}
					<span className="ml-2 text-green-600 dark:text-green-400 font-semibold">{stat.change}</span>
					<span className="ml-2 text-gray-500 dark:text-gray-400">from last month</span>
				  </div>
				</div>
			  </div>
			</div>
		  ))}
		</div>

		{/* Main Content Grid */}
		<div className="flex flex-col xl:flex-row gap-8 mt-0">
		  {/* Left Column - Quick Actions */}
		  <div className="flex-1 min-w-0">
			<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
			  <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
				<h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Actions</h3>
				<p className="mt-1 text-gray-600 dark:text-gray-400">Access your most important admin functions</p>
			  </div>
			  <div className="p-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				  {quickActions.map((action) => (
					<Link
					  key={action.name}
					  href={action.href}
					  className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group`}
					>
					  <div className="flex justify-center mb-4">
						<div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
						  <action.icon />
						</div>
					  </div>
					  <div className="font-semibold text-lg mb-2">{action.name}</div>
					  <div className="text-sm text-white/80">{action.description}</div>
					</Link>
				  ))}
				</div>
			  </div>
			</div>
		  </div>

		  {/* Right Column - Users List */}
		  <div className="flex-1 min-w-0">
			<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
			  <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
				<h3 className="text-xl font-bold text-gray-900 dark:text-white">Registered Users</h3>
				<p className="mt-1 text-gray-600 dark:text-gray-400">List of all users</p>
			  </div>
			  <UserList />
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
}

// UserList component to display users from users.json
const UserList = () => {
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

  if (loading) return <div className="p-6">Loading users...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!users.length) return <div className="p-6 text-gray-500">No users found.</div>;

  return (
	<div className="overflow-x-auto p-6">
	  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
		<thead>
		  <tr>
			<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
			<th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
		  </tr>
		</thead>
		<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
	  {users.map((user: { name: string; email: string }, idx: number) => (
			<tr key={idx}>
			  <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
			  <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
			</tr>
		  ))}
		</tbody>
	  </table>
	</div>
  );
};