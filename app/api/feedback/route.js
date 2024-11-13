import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function helperGetPath() {
  return path.join(process.cwd(), "data", "comments.json");
}
export function helperGetComment(filepath) {
  try {
    const fileData = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") {
      // File does not exist, return an empty array
      return [];
    } else {
      throw error;
    }
  }
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

  return NextResponse.json({ message: "Feedback received", data: comment });
}
