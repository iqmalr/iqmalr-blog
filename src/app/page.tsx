"use client";
import { posts } from "#site/content";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { buttonVariants } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { siteConfig } from "@/config/site";
import { cn, sortPost } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl   border border-transparent bg-primary-foreground  bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-dot-white/[0.2] "></div>
);

export default function Home() {
  const [ssrImage, setSsrImage] = useState<string | null>(null);

  useEffect(() => {
    // Memuat gambar SSR dari server
    const fetchSsrImage = async () => {
      try {
        const response = await fetch("/api/og/route?title=YourTitle");
        if (response.ok) {
          const blob = await response.blob();
          setSsrImage(URL.createObjectURL(blob)); // Tetapkan ssrImage dengan URL gambar
        } else {
          console.error("Failed to fetch SSR image:", response.status);
        }
      } catch (error) {
        console.error("Failed to fetch SSR image:", error);
      }
    };
    fetchSsrImage();

    // Membersihkan gambar SSR yang tidak digunakan lagi saat komponen unmount
    return () => {
      if (ssrImage) {
        URL.revokeObjectURL(ssrImage);
      }
    };
  }, []);
  const latestPost = sortPost(posts).slice(0, 4);
  return (
    // <>
    <TracingBeam>
      <section
        // style={{ scrollSnapType: "y", overflowY: "scroll" }}
        className=" h-dvh space-y-6 pb-8 pt-6 md:mt-10 md:pb-12 lg:*:py-32"
      >
        <div className="container flex flex-col gap-4 text-center ">
          <h1 className="text-balance text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m Iqmalr
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            Welcome to my blog. Built using tailwind, shacdn, velite, and Nextjs
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full transition-colors hover:bg-primary-foreground hover:text-primary dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground sm:w-fit",
              )}
            >
              Visit my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full transition-colors hover:border-primary hover:text-primary sm:w-fit",
              )}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
          {latestPost.map((post, index) => (
            <BentoGridItem
              slug={post.slug}
              header={<Skeleton />}
              key={index}
              title={post.title}
              date={post.date}
              description={post.description}
              className={`group/bento flex flex-col justify-between space-y-4 rounded-xl border border-zink bg-white p-4 shadow-input transition duration-200 hover:border-primary-foreground hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none ${
                (index === 0 && "md:col-span-2") ||
                (index === 1 && "md:col-span-1") ||
                (index === 2 && "md:col-span-1") ||
                (index === 3 && "md:col-span-2")
              }`}
            />
          ))}
        </BentoGrid>
      </section>
    </TracingBeam>
    // </>
  );
}

// <img
//   src={`http://localhost:3000/api/og?title=${post.title}`}
//   alt="SSR Image"
//   className="h-full min-h-[6rem] w-full  rounded-xl object-cover"
// />;
