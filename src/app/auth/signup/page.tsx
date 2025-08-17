"use client";

import { useState } from 'react';
import Link from 'next/link';

// Additional validation helpers
function validateEmail(email: string) {
	return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password: string) {
	return password.length >= 6;
}

export default function SignUpPage() {
	const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		if (!form.name.trim()) {
			setMessage('Name is required');
			setLoading(false);
			return;
		}
		if (!validateEmail(form.email)) {
			setMessage('Invalid email address');
			setLoading(false);
			return;
		}
		if (!validatePassword(form.password)) {
			setMessage('Password must be at least 6 characters');
			setLoading(false);
			return;
		}
		if (form.password !== form.confirmPassword) {
			setMessage('Passwords do not match');
			setLoading(false);
			return;
		}

		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					password: form.password,
				}),
			});

			const data = await res.json();

			if (res.ok) {
				setMessage('Account created successfully! Redirecting to sign in...');
				setTimeout(() => window.location.href = '/auth/signin', 2000);
			} else {
				setMessage(data.error || 'Signup failed');
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
						Create your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
							sign in to your existing account
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={onSubmit}>
					<div className="space-y-4">
						<div>
							<input
								type="text"
								required
								className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="Full name"
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
							/>
						</div>
						<div>
							<input
								type="email"
								required
								className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="Email address"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
							/>
						</div>
						<div>
							<input
								type="password"
								required
								className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="Password"
								value={form.password}
								onChange={(e) => setForm({ ...form, password: e.target.value })}
							/>
						</div>
						<div>
							<input
								type="password"
								required
								className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								placeholder="Confirm password"
								value={form.confirmPassword}
								onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
							/>
						</div>
					</div>

					{message && (
						<div className={`text-sm text-center p-2 rounded ${message.includes('successfully') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
							{message}
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{loading ? 'Creating account...' : 'Create account'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}