import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetailsCard({
  project,
}: {
  project: IProject;
}) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      {/* Project title */}
      <h1 className="text-5xl font-bold mb-6">{project?.name}</h1>

      {/* Author info */}
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={
            project.author.picture ||
            "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
          }
          alt={project?.author?.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">
            {project.author.name}{" "}
            {project.author.isVerified && (
              <span className="inline-block ml-1 text-blue-500">✔</span>
            )}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(project.createdAt).toLocaleDateString()} • {project.views}{" "}
            views
          </p>
        </div>
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden mb-8">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      {/* Description */}
      <section className="prose prose-lg max-w-none mb-10">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </section>

      {/* Links */}
      <section className="mb-10 flex flex-wrap gap-4">
        {project.projectLink && (
          <Link
            href={project.projectLink}
            target="_blank"
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Code
          </Link>
        )}
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
          >
            Live Demo
          </Link>
        )}
      </section>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">Technologies Used:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
