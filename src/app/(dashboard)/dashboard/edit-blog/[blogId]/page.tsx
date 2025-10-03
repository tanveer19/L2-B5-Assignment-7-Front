import EditBlogForm from "@/components/modules/Blogs/EditBlogForm";
import { IPost } from "@/types";

interface PageProps {
  params: Promise<{ blogId: string }>; // NOTE: params is a Promise here
}

async function getBlog(blogId: string): Promise<IPost> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
}

export default async function EditBlogPage({ params }: PageProps) {
  let blog: IPost | null = null;

  // await params before using
  const { blogId } = await params;

  try {
    blog = await getBlog(blogId);
  } catch (error) {
    return <p className="text-red-500 text-center mt-10">Blog not found</p>;
  }

  return <EditBlogForm blog={blog} />;
}
