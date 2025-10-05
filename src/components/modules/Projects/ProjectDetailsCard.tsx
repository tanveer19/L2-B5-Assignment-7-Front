import { IProject } from "@/types";
import Image from "next/image";

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
    <main className="max-w-4xl mx-auto py-30 px-4">
      <h1 className="text-5xl font-bold mb-6">{project?.name}</h1>

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

      {project.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <p>{project.description}</p>
      </article>
    </main>
  );
}
