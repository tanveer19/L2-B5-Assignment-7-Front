"use server";

import { getUserSession } from "../helpers/getUserSession";
import { revalidateTag } from "next/cache";

export const create = async (data: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.user?.id) {
      return { error: "Unauthorized" };
    }

    const blogInfo = Object.fromEntries(data.entries());
    const modifiedData = {
      ...blogInfo,
      tags: blogInfo.tags
        .toString()
        .split(",")
        .map((tag) => tag.trim()),
      authorId: session.user.id,
      isFeatured: blogInfo.isFeatured === "true",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    });

    const result = await res.json();

    if (res.ok && result?.id) {
      revalidateTag("BLOGS");
      return { success: true, blog: result };
    }

    return { error: result?.message || "Failed to create blog" };
  } catch (err) {
    console.error("Error creating blog:", err);
    return { error: "Something went wrong" };
  }
};
