import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh flex ">
      <Sidebar />

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
