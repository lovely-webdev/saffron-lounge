"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  author?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  excerpt?: string;
  coverImage?: string;
  status?: string;
  publishedAt?: string;
};

export default function BlogAdminPage() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [form, setForm] = useState({ title: '', slug: '', content: '', author: '', tags: '', excerpt: '', coverImage: '', status: 'draft', publishedAt: '' });
	const [loading, setLoading] = useState(false);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editForm, setEditForm] = useState({ title: '', slug: '', content: '', author: '', tags: '', excerpt: '', coverImage: '', status: 'draft', publishedAt: '' });

	useEffect(() => {
		fetch('/api/blog').then(r => r.json()).then(setPosts);
	}, []);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		const payload = {
			title: form.title,
			slug: form.slug || undefined,
			content: form.content,
			author: form.author,
			tags: form.tags ? form.tags.split(',').map(s => s.trim()) : [],
			excerpt: form.excerpt,
			coverImage: form.coverImage,
			status: form.status,
			publishedAt: form.status === 'published' ? (form.publishedAt || new Date().toISOString()) : undefined,
		};
		const res = await fetch('/api/blog', { method: 'POST', body: JSON.stringify(payload) });
		const created = await res.json();
		setPosts(p => [created, ...p]);
		setForm({ title: '', slug: '', content: '', author: '', tags: '', excerpt: '', coverImage: '', status: 'draft', publishedAt: '' });
		setLoading(false);
	}

	async function onDelete(id: string) {
		if (!confirm('Are you sure you want to delete this post?')) return;
		setLoading(true);
		await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
		setPosts(p => p.filter(post => post.id !== id));
		setLoading(false);
	}

	function startEdit(post: BlogPost) {
		setEditingId(post.id);
		setEditForm({
			title: post.title,
			slug: post.slug,
			content: post.content,
			author: post.author || '',
			tags: post.tags ? post.tags.join(', ') : '',
			excerpt: post.excerpt || '',
			coverImage: post.coverImage || '',
			status: post.status || 'draft',
			publishedAt: post.publishedAt || '',
		});
	}

	async function onUpdate(e: React.FormEvent) {
		e.preventDefault();
		if (!editingId) return;
		setLoading(true);
		const payload = {
			title: editForm.title,
			slug: editForm.slug || undefined,
			content: editForm.content,
			author: editForm.author,
			tags: editForm.tags ? editForm.tags.split(',').map(s => s.trim()) : [],
			excerpt: editForm.excerpt,
			coverImage: editForm.coverImage,
			status: editForm.status,
			publishedAt: editForm.status === 'published' ? (editForm.publishedAt || new Date().toISOString()) : undefined,
		};
		const res = await fetch(`/api/blog?id=${editingId}`, { method: 'PUT', body: JSON.stringify(payload) });
		const updated = await res.json();
		setPosts(p => p.map(post => post.id === editingId ? updated : post));
		setEditingId(null);
		setLoading(false);
	}

  return (
	<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
	  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<div className="space-y-8">
		  {/* Header */}
		  <header className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
			<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Management</h1>
			<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
			  Create and manage your blog content and articles.
			</p>
		  </header>
		  {/* Create Blog Post Form */}
		  <section aria-labelledby="create-post-heading" className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
			<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
			  <h2 id="create-post-heading" className="text-xl font-semibold text-gray-900 dark:text-white">Create New Blog Post</h2>
			  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Write and publish new content for your blog</p>
			</div>
			<form onSubmit={onSubmit} className="p-6 space-y-6" autoComplete="off">
			  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
				  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Post Title <span className="text-red-500">*</span>
				  </label>
				  <input 
					id="title"
					name="title"
					className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
					placeholder="Enter post title" 
					value={form.title} 
					onChange={e => setForm({ ...form, title: e.target.value })} 
					required 
				  />
				</div>
				<div>
				  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Slug (optional)
				  </label>
				  <input 
					id="slug"
					name="slug"
					className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
					placeholder="post-slug" 
					value={form.slug} 
					onChange={e => setForm({ ...form, slug: e.target.value })} 
				  />
				  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
					Leave empty to auto-generate from title
				  </p>
				</div>
			  </div>
			  <div>
				<label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
				  Content <span className="text-red-500">*</span>
				</label>
				<textarea 
				  id="content"
				  name="content"
				  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors min-h-40" 
				  placeholder="Write your blog post content here..." 
				  value={form.content} 
				  onChange={e => setForm({ ...form, content: e.target.value })} 
				  required
				  aria-required="true"
				/>
			  </div>
			  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
				  <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Author <span className="text-red-500">*</span>
				  </label>
				  <input 
					id="author"
					name="author"
					className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
					placeholder="Author name" 
					value={form.author} 
					onChange={e => setForm({ ...form, author: e.target.value })} 
					required
				  />
				</div>
				<div>
				  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Tags (comma separated)
				  </label>
				  <input 
					id="tags"
					name="tags"
					className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" 
					placeholder="tag1, tag2, tag3" 
					value={form.tags} 
					onChange={e => setForm({ ...form, tags: e.target.value })} 
				  />
				  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
					Separate multiple tags with commas
				  </p>
				</div>
			  </div>
			  <div>
				<label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Excerpt</label>
				<textarea id="excerpt" name="excerpt" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="Short summary for preview" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} />
			  </div>
			  <div>
				<label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cover Image URL</label>
				<input id="coverImage" name="coverImage" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors" placeholder="https://..." value={form.coverImage} onChange={e => setForm({ ...form, coverImage: e.target.value })} />
			  </div>
			  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
				  <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
				  <select id="status" name="status" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
					<option value="draft">Draft</option>
					<option value="published">Published</option>
				  </select>
				</div>
				<div>
				  <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Published Date</label>
				  <input type="datetime-local" id="publishedAt" name="publishedAt" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl" value={form.publishedAt} onChange={e => setForm({ ...form, publishedAt: e.target.value })} disabled={form.status !== 'published'} />
				</div>
			  </div>
			  <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
				<button 
				  disabled={loading} 
				  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
				  {loading ? 'Publishing...' : 'Publish Post'}
				</button>
			  </div>
			</form>
		  </section>

					{/* Blog Posts List */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Blog Posts ({posts.length})</h2>
							<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Manage and edit your published content</p>
						</div>
						<div className="divide-y divide-gray-200 dark:divide-gray-700">
							{posts.map(post => (
								<div key={post.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200">
									{editingId === post.id ? (
										<form onSubmit={onUpdate} className="space-y-4">
											<input className="w-full px-3 py-2 rounded" value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} required />
											<input className="w-full px-3 py-2 rounded" value={editForm.slug} onChange={e => setEditForm({ ...editForm, slug: e.target.value })} placeholder="Slug (optional)" />
											<textarea className="w-full px-3 py-2 rounded" value={editForm.content} onChange={e => setEditForm({ ...editForm, content: e.target.value })} required />
											<input className="w-full px-3 py-2 rounded" value={editForm.author} onChange={e => setEditForm({ ...editForm, author: e.target.value })} placeholder="Author (optional)" />
											<input className="w-full px-3 py-2 rounded" value={editForm.tags} onChange={e => setEditForm({ ...editForm, tags: e.target.value })} placeholder="Tags (comma separated)" />
											<textarea className="w-full px-3 py-2 rounded" value={editForm.excerpt} onChange={e => setEditForm({ ...editForm, excerpt: e.target.value })} placeholder="Excerpt" />
											<input className="w-full px-3 py-2 rounded" value={editForm.coverImage} onChange={e => setEditForm({ ...editForm, coverImage: e.target.value })} placeholder="Cover Image URL" />
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<label className="block text-xs font-medium mb-1">Status</label>
													<select className="w-full px-2 py-2 rounded" value={editForm.status} onChange={e => setEditForm({ ...editForm, status: e.target.value })}>
														<option value="draft">Draft</option>
														<option value="published">Published</option>
													</select>
												</div>
												<div>
													<label className="block text-xs font-medium mb-1">Published Date</label>
													<input type="datetime-local" className="w-full px-2 py-2 rounded" value={editForm.publishedAt} onChange={e => setEditForm({ ...editForm, publishedAt: e.target.value })} disabled={editForm.status !== 'published'} />
												</div>
											</div>
											<div className="flex gap-2">
												<button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Updating...' : 'Update'}</button>
												<button type="button" onClick={() => setEditingId(null)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
											</div>
										</form>
									) : (
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4">
												<div className="flex-shrink-0">
													<div className="h-12 w-12 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center shadow-lg">
														<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
														</svg>
													</div>
												</div>
												<div className="flex-1 min-w-0">
													<div className="font-semibold text-lg text-gray-900 dark:text-white">{post.title}</div>
													<div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
														/{post.slug} • {post.author} • {post.status} • {post.publishedAt ? new Date(post.publishedAt).toLocaleString() : ''}
													</div>
													{post.excerpt && <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.excerpt}</div>}
													{post.tags && post.tags.length > 0 && (
														<div className="flex gap-2 mt-3">
															{post.tags.map(tag => (
																<span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
																	{tag}
																</span>
															))}
														</div>
													)}
			  {post.coverImage && (
				<Image
				  src={post.coverImage}
				  alt="cover"
				  width={64}
				  height={64}
				  className="w-16 h-16 object-cover rounded-lg border"
				  unoptimized
				/>
			  )}
												</div>
											</div>
											<div className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
												{post.id.slice(0, 8)}...
											</div>
											<div className="flex gap-2">
												<button onClick={() => startEdit(post)} className="px-3 py-1 bg-yellow-400 text-white rounded">Edit</button>
												<button onClick={() => onDelete(post.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
											</div>
										</div>
									)}
								</div>
							))}
							{posts.length === 0 && (
								<div className="p-12 text-center">
									<div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
										</svg>
									</div>
									<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No blog posts yet</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Create your first blog post to get started.
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