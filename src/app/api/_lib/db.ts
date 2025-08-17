import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export type CollectionName = 'products' | 'categories' | 'blog' | 'orders' | 'users';

function getCollectionPath(collection: CollectionName) {
	return path.join(DATA_DIR, `${collection}.json`);
}

export async function readCollection<T>(collection: CollectionName): Promise<T[]> {
	const filePath = getCollectionPath(collection);
	try {
		const data = await fs.readFile(filePath, 'utf-8');
		return JSON.parse(data) as T[];
	} catch (err: unknown) {
		if (err && typeof err === 'object' && 'code' in err && err.code === 'ENOENT') {
			await fs.mkdir(DATA_DIR, { recursive: true });
			await fs.writeFile(filePath, '[]', 'utf-8');
			return [] as T[];
		}
		throw err;
	}
}

export async function writeCollection<T>(collection: CollectionName, items: T[]): Promise<void> {
	const filePath = getCollectionPath(collection);
	await fs.mkdir(DATA_DIR, { recursive: true });
	await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf-8');
}

export function generateId(): string {
	return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function hashPassword(password: string): string {
	// Simple hash for demo - use bcrypt in production
	return Buffer.from(password).toString('base64');
}

export function verifyPassword(password: string, hash: string): boolean {
	return hashPassword(password) === hash;
} 