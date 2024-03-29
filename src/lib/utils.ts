import { Post, posts } from "#site/content";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedDate(date: Date | string | number): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// export function sortPost(posts: Array<Post>) {
//   return posts.sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
//   );
// }

export function sortPost(post: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
