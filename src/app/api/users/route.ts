
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const file = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(file || '[]');
    return NextResponse.json(users);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
