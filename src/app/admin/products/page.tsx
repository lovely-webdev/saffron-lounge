"use client";

import { useEffect, useState } from 'react';

export type Product = {
	id: string;
	title: string;
	slug?: string;
	description?: string;
	type?: string;
	sku?: string;
	price: number;
	salePrice?: number;
	images?: string[];
	categoryId?: string;
	inStock?: boolean;
	stockQty?: number;
	attributes?: { name: string; value: string }[];
variations?: unknown[];
	groupedProducts?: string[];
	linkedProducts?: string[];
	createdAt: string;
	updatedAt: string;
};

export default function ProductsAdminPage() {
	const [products, setProducts] = useState<Product[]>([]);
const [form, setForm] = useState<{ title: string; slug: string; description: string; type: string; sku: string; price: string; salePrice: string; images: string; categoryId: string; inStock: boolean; stockQty: string; attributes: string; variations: string; groupedProducts: string; linkedProducts: string; }>(
  { title: '', slug: '', description: '', type: 'simple', sku: '', price: '', salePrice: '', images: '', categoryId: '', inStock: true, stockQty: '', attributes: '', variations: '', groupedProducts: '', linkedProducts: '' }
);
	const [loading, setLoading] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);
const [editForm, setEditForm] = useState<{ title: string; slug: string; description: string; type: string; sku: string; price: string; salePrice: string; images: string; categoryId: string; inStock: boolean; stockQty: string; attributes: string; variations: string; groupedProducts: string; linkedProducts: string; }>(
  { title: '', slug: '', description: '', type: 'simple', sku: '', price: '', salePrice: '', images: '', categoryId: '', inStock: true, stockQty: '', attributes: '', variations: '', groupedProducts: '', linkedProducts: '' }
);

	useEffect(() => {
		fetch('/api/products').then(r => r.json()).then(setProducts);
	}, []);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		const payload = {
			title: form.title,
			slug: form.slug || undefined,
			description: form.description,
			type: form.type,
			sku: form.sku,
			price: Number(form.price || 0),
			salePrice: form.salePrice ? Number(form.salePrice) : undefined,
			images: form.images ? form.images.split(',').map(s => s.trim()) : [],
			categoryId: form.categoryId || undefined,
			inStock: form.inStock,
			stockQty: form.stockQty ? Number(form.stockQty) : undefined,
			attributes: form.attributes ? form.attributes.split(',').map(s => { const [name, value] = s.split(':'); return { name: name?.trim() || '', value: value?.trim() || '' }; }) : [],
			variations: form.variations ? JSON.parse(form.variations) : [],
			groupedProducts: form.groupedProducts ? form.groupedProducts.split(',').map(s => s.trim()) : [],
			linkedProducts: form.linkedProducts ? form.linkedProducts.split(',').map(s => s.trim()) : [],
		};
		const res = await fetch('/api/products', { method: 'POST', body: JSON.stringify(payload) });
		const created = await res.json();
		setProducts(p => [created, ...p]);
		setForm({ title: '', slug: '', description: '', type: 'simple', sku: '', price: '', salePrice: '', images: '', categoryId: '', inStock: true, stockQty: '', attributes: '', variations: '', groupedProducts: '', linkedProducts: '' });
		setShowForm(false);
		setLoading(false);
	}

	async function onDelete(id: string) {
		if (!confirm('Are you sure you want to delete this product?')) return;
		setLoading(true);
		await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
		setProducts(p => p.filter(product => product.id !== id));
		setLoading(false);
	}

	function startEdit(product: Product) {
		setEditingId(product.id);
		setEditForm({
			title: product.title,
			slug: product.slug || '',
			description: product.description || '',
			type: product.type || 'simple',
			sku: product.sku || '',
			price: String(product.price),
			salePrice: product.salePrice ? String(product.salePrice) : '',
			images: product.images ? product.images.join(', ') : '',
			categoryId: product.categoryId || '',
			inStock: !!product.inStock,
			stockQty: product.stockQty ? String(product.stockQty) : '',
			attributes: product.attributes ? product.attributes.map(a => `${a.name}:${a.value}`).join(', ') : '',
			variations: product.variations ? JSON.stringify(product.variations) : '',
			groupedProducts: product.groupedProducts ? product.groupedProducts.join(', ') : '',
			linkedProducts: product.linkedProducts ? product.linkedProducts.join(', ') : '',
		});
	}

	async function onUpdate(e: React.FormEvent) {
		e.preventDefault();
		if (!editingId) return;
		setLoading(true);
		const payload = {
			title: editForm.title,
			slug: editForm.slug || undefined,
			description: editForm.description,
			type: editForm.type,
			sku: editForm.sku,
			price: Number(editForm.price || 0),
			salePrice: editForm.salePrice ? Number(editForm.salePrice) : undefined,
			images: editForm.images ? editForm.images.split(',').map(s => s.trim()) : [],
			categoryId: editForm.categoryId || undefined,
			inStock: editForm.inStock,
			stockQty: editForm.stockQty ? Number(editForm.stockQty) : undefined,
			attributes: editForm.attributes ? editForm.attributes.split(',').map(s => { const [name, value] = s.split(':'); return { name: name?.trim() || '', value: value?.trim() || '' }; }) : [],
			variations: editForm.variations ? JSON.parse(editForm.variations) : [],
			groupedProducts: editForm.groupedProducts ? editForm.groupedProducts.split(',').map(s => s.trim()) : [],
			linkedProducts: editForm.linkedProducts ? editForm.linkedProducts.split(',').map(s => s.trim()) : [],
		};
		const res = await fetch(`/api/products?id=${editingId}`, { method: 'PUT', body: JSON.stringify(payload) });
		const updated = await res.json();
		setProducts(p => p.map(product => product.id === editingId ? updated : product));
		setEditingId(null);
		setLoading(false);
	}

	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		(product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
		product.categoryId?.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="space-y-8">
					{/* Header */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
							<div className="flex-1">
								<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Products Management</h1>
								<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
									Manage your product catalog and inventory.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3">
								{/* Search Bar */}
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
									</div>
									<input
										type="text"
										placeholder="Search products..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
									/>
								</div>
								<button
									onClick={() => setShowForm(!showForm)}
									className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
								>
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
									</svg>
									{showForm ? 'Cancel' : 'Add Product'}
								</button>
							</div>
						</div>
					</div>

					{/* Add Product Form */}
					{showForm && (
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
							<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
								<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Product</h2>
								<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Fill in the details below to create a new product</p>
							</div>
							<form onSubmit={onSubmit} className="p-6 space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Product Title *
										</label>
										<input 
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
											placeholder="Enter product title" 
											value={form.title} 
											onChange={e => setForm({ ...form, title: e.target.value })} 
											required 
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Price *
										</label>
										<input 
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
											placeholder="0.00" 
											type="number" 
											step="0.01" 
											value={form.price} 
											onChange={e => setForm({ ...form, price: e.target.value })} 
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Description
									</label>
									<textarea 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Product description" 
										rows={3}
										value={form.description} 
										onChange={e => setForm({ ...form, description: e.target.value })} 
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Image URLs
										</label>
										<input 
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
											placeholder="Comma separated URLs" 
											value={form.images} 
											onChange={e => setForm({ ...form, images: e.target.value })} 
										/>
										<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
											Separate multiple URLs with commas
										</p>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Category ID
										</label>
										<input 
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
											placeholder="Category ID (optional)" 
											value={form.categoryId} 
											onChange={e => setForm({ ...form, categoryId: e.target.value })} 
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Slug</label>
										<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="product-slug" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} />
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">SKU</label>
										<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="SKU" value={form.sku} onChange={e => setForm({ ...form, sku: e.target.value })} />
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sale Price</label>
										<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="Sale price" type="number" step="0.01" value={form.salePrice} onChange={e => setForm({ ...form, salePrice: e.target.value })} />
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stock Quantity</label>
										<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="Stock quantity" type="number" value={form.stockQty} onChange={e => setForm({ ...form, stockQty: e.target.value })} />
									</div>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Type</label>
									<select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
										<option value="simple">Simple</option>
										<option value="variable">Variable</option>
										<option value="grouped">Grouped</option>
										<option value="linked">Linked</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Attributes (name:value, comma separated)</label>
									<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="color:red, size:large" value={form.attributes} onChange={e => setForm({ ...form, attributes: e.target.value })} />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Variations (JSON array)</label>
									<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder='[{{"sku":"v1","price":10}}]' value={form.variations} onChange={e => setForm({ ...form, variations: e.target.value })} />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Grouped Products (IDs, comma separated)</label>
									<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="id1, id2" value={form.groupedProducts} onChange={e => setForm({ ...form, groupedProducts: e.target.value })} />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Linked Products (IDs, comma separated)</label>
									<input className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="id3, id4" value={form.linkedProducts} onChange={e => setForm({ ...form, linkedProducts: e.target.value })} />
								</div>

								<div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
									<input 
										id="inStock"
										type="checkbox" 
										checked={form.inStock} 
										onChange={e => setForm({ ...form, inStock: e.target.checked })} 
										className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
									/>
									<label htmlFor="inStock" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
										In Stock
									</label>
								</div>

								<div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
									<button
										type="button"
										onClick={() => setShowForm(false)}
										className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
									>
										Cancel
									</button>
									<button 
										type="submit"
										disabled={loading} 
										className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
									>
										{loading ? 'Saving...' : 'Save Product'}
									</button>
								</div>
							</form>
						</div>
					)}

					{/* Products List */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<div className="flex items-center justify-between">
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										All Products ({filteredProducts.length})
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
										{searchTerm ? `Showing ${filteredProducts.length} of ${products.length} products` : 'Manage and organize your product catalog'}
									</p>
								</div>
								{searchTerm && (
									<button
										onClick={() => setSearchTerm('')}
										className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex-shrink-0"
									>
										Clear search
									</button>
								)}
							</div>
						</div>
						<div className="overflow-hidden">
							{filteredProducts.length === 0 ? (
								<div className="p-12 text-center">
									<div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
										</svg>
									</div>
									<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
										{searchTerm ? 'No products found' : 'No products yet'}
									</h3>
									<p className="text-gray-500 dark:text-gray-400 mb-6">
										{searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first product.'}
									</p>
									{!searchTerm && (
										<button
											onClick={() => setShowForm(true)}
											className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
										>
											<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
											</svg>
											Add Product
										</button>
									)}
								</div>
							) : (
								<div className="divide-y divide-gray-200 dark:divide-gray-700">
									{filteredProducts.map(product => (
										<div key={product.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200">
											{editingId === product.id ? (
												<form onSubmit={onUpdate} className="space-y-4">
													<input className="w-full px-3 py-2 rounded" value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} required />
													<input className="w-full px-3 py-2 rounded" value={editForm.price} onChange={e => setEditForm({ ...editForm, price: e.target.value })} type="number" step="0.01" required />
													<textarea className="w-full px-3 py-2 rounded" value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} />
													<input className="w-full px-3 py-2 rounded" value={editForm.images} onChange={e => setEditForm({ ...editForm, images: e.target.value })} placeholder="Comma separated URLs" />
													<input className="w-full px-3 py-2 rounded" value={editForm.categoryId} onChange={e => setEditForm({ ...editForm, categoryId: e.target.value })} placeholder="Category ID (optional)" />
													<input className="w-full px-3 py-2 rounded" value={editForm.slug} onChange={e => setEditForm({ ...editForm, slug: e.target.value })} placeholder="Slug" />
													<input className="w-full px-3 py-2 rounded" value={editForm.sku} onChange={e => setEditForm({ ...editForm, sku: e.target.value })} placeholder="SKU" />
													<input className="w-full px-3 py-2 rounded" value={editForm.salePrice} onChange={e => setEditForm({ ...editForm, salePrice: e.target.value })} placeholder="Sale Price" type="number" step="0.01" />
													<input className="w-full px-3 py-2 rounded" value={editForm.stockQty} onChange={e => setEditForm({ ...editForm, stockQty: e.target.value })} placeholder="Stock Quantity" type="number" />
													<select className="w-full px-3 py-2 rounded" value={editForm.type} onChange={e => setEditForm({ ...editForm, type: e.target.value })}>
														<option value="simple">Simple</option>
														<option value="variable">Variable</option>
														<option value="grouped">Grouped</option>
														<option value="linked">Linked</option>
													</select>
													<input className="w-full px-3 py-2 rounded" value={editForm.attributes} onChange={e => setEditForm({ ...editForm, attributes: e.target.value })} placeholder="Attributes (name:value, comma separated)" />
													<input className="w-full px-3 py-2 rounded" value={editForm.variations} onChange={e => setEditForm({ ...editForm, variations: e.target.value })} placeholder="Variations (JSON array)" />
													<input className="w-full px-3 py-2 rounded" value={editForm.groupedProducts} onChange={e => setEditForm({ ...editForm, groupedProducts: e.target.value })} placeholder="Grouped Products (IDs, comma separated)" />
													<input className="w-full px-3 py-2 rounded" value={editForm.linkedProducts} onChange={e => setEditForm({ ...editForm, linkedProducts: e.target.value })} placeholder="Linked Products (IDs, comma separated)" />
													<div className="flex items-center gap-2">
														<input id={`inStock-edit-${product.id}`} type="checkbox" checked={editForm.inStock} onChange={e => setEditForm({ ...editForm, inStock: e.target.checked })} />
														<label htmlFor={`inStock-edit-${product.id}`}>In Stock</label>
													</div>
													<div className="flex gap-2">
														<button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Updating...' : 'Update'}</button>
														<button type="button" onClick={() => setEditingId(null)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
													</div>
												</form>
											) : (
												<div className="flex items-center justify-between">
													<div className="flex items-center space-x-4 flex-1 min-w-0">
														<div className="flex-shrink-0">
															<div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
																<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
																</svg>
															</div>
														</div>
														<div className="flex-1 min-w-0">
															<p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
																{product.title}
															</p>
															<div className="flex items-center space-x-3 mt-1">
																<span className="text-lg font-bold text-blue-600 dark:text-blue-400">
																	${product.price}
																</span>
																{product.inStock ? (
																	<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
																		In Stock
																	</span>
																) : (
																	<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
																		Out of Stock
																	</span>
																)}
															</div>
															{product.description && (
																<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
																	{product.description}
																</p>
															)}
															<div className="flex items-center space-x-3 mt-2">
																<span className="text-xs bg-gray-200 rounded px-2 py-1">{product.type}</span>
																{product.sku && <span className="text-xs bg-gray-200 rounded px-2 py-1">SKU: {product.sku}</span>}
																{product.salePrice && <span className="text-xs bg-green-200 rounded px-2 py-1">Sale: ${product.salePrice}</span>}
																{product.stockQty !== undefined && <span className="text-xs bg-blue-200 rounded px-2 py-1">Stock: {product.stockQty}</span>}
																{product.attributes && product.attributes.length > 0 && <span className="text-xs bg-yellow-200 rounded px-2 py-1">Attr: {product.attributes.map(a => `${a.name}:${a.value}`).join(', ')}</span>}
																{product.groupedProducts && product.groupedProducts.length > 0 && <span className="text-xs bg-purple-200 rounded px-2 py-1">Grouped: {product.groupedProducts.join(', ')}</span>}
																{product.linkedProducts && product.linkedProducts.length > 0 && <span className="text-xs bg-pink-200 rounded px-2 py-1">Linked: {product.linkedProducts.join(', ')}</span>}
															</div>
														</div>
													</div>
													<div className="flex gap-2">
														<button onClick={() => startEdit(product)} className="px-3 py-1 bg-yellow-400 text-white rounded">Edit</button>
														<button onClick={() => onDelete(product.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 