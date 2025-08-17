import { NextRequest, NextResponse } from 'next/server';
import { readCollection, verifyPassword } from '../../_lib/db';
import type { User } from '../signup/route';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { email, password } = body;

		if (!email || !password) {
			return NextResponse.json(
				{ error: 'Email and password are required' },
				{ status: 400 }
			);
		}

		const users = await readCollection<User>('users');
		const user = users.find(u => u.email === email);
		
		if (!user || !verifyPassword(password, user.password)) {
			return NextResponse.json(
				{ error: 'Invalid credentials' },
				{ status: 401 }
			);
		}

		// Don't return password
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password: _password, ...userWithoutPassword } = user;
		return NextResponse.json({
			user: userWithoutPassword,
			message: 'Login successful'
		});
	} catch {
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
} 