import { NextRequest, NextResponse } from 'next/server';
import { readCollection, writeCollection, generateId } from '../_lib/db';

export type BlogPost = {
	id: string;
	title: string;
	slug: string;
	content: string;
	author: string;
	excerpt?: string;
	coverImage?: string;
	tags?: string[];
	status: 'draft' | 'published';
	publishedAt?: string;
	createdAt: string;
	updatedAt: string;
};

export async function GET() {
	try {
		const posts = await readCollection<BlogPost>('blog');
		return NextResponse.json(posts);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const now = new Date().toISOString();
		const status = body.status || 'draft';
		const publishedAt = status === 'published' ? (body.publishedAt || now) : undefined;
		const newPost: BlogPost = {
			id: generateId(),
			title: body.title,
			slug: (body.slug ?? body.title)?.toLowerCase().replace(/\s+/g, '-'),
			content: body.content ?? '',
			author: body.author,
			excerpt: body.excerpt ?? '',
			coverImage: body.coverImage ?? '',
			tags: Array.isArray(body.tags) ? body.tags : [],
			status,
			publishedAt,
			createdAt: now,
			updatedAt: now,
		};
		const posts = await readCollection<BlogPost>('blog');
		posts.unshift(newPost);
		await writeCollection<BlogPost>('blog', posts);
		return NextResponse.json(newPost, { status: 201 });
	} catch {
		return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const body = await req.json();
		const posts = await readCollection<BlogPost>('blog');
		const idx = posts.findIndex(p => p.id === id);
		if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
		const now = new Date().toISOString();
		const status = body.status || posts[idx].status || 'draft';
		const publishedAt = status === 'published' ? (body.publishedAt || posts[idx].publishedAt || now) : undefined;
		const updated: BlogPost = {
			...posts[idx],
			...body,
			slug: (body.slug ?? body.title)?.toLowerCase().replace(/\s+/g, '-'),
			status,
			publishedAt,
			updatedAt: now,
		};
		posts[idx] = updated;
		await writeCollection<BlogPost>('blog', posts);
		return NextResponse.json(updated);
	} catch {
		return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const posts = await readCollection<BlogPost>('blog');
		const filtered = posts.filter(p => p.id !== id);
		await writeCollection<BlogPost>('blog', filtered);
		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
	}
} 