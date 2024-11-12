import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req, res) {
  const feedback = await req.json();
  const comment = {
    ...feedback,
    id: new Date().toISOString(),
  };

  const filepath = path.join(process.cwd(), "data", "comments.json");
  const file = await fs.readFile(filepath);

  const data = JSON.parse(file);

  let Data = data.push(comment);

  await fs.writeFile(filepath, JSON.stringify(data));

  return NextResponse.json(Data);
}
