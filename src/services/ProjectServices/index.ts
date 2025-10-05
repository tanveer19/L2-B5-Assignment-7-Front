export const getProjectById = async (projectId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
    {
      cache: "no-store", // optional: always fetch fresh data
    }
  );
  return await res.json();
};
