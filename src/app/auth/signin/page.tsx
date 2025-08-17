"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
	const [form, setForm] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		if (!form.email.trim()) {
			setMessage('Email is required');
			setLoading(false);
			return;
		}
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			setMessage('Invalid email address');
			setLoading(false);
			return;
		}
		if (!form.password) {
			setMessage('Password is required');
			setLoading(false);
			return;
		}

		try {
			const res = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (res.ok) {
				setMessage('Login successful! Redirecting...');
				// In production, set auth token and redirect
				setTimeout(() => window.location.href = '/admin', 1000);
			} else {
				setMessage(data.error || 'Login failed');
			}
		} catch {
			setMessage('An error occurred');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
							create a new account
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={onSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input
								type="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
							/>
						</div>
						<div>
							<input
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={form.password}
								onChange={(e) => setForm({ ...form, password: e.target.value })}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="text-sm">
							<Link href="/auth/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
								Forgot your password?
							</Link>
						</div>
					</div>

					{message && (
						<div className={`text-sm text-center p-2 rounded ${message.includes('successful') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
							{message}
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{loading ? 'Signing in...' : 'Sign in'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}