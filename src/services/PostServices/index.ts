export const getBlogById = async (blogId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`,
    {
      cache: "no-store", // optional: always fetch fresh data
    }
  );
  return await res.json();
};
