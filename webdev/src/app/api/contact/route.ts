import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const readData = await fs.promises.readdir('../../contactdata');
  console.log(readData);
  fs.writeFile(
    `../../contactdata/${readData.length + 1}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) console.log(err);
    }
  );
  return NextResponse.json({ message: 'POST request processed', payload: data });
}

export async function GET() {
  return NextResponse.json({ message: 'allblogs' });
}
