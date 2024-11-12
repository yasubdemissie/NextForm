import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function helperGetPath() {
  return path.join(process.cwd(), "data", "comments.json");
}
function helperGetComment(filepath) {
  const file = fs.readFileSync(filepath);

  return JSON.parse(file);
}

export async function GET() {
  const filePath = helperGetPath();

  const data = helperGetComment(filePath);
  return NextResponse.json({
    message: "Comments send successfully",
    comments: data,
  });
}

export async function POST(req, res) {
  const feedback = await req.json();
  const comment = {
    ...feedback,
    id: new Date().toISOString(),
  };

  const filepath = helperGetPath();
  const data = helperGetComment(filepath);

  data.push(comment);

  fs.writeFileSync(filepath, JSON.stringify(data));

  // const { path } = req.body;

  // res.revalidate(path);

  // Do the revalidation before anything change

  return NextResponse.json({ message: "Feedback received", data: comment });
}
