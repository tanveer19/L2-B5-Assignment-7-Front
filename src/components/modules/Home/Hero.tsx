import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I’m <span className="text-blue-600">Tanveer</span> 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            A passionate developer building modern web apps with{" "}
            <span className="font-semibold">
              Next.js, React, and TypeScript
            </span>
            . Explore my projects and read my thoughts on software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="/blogs"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Read Blogs
            </Link>
          </div>
        </div>

        {/* Right Illustration / Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* <Image
            src="/hero-illustration.svg" // put an image in public/
            alt="Hero Illustration"
            width={450}
            height={450}
            className="w-full max-w-sm md:max-w-md"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
