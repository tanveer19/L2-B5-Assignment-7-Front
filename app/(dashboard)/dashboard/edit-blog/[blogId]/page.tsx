import EditBlogForm from "../../../../../components/modules/Blogs/EditBlogForm";
import { IPost } from "../../../../../types";

interface PageProps {
  params: Promise<{ blogId: string }>; // Changed to Promise
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

  const { blogId } = await params; // Added await

  try {
    blog = await getBlog(blogId);
  } catch {
    return <p className="text-red-500 text-center mt-10">Blog not found</p>;
  }

  return <EditBlogForm blog={blog} />;
}
