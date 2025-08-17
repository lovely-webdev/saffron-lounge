import { NextRequest, NextResponse } from 'next/server';
import { readCollection, writeCollection, generateId } from '../_lib/db';

export type OrderItem = {
	productId: string;
	quantity: number;
	price: number;
};

export type Order = {
	id: string;
	items: OrderItem[];
	status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
	total: number;
	customerName?: string;
	customerEmail?: string;
	createdAt: string;
	updatedAt: string;
};

export async function GET() {
	try {
		const orders = await readCollection<Order>('orders');
		return NextResponse.json(orders);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const now = new Date().toISOString();
		const items: OrderItem[] = Array.isArray(body.items) ? body.items : [];
		const total = items.reduce((sum, it) => sum + Number(it.price) * Number(it.quantity), 0);
		const newOrder: Order = {
			id: generateId(),
			items,
			status: (body.status ?? 'pending') as Order['status'],
			total,
			customerName: body.customerName ?? '',
			customerEmail: body.customerEmail ?? '',
			createdAt: now,
			updatedAt: now,
		};
		const orders = await readCollection<Order>('orders');
		orders.unshift(newOrder);
		await writeCollection<Order>('orders', orders);
		return NextResponse.json(newOrder, { status: 201 });
	} catch {
		return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const body = await req.json();
		const orders = await readCollection<Order>('orders');
		const idx = orders.findIndex(o => o.id === id);
		if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
		const now = new Date().toISOString();
		const updated: Order = {
			...orders[idx],
			...body,
			updatedAt: now,
		};
		orders[idx] = updated;
		await writeCollection<Order>('orders', orders);
		return NextResponse.json(updated);
	} catch {
		return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
		const orders = await readCollection<Order>('orders');
		const filtered = orders.filter(o => o.id !== id);
		await writeCollection<Order>('orders', filtered);
		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
	}
} 