import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';

export async function POST(req: NextRequest) {
  const data= await req.json()
  let readData=await fs.promises.readdir('/Users/karthikgurram/Public/NextJs/First/webdev/src/app/contactdata');
  console.log(readData)
  fs.writeFile(`/Users/karthikgurram/Public/NextJs/First/webdev/src/app/contactdata/${readData.length+1}.json`,JSON.stringify(data),(err)=>{console.log(err)})
  return NextResponse.json({ message: 'POST request processed',payload: data });
}

export async function GET() {
  return NextResponse.json({ message: 'allblogs'});
}