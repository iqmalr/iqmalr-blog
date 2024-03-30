import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

import { Icons } from "./icons";

export default function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:m.iqmal.riffai@gmail.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6 transition-colors hover:text-primary" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <Icons.linkedIn className="h-6 w-6 transition-colors hover:text-primary " />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
            <span className="sr-only">Github</span>
            <Icons.gitHub className="h-6 w-6 transition-colors hover:text-primary " />
          </a>
        </div>
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
        <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
        </a>
      </div>
    </footer>
  );
}
