"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		try {
			const res = await fetch('/api/auth/forgot-password', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (res.ok) {
				setMessage(data.message);
				setEmail('');
			} else {
				setMessage(data.error || 'Request failed');
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
<h1 className="text-3xl font-bold text-gray-900 mb-4">Reset Password</h1>
 					<div className="flex items-center justify-center text-gray-600 py-4">
 						<a href="/" className="hover:text-blue-600 transition-colors duration-300">Home</a>
 						<span className="mx-3">/</span>
 						<span className="text-blue-600">Forgot Password</span>
 					</div>
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Reset your password
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Enter your email address and we&apos;ll send you a link to reset your password.
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={onSubmit}>
					<div>
						<input
							type="email"
							required
							className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					{message && (
						<div className={`text-sm text-center p-2 rounded ${message.includes('sent') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
							{message}
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{loading ? 'Sending...' : 'Send reset link'}
						</button>
					</div>

					<div className="text-center">
						<Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
							← Back to sign in
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
} 