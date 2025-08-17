import { NextRequest, NextResponse } from 'next/server';
import { readCollection, writeCollection, generateId, hashPassword } from '../../_lib/db';

export type User = {
	id: string;
	email: string;
	password: string;
	name: string;
	role: 'admin' | 'user';
	createdAt: string;
	updatedAt: string;
};

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { email, password, name } = body;

		if (!email || !password || !name) {
			return NextResponse.json(
				{ error: 'Email, password, and name are required' },
				{ status: 400 }
			);
		}

		const users = await readCollection<User>('users');
		const existingUser = users.find(u => u.email === email);
		
		if (existingUser) {
			return NextResponse.json(
				{ error: 'User already exists' },
				{ status: 409 }
			);
		}

		const now = new Date().toISOString();
		const newUser: User = {
			id: generateId(),
			email,
			password: hashPassword(password),
			name,
			role: 'user',
			createdAt: now,
			updatedAt: now,
		};

		users.push(newUser);
		await writeCollection<User>('users', users);

		// Don't return password
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password: _password, ...userWithoutPassword } = newUser;
		return NextResponse.json(userWithoutPassword, { status: 201 });
	} catch {
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
} 