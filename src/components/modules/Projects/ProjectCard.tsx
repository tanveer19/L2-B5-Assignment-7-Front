"use client";

import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProjectCard({
  project,
  isOwner = false,
}: {
  project: IProject;
  isOwner?: boolean;
}) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this ?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project/${project.id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete project");

      toast.success("Project deleted successfully 🚀");
      router.refresh(); // refresh page to reflect changes
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail */}

      {project.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          No Image
        </div>
      )}

      <div className="p-6">
        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
        </Link>

        {/* Content preview */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Author + Views */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image
              src={
                project.author.picture ||
                "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
              }
              alt={project.author.name}
              width={36}
              height={36}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            />
            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
              {project.author.name}
              {project.author.isVerified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {project.views} views
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
          >
            Read More →
          </Link>

          {isOwner && (
            <div className="flex items-center gap-4">
              <Link
                href={`/dashboard/edit-project/${project.id}`}
                className="text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
              >
                ✏️ Edit
              </Link>
              <button
                onClick={handleDelete}
                className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline"
              >
                🗑 Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
