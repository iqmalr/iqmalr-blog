import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0",
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only ">Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0",
                )}
              >
                <Icons.linkedIn className="h-4 w-4" />
                <span className="sr-only ">Linkedin</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
