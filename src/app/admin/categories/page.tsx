"use client";

import { useEffect, useState } from 'react';

export type Category = {
	id: string;
	name: string;
	slug: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
};

export default function CategoriesAdminPage() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [form, setForm] = useState({ name: '', slug: '', description: '' });
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editForm, setEditForm] = useState({ name: '', slug: '', description: '' });

	useEffect(() => {
		fetch('/api/categories').then(r => r.json()).then(setCategories);
	}, []);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		const payload = { ...form };
		const res = await fetch('/api/categories', { method: 'POST', body: JSON.stringify(payload) });
		const created = await res.json();
		setCategories(p => [created, ...p]);
		setForm({ name: '', slug: '', description: '' });
		setLoading(false);
	}

	async function onDelete(id: string) {
		if (!confirm('Are you sure you want to delete this category?')) return;
		setLoading(true);
		await fetch(`/api/categories?id=${id}`, { method: 'DELETE' });
		setCategories(p => p.filter(category => category.id !== id));
		setLoading(false);
	}

	function startEdit(category: Category) {
		setEditingId(category.id);
		setEditForm({
			name: category.name,
			slug: category.slug,
			description: category.description || '',
		});
	}

	async function onUpdate(e: React.FormEvent) {
		e.preventDefault();
		if (!editingId) return;
		setLoading(true);
		const payload = {
			name: editForm.name,
			slug: editForm.slug || undefined,
			description: editForm.description,
		};
		const res = await fetch(`/api/categories?id=${editingId}`, { method: 'PUT', body: JSON.stringify(payload) });
		const updated = await res.json();
		setCategories(p => p.map(category => category.id === editingId ? updated : category));
		setEditingId(null);
		setLoading(false);
	}

	const filteredCategories = categories.filter(category =>
		category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
		category.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
		(category.description && category.description.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="space-y-8">
					{/* Header */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
							<div className="flex-1">
								<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Categories Management</h1>
								<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
									Organize your products with categories and tags.
								</p>
							</div>
							<div className="flex-shrink-0">
								{/* Search Bar */}
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
									</div>
									<input
										type="text"
										placeholder="Search categories..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
									/>
								</div>
							</div>
						</div>
					</div>
					
					{/* Add Category Form */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Category</h2>
							<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Create a new category to organize your products</p>
						</div>
						<form onSubmit={onSubmit} className="p-6 space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Category Name *
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="Enter category name" 
										value={form.name} 
										onChange={e => setForm({ ...form, name: e.target.value })} 
										required 
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Slug (optional)
									</label>
									<input 
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
										placeholder="category-slug" 
										value={form.slug} 
										onChange={e => setForm({ ...form, slug: e.target.value })} 
									/>
									<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
										Leave empty to auto-generate from name
									</p>
								</div>
							</div>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Description
								</label>
								<textarea 
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
									placeholder="Category description" 
									rows={3}
									value={form.description} 
									onChange={e => setForm({ ...form, description: e.target.value })} 
								/>
							</div>
							
							<div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
								<button 
									disabled={loading} 
									className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
								>
									{loading ? 'Saving...' : 'Add Category'}
								</button>
							</div>
						</form>
					</div>

					{/* Categories List */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<div className="flex items-center justify-between">
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										All Categories ({filteredCategories.length})
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
										{searchTerm ? `Showing ${filteredCategories.length} of ${categories.length} categories` : 'Manage and organize your product categories'}
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
						<div className="divide-y divide-gray-200 dark:divide-gray-700">
							{filteredCategories.map(category => (
								<div key={category.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200">
									{editingId === category.id ? (
										<form onSubmit={onUpdate} className="space-y-4">
											<input className="w-full px-3 py-2 rounded" value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} required />
											<input className="w-full px-3 py-2 rounded" value={editForm.slug} onChange={e => setEditForm({ ...editForm, slug: e.target.value })} placeholder="Slug (optional)" />
											<textarea className="w-full px-3 py-2 rounded" value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} />
											<div className="flex gap-2">
												<button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Updating...' : 'Update'}</button>
												<button type="button" onClick={() => setEditingId(null)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
											</div>
										</form>
									) : (
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4 flex-1 min-w-0">
												<div className="flex-shrink-0">
													<div className="h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
														<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
														</svg>
													</div>
												</div>
												<div className="flex-1 min-w-0">
													<div className="font-semibold text-lg text-gray-900 dark:text-white">{category.name}</div>
													<div className="text-sm text-gray-600 dark:text-gray-400 font-mono">/{category.slug}</div>
													{category.description && (
														<div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{category.description}</div>
													)}
												</div>
											</div>
											<div className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex-shrink-0">
												{category.id.slice(0, 8)}...
											</div>
											<div className="flex gap-2">
												<button onClick={() => startEdit(category)} className="px-3 py-1 bg-yellow-400 text-white rounded">Edit</button>
												<button onClick={() => onDelete(category.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
											</div>
										</div>
									)}
								</div>
							))}
							{filteredCategories.length === 0 && (
								<div className="p-12 text-center">
									<div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
										</svg>
									</div>
									<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
										{searchTerm ? 'No categories found' : 'No categories yet'}
									</h3>
									<p className="text-gray-500 dark:text-gray-400">
										{searchTerm ? 'Try adjusting your search terms' : 'Create your first category to get started organizing your products.'}
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