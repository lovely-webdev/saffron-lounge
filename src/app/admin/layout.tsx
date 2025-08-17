"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons
const HomeIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
	</svg>
);

const ProductsIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
	</svg>
);

const CategoriesIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
	</svg>
);

const BlogIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
	</svg>
);

const OrdersIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
	</svg>
);

const MenuIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
	</svg>
);

const CloseIcon = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
	</svg>
);

const BuildingIcon = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
	</svg>
);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();

	// Remove dark theme logic, always use light theme
	useEffect(() => {
		document.documentElement.classList.remove('dark');
		try { localStorage.setItem('theme', 'light'); } catch {}
	}, []);

	const UsersIcon = () => (
		<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
	);

	const navigation = [
		{ name: 'Dashboard', href: '/admin', icon: HomeIcon },
		{ name: 'Users', href: '/admin/users', icon: UsersIcon },
		{ name: 'Products', href: '/admin/products', icon: ProductsIcon },
		{ name: 'Categories', href: '/admin/categories', icon: CategoriesIcon },
		{ name: 'Blog', href: '/admin/blog', icon: BlogIcon },
		{ name: 'Orders', href: '/admin/orders', icon: OrdersIcon },
	];

	return (
		<div className="min-h-screen">
			<div className="bg-gray-50 dark:bg-gray-900 min-h-screen lg:flex">
				{/* Mobile sidebar overlay */}
				{sidebarOpen && (
					<div 
						className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
						onClick={() => setSidebarOpen(false)}
					/>
				)}

				{/* Sidebar */}
				<div className={`z-50 w-72 bg-white dark:bg-gray-800 shadow-2xl transform transition-all duration-300 ease-in-out lg:shadow-none lg:transform-none lg:relative lg:block ${
					sidebarOpen ? 'fixed inset-y-0 left-0 translate-x-0' : 'fixed inset-y-0 left-0 -translate-x-full lg:translate-x-0'
				}`}> 
					<div className="flex flex-col h-full">
						{/* Logo/Brand Section */}
						<div className="flex items-center justify-between h-20 px-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-blue-700">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h1 className="text-xl font-bold text-white">thesaffronlounge</h1>
							</div>
							<button
								onClick={() => setSidebarOpen(false)}
								className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
							>
								<CloseIcon />
							</button>
						</div>

						{/* Navigation */}
						<nav className="flex-1 px-6 py-8">
							<div className="space-y-2">
								{navigation.map((item) => {
									const isActive = pathname === item.href;
									return (
										<Link
											key={item.name}
											href={item.href}
											className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
												isActive
													? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm'
													: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
											}`}
											onClick={() => setSidebarOpen(false)}
										>
											<div className={`p-2 rounded-lg ${
												isActive 
													? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400' 
													: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
											}`}
											>
												<item.icon />
											</div>
											<span className="ml-3">{item.name}</span>
											{isActive && (
												<div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
											)}
										</Link>
									);
								})}
							</div>
						</nav>

						{/* Bottom Section */}
						<div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
							<Link
								href="/"
								className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white rounded-xl transition-all duration-200"
							>
								<div className="p-2 rounded-lg text-gray-500 dark:text-gray-400">
									<BuildingIcon />
								</div>
								<span className="ml-3">Back to Site</span>
							</Link>
						</div>
					</div>
				</div>

				{/* Main content */}
				<div className="flex-1 flex flex-col relative">
					{/* Top bar */}
					<div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
						<div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
							<button
								onClick={() => setSidebarOpen(true)}
								className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
							>
								<MenuIcon />
							</button>

							<div className="flex items-center space-x-4">
								{/* Page title or breadcrumb could go here */}
							</div>
						</div>
					</div>

					{/* Page content */}
					<main className="flex-1">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
} 