import { NextRequest, NextResponse } from 'next/server';
import { readCollection, writeCollection, generateId } from '../_lib/db';

export type Product = {
	id: string;
	title: string;
	slug: string;
	description?: string;
	type: 'simple' | 'variable' | 'grouped' | 'linked';
	sku?: string;
	price: number;
	salePrice?: number;
	images?: string[];
	categoryId?: string;
	inStock?: boolean;
	stockQty?: number;
	attributes?: { name: string, value: string }[];
	variations?: Product[];
	groupedProducts?: string[];
	linkedProducts?: string[];
	createdAt: string;
	updatedAt: string;
};

export async function GET() {
	try {
		const products = await readCollection<Product>('products');
		return NextResponse.json(products);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const now = new Date().toISOString();
		const type = body.type || 'simple';
		const newProduct: Product = {
			id: generateId(),
			title: body.title,
			slug: (body.slug ?? body.title)?.toLowerCase().replace(/\s+/g, '-'),
			description: body.description ?? '',
			type,
			sku: body.sku ?? '',
			price: Number(body.price ?? 0),
			salePrice: body.salePrice ? Number(body.salePrice) : undefined,
			images: Array.isArray(body.images) ? body.images : [],
			categoryId: body.categoryId ?? undefined,
			inStock: Boolean(body.inStock ?? true),
			stockQty: body.stockQty ? Number(body.stockQty) : undefined,
			attributes: Array.isArray(body.attributes) ? body.attributes : [],
			variations: Array.isArray(body.variations) ? body.variations : [],
			groupedProducts: Array.isArray(body.groupedProducts) ? body.groupedProducts : [],
			linkedProducts: Array.isArray(body.linkedProducts) ? body.linkedProducts : [],
			createdAt: now,
			updatedAt: now,
		};
		const products = await readCollection<Product>('products');
		products.unshift(newProduct);
		await writeCollection<Product>('products', products);
		return NextResponse.json(newProduct, { status: 201 });
	} catch {
		return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const body = await req.json();
		const products = await readCollection<Product>('products');
		const idx = products.findIndex(p => p.id === id);
		if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
		const now = new Date().toISOString();
		const type = body.type || products[idx].type || 'simple';
		const updated: Product = {
			...products[idx],
			...body,
			slug: (body.slug ?? body.title)?.toLowerCase().replace(/\s+/g, '-'),
			type,
			price: Number(body.price ?? products[idx].price),
			salePrice: body.salePrice ? Number(body.salePrice) : undefined,
			stockQty: body.stockQty ? Number(body.stockQty) : undefined,
			attributes: Array.isArray(body.attributes) ? body.attributes : [],
			variations: Array.isArray(body.variations) ? body.variations : [],
			groupedProducts: Array.isArray(body.groupedProducts) ? body.groupedProducts : [],
			linkedProducts: Array.isArray(body.linkedProducts) ? body.linkedProducts : [],
			updatedAt: now,
		};
		products[idx] = updated;
		await writeCollection<Product>('products', products);
		return NextResponse.json(updated);
	} catch {
		return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const products = await readCollection<Product>('products');
		const filtered = products.filter(p => p.id !== id);
		await writeCollection<Product>('products', filtered);
		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
	}
} 