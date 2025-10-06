"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";

export const update = async (projectId: string, data: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.user?.id) {
      return { error: "Unauthorized" };
    }

    const projectInfo = Object.fromEntries(data.entries());
    const modifiedData = {
      ...projectInfo,
      features: projectInfo.features
        ?.toString()
        .split(",")
        .map((tag) => tag.trim()),
      isFeatured: projectInfo.isFeatured === "true",
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      }
    );

    const result = await res.json();

    if (res.ok && result?.id) {
      revalidateTag("PROJECTS");
      return { success: true, project: result };
    }

    return { error: result?.message || "Failed to update project" };
  } catch (err) {
    console.error("Error updating project:", err);
    return { error: "Something went wrong" };
  }
};
