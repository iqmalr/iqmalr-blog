import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { formattedDate, sortPost } from "@/lib/utils";

const POST_PER_PAGE = 6;
interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}
export default async function Blog({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPost = sortPost(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPost.length / POST_PER_PAGE);
  const displayPost = sortedPost.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage,
  );
  return (
    <div className="lg:py10 container max-w-4xl py-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-blog text-4xl font-black">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev
          </p>
        </div>
      </div>
      <br className="mt-8" />
      {displayPost?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPost.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={formattedDate(date)}
                  title={title}
                  description={description} // Memberikan nilai default ""
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} />
    </div>
  );
}
