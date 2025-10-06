"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { update } from "@/actions/projects/update";
import { IProject } from "@/types";

interface EditProjectFormProps {
  project: IProject;
}

export default function EditProjectForm({ project }: EditProjectFormProps) {
  const [isFeatured, setIsFeatured] = useState(
    project.isFeatured ? "true" : "false"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await update(project.id.toString(), formData);

      if (result.success) {
        toast.success(" Project updated successfully!");
        router.push("/dashboard");
        router.refresh(); // Refresh to show updated data
      } else {
        toast.error(result.error || " Failed to update project");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error(" Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Edit Project</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          required
          defaultValue={project.name}
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          required
          defaultValue={project.description}
          id="description"
          name="description"
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail URL
        </label>
        <input
          required
          defaultValue={project.thumbnail}
          type="url"
          id="thumbnail"
          name="thumbnail"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project Link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="projectLink">
          Project Link URL
        </label>
        <input
          required
          defaultValue={project.projectLink}
          type="url"
          id="projectLink"
          name="projectLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Live Link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="liveLink">
          Live Link URL
        </label>
        <input
          required
          defaultValue={project.liveLink}
          type="url"
          id="liveLink"
          name="liveLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="features">
          Features (comma separated)
        </label>
        <input
          required
          defaultValue={project.features.join(", ")}
          type="text"
          id="features"
          name="features"
          placeholder="Next.js, React, Web Development"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === "true"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="false"
              checked={isFeatured === "false"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            No
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Updating..." : "Update Project"}
      </button>
    </form>
  );
}
