import { AnimatedPerson } from "@/components/ui/animated-person";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Metadata } from "next";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];
const technology = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* <TracingBeam> */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-x-4">
          <h1 className=" inline-block text-4xl font-black lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="flex min-w-48 max-w-48 flex-col gap-1">
          <AnimatedPerson items={people} />
          <h2 className="text-wrap break-words text-center text-2xl font-bold">
            Iqmal Riffai
          </h2>
          <p className="break-words text-center text-muted-foreground">
            Front-End Developer
          </p>
        </div>
        <p className="text-md text-wrap py-4 text-muted-foreground">
          Greetings! I'm Muhamad Iqmal Riffai, a Front End Developer who
          believes in the power of technology to create extraordinary user
          experiences. With expertise in web application development using
          platforms like Next.js, React, and Laravel, along with proficiency in
          backend development through Strapi, I am committed to delivering
          innovative and efficient solutions. As a graduate in Computer Science
          from the Universitas Teknologi Yogyakarta, I've embarked on various
          projects that blend technical skills with creative vision. Here on my
          blog website, I share documentation from my projects and write
          informative articles about technology, my experiences in the software
          development world, and the best practices I've learned along the way.
        </p>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col justify-center gap-8  ">
        <p className="text-center">iam good with</p>
      </div>
      <div className="mb-10 flex w-full flex-row items-center justify-center">
        <AnimatedTooltip items={technology} />
      </div>
      {/* </TracingBeam> */}
    </div>
  );
}
