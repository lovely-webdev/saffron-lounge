import { NextRequest, NextResponse } from 'next/server';
import { readCollection, generateId } from '../../_lib/db';
import type { User } from '../signup/route';

export type PasswordReset = {
	id: string;
	email: string;
	token: string;
	expiresAt: string;
	used: boolean;
};

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { email } = body;

		if (!email) {
			return NextResponse.json(
				{ error: 'Email is required' },
				{ status: 400 }
			);
		}

		const users = await readCollection<User>('users');
		const user = users.find(u => u.email === email);
		
		if (!user) {
			// Don't reveal if user exists or not
			return NextResponse.json({
				message: 'If an account with that email exists, a reset link has been sent.'
			});
		}

		// Generate reset token (expires in 1 hour)
		const token = generateId();
		const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
		
		// In production, save this to a password_resets collection
		// For demo, we'll just return success
		
		return NextResponse.json({
			message: 'Password reset link sent to your email',
			token: token, // In production, send this via email
			expiresAt: expiresAt
		});
	} catch {
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
} 