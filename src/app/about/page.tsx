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
export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};
export default async function AboutPage() {
  return (
    <>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block text-4xl font-black lg:text-5xl">
              About Me
            </h1>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="flex min-w-48 max-w-48 flex-col gap-2">
            <AnimatedTooltip items={people} />
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
            platforms like Next.js, React, and Laravel, along with proficiency
            in backend development through Strapi, I am committed to delivering
            innovative and efficient solutions. As a graduate in Computer
            Science from the Universitas Teknologi Yogyakarta, I've embarked on
            various projects that blend technical skills with creative vision.
            Here on my blog website, I share documentation from my projects and
            write informative articles about technology, my experiences in the
            software development world, and the best practices I've learned
            along the way.
          </p>
        </div>
      </div>
    </>
  );
}
