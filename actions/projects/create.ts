"use server";

import { getUserSession } from "../../helpers/getUserSession";
import { revalidateTag } from "next/cache";

export const create = async (data: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.user?.id) {
      return { error: "Unauthorized" };
    }

    const projectInfo = Object.fromEntries(data.entries());
    const modifiedData = {
      ...projectInfo,
      features: projectInfo.features
        .toString()
        .split(",")
        .map((tag) => tag.trim()),
      authorId: session.user.id,
      isFeatured: projectInfo.isFeatured === "true",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    });

    const result = await res.json();

    if (res.ok && result?.id) {
      revalidateTag("PROJECTS", "page");
      return { success: true, blog: result };
    }

    return { error: result?.message || "Failed to create project" };
  } catch (err) {
    console.error("Error creating project:", err);
    return { error: "Something went wrong" };
  }
};
