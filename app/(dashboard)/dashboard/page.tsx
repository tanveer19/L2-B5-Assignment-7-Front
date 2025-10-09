import { getUserSession } from "../../../helpers/getUserSession";

export default async function DashboardHome() {
  const quote = "The secret of getting ahead is getting started. – Mark Twain";

  const session = await getUserSession();
  // console.log(session?.user.id);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name}!
      </h1>
      <p className="text-lg font-bold text-gray-800 mb-4">
        {session?.user?.email}!
      </p>
      <p className="text-lg text-gray-600 italic text-center">{quote}</p>
    </div>
  );
}
