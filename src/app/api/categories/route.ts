import { NextRequest, NextResponse } from 'next/server';
import { readCollection, writeCollection, generateId } from '../_lib/db';

export type Category = {
	id: string;
	name: string;
	slug: string;
	description?: string;
	createdAt: string;
	updatedAt: string;
};

export async function GET() {
	try {
		const categories = await readCollection<Category>('categories');
		return NextResponse.json(categories);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const now = new Date().toISOString();
		const newCategory: Category = {
			id: generateId(),
			name: body.name,
			slug: (body.slug ?? body.name)?.toLowerCase().replace(/\s+/g, '-'),
			description: body.description ?? '',
			createdAt: now,
			updatedAt: now,
		};
		const categories = await readCollection<Category>('categories');
		categories.unshift(newCategory);
		await writeCollection<Category>('categories', categories);
		return NextResponse.json(newCategory, { status: 201 });
	} catch {
		return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const body = await req.json();
		const categories = await readCollection<Category>('categories');
		const idx = categories.findIndex(c => c.id === id);
		if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
		const now = new Date().toISOString();
		const updated: Category = {
			...categories[idx],
			...body,
			slug: (body.slug ?? body.name)?.toLowerCase().replace(/\s+/g, '-'),
			updatedAt: now,
		};
		categories[idx] = updated;
		await writeCollection<Category>('categories', categories);
		return NextResponse.json(updated);
	} catch {
		return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const categories = await readCollection<Category>('categories');
		const filtered = categories.filter(c => c.id !== id);
		await writeCollection<Category>('categories', filtered);
		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
	}
} 