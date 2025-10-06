import EditProjectForm from "@/components/modules/Projects/EditProjectForm";
import { IProject } from "@/types";

interface PageProps {
  params: Promise<{ projectId: string }>; // Changed to Promise
}

async function getProject(projectId: string): Promise<IProject> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("project not found");
  return res.json();
}

export default async function EditProjectPage({ params }: PageProps) {
  let project: IProject | null = null;

  const { projectId } = await params; // Added await

  try {
    project = await getProject(projectId);
  } catch {
    return <p className="text-red-500 text-center mt-10">project not found</p>;
  }

  return <EditProjectForm project={project} />;
}
