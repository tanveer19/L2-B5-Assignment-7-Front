import BlogCard from "../../../components/modules/Blogs/BlogCard";
import { IPost } from "../../../types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description: "browse all blogs posts",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl my-5">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl">
        {blogs.map((blog: IPost) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
