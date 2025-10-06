import ProjectDetailsCard from "@/components/modules/Projects/ProjectDetailsCard";
import { getProjectById } from "@/services/ProjectServices";
import { IProject } from "@/types";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
  const { data: projects } = await res.json();

  return projects.slice(0, 2).map((project: IProject) => ({
    projectId: String(project.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>; // Changed to Promise
}) => {
  const { projectId } = await params; // Added await

  const project = await getProjectById(projectId);

  return {
    title: project?.name,
    description: project?.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>; // Changed to Promise
}) => {
  const { projectId } = await params; // Added await
  const project = await getProjectById(projectId);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
