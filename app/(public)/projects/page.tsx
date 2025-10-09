import ProjectCard from "../../../components/modules/Projects/ProjectCard";
import { IProject } from "../../../types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Next Project",
  description: "browse all Projects ",
};

const AllProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECTS"],
    },
  });
  const { data: projects } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl my-5">All Projects</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl">
        {projects.map((project: IProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
