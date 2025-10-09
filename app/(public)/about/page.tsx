import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Static JSON (SSG)
const aboutData = {
  name: "Tanveer Hossain Jony",
  email: "thjbd19@g.....com",
  phone: "+880 1234 567890",
  location: "Dhaka, Bangladesh",
  bio: "I am a passionate Fullstack Developer with experience in React, Next.js, Express, and Prisma. I enjoy building clean, responsive, and user-friendly web applications.",
  avatar: "/image/beard.png",
  linkedin: "https://www.linkedin.com/in/tanveer-hossain-jony/",
  github: "https://github.com/tanveer19",
  experience: [
    {
      title: "Intern – MERN Stack Developer (Remote)",
      company: "The Bengal Studio, India",
      duration: "Oct 2023 – Dec 2023",
      responsibilities: [
        "Implemented Firebase real-time database, enhancing user experience using React.",
        "Transformed static HTML components into dynamic React components with modern packages.",
        "Integrated Firebase SMS authentication for secure sign-in functionality.",
      ],
    },
    {
      title: "Executive – Web Maintenance (Onsite)",
      company: "Khan Brothers Group",
      duration: "Sept 2021 – July 2023",
      responsibilities: [
        "Created and managed AWS EC2 instances using Hestia Control Panel and Ubuntu.",
        "Utilized Amazon Web Services (AWS) such as Route 53, EC2, and Lightsail effectively.",
        "Maintained and updated 5 WordPress websites, resolving issues and implementing improvements.",
        "Supervised and coordinated a 3-member team ensuring efficient workflow.",
      ],
    },
  ],
  skills: {
    experienced: [
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "DaisyUI",
      "Git",
    ],
    comfortable: ["Node.js", "Express", "MongoDB", "JWT", "MUI", "Linux"],
    familiar: ["TypeScript", "Next.js", "Redux"],
    tools: [
      "AWS",
      "Vercel",
      "Firebase",
      "Netlify",
      "Hestia Control Panel",
      "cPanel",
    ],
  },
};

export const revalidate = false; // full SSG

export default function AboutPage() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-12 text-center text-sky-500">
        About Me
      </h1>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <Image
          src={aboutData.avatar}
          width={512}
          height={512}
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

      {/* Experience Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-sky-500 mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {aboutData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-sky-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-sky-500 mb-8 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(aboutData.skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-semibold mb-3 capitalize text-sky-600">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-200 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
