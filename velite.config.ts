import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const post = defineCollection({
  name: "Post",
  pattern: "blog/**/*/mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { post },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
