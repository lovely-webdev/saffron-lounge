"use client";

import { useEffect, useState } from 'react';

export type OrderItem = {
	productId: string;
	quantity: number;
	price: number;
};

export type Order = {
	id: string;
	items: OrderItem[];
	status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
	total: number;
	customerName?: string;
	customerEmail?: string;
	createdAt: string;
	updatedAt: string;
};

export default function OrdersAdminPage() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(false);
	const [item, setItem] = useState<OrderItem>({ productId: '', quantity: 1, price: 0 });
	const [customer, setCustomer] = useState({ name: '', email: '' });

	useEffect(() => {
		fetch('/api/orders').then(r => r.json()).then(setOrders);
	}, []);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		const payload = {
			items: [item],
			customerName: customer.name || undefined,
			customerEmail: customer.email || undefined,
		};
		const res = await fetch('/api/orders', { method: 'POST', body: JSON.stringify(payload) });
		const created: Order = await res.json();
		setOrders(p => [created, ...p]);
		setItem({ productId: '', quantity: 1, price: 0 });
		setCustomer({ name: '', email: '' });
		setLoading(false);
	}

	const getStatusColor = (status: Order['status']) => {
		const colors = {
			pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
			paid: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
			shipped: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
			completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
			cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
		};
		return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="space-y-8">
					{/* Header */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Orders Management</h1>
						<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
							Track and manage customer orders and fulfillment.
						</p>
					</div>
					
					{/* Create Order Form */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Order</h2>
							<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Add a new order to your system</p>
						</div>
						<form onSubmit={onSubmit} className="p-6 space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Customer Name
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Enter customer name" 
										value={customer.name} 
										onChange={e => setCustomer({ ...customer, name: e.target.value })} 
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Customer Email
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Enter customer email" 
										value={customer.email} 
										onChange={e => setCustomer({ ...customer, email: e.target.value })} 
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Product ID *
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Enter product ID" 
										value={item.productId} 
										onChange={e => setItem({ ...item, productId: e.target.value })} 
										required 
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Quantity
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Quantity" 
										type="number" 
										value={item.quantity} 
										onChange={e => setItem({ ...item, quantity: Number(e.target.value) })} 
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Price
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="0.00" 
										type="number" 
										step="0.01" 
										value={item.price} 
										onChange={e => setItem({ ...item, price: Number(e.target.value) })} 
									/>
								</div>
							</div>
							<div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
								<button 
									disabled={loading} 
									className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
								>
									{loading ? 'Creating...' : 'Create Order'}
								</button>
							</div>
						</form>
					</div>

					{/* Orders List */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Orders ({orders.length})</h2>
							<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Track and manage all customer orders</p>
						</div>
						<div className="divide-y divide-gray-200 dark:divide-gray-700">
							{orders.map(order => (
								<div key={order.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0">
												<div className="h-12 w-12 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center shadow-lg">
													<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
													</svg>
												</div>
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-3 mb-2">
													<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
														{order.status.toUpperCase()}
													</span>
													<span className="text-lg font-bold text-blue-600 dark:text-blue-400">${order.total.toFixed(2)}</span>
												</div>
												<div className="text-sm text-gray-600 dark:text-gray-400">
													{order.customerName} • {order.customerEmail} • {new Date(order.createdAt).toLocaleDateString()}
												</div>
												<div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
													{order.items.length} item(s)
												</div>
											</div>
										</div>
										<div className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
											{order.id.slice(0, 8)}...
										</div>
									</div>
								</div>
							))}
							{orders.length === 0 && (
								<div className="p-12 text-center">
									<div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No orders yet</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Create your first order to get started.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 