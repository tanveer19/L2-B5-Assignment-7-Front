import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Hardcoded static JSON (SSG)
const aboutData = {
  name: "Tanveer Hossain Jony",
  email: "tanveer@example.com",
  phone: "+880 1234 567890",
  location: "Dhaka, Bangladesh",
  bio: "I’m a passionate Frontend Developer with experience in React, Next.js, Express, and Prisma. I enjoy building clean, responsive, and user-friendly web applications.",
  avatar: "/image/beard.png",
  linkedin: "https://www.linkedin.com/in/tanveer-hossain-jony/",
  github: "https://github.com/tanveer19",
};

export const revalidate = false; // ensures full SSG

export default function AboutPage() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-12 text-center text-sky-500">
        About Me
      </h1>

      {/* Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <Image
          src={aboutData.avatar}
          alt="Profile Picture"
          className="w-36 h-36 rounded-full border-4 border-sky-500 shadow-md"
        />

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{aboutData.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {aboutData.bio}
          </p>

          {/* Contact Info */}
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-sky-500" />
              <span>{aboutData.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-sky-500" />
              <span>{aboutData.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-sky-500" />
              <span>{aboutData.location}</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href={aboutData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-colors font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
