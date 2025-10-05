import { NextResponse } from "next/server";
import { blogs } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params; // await params
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params; // await params
  const body = await request.json();
  let blog = blogs.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  blog = { ...blog, ...body };
  return NextResponse.json(blog);
}
