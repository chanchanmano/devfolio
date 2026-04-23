import { motion } from "framer-motion";
import { Link, useLoaderData, useLocation } from "react-router";
import {
  formatBlogDate,
  getAllBlogSummaries,
  canUseLocalBlogEditor,
  getBlogBasePath,
} from "./blog";

export async function loader({ request }: { request: Request }) {
  return {
    posts: getAllBlogSummaries(),
    editorEnabled: canUseLocalBlogEditor(request),
  };
}

function BlogIndex() {
  const { posts, editorEnabled } = useLoaderData<typeof loader>();
  const { pathname } = useLocation();
  const blogBasePath = getBlogBasePath(pathname);
  const readerMode = blogBasePath === "/writing";

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-8"
    >
      <div>
        <h2 className="page-heading max-w-4xl">Blog</h2>
      </div>

      {editorEnabled && !readerMode ? (
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
          <p className="page-copy max-w-2xl">
            Local only: write in Markdown and preview before publishing.
          </p>
          <Link to="/blog/editor" className="button-secondary whitespace-nowrap">
            Open editor
          </Link>
        </div>
      ) : null}

      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {posts.map((post) => (
          <article key={post.slug} className="py-8 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="space-y-3">
                <p className="page-eyebrow">
                  {formatBlogDate(post.date)} · {post.readingTimeMinutes} min read
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                  <Link
                    to={`${blogBasePath}/${post.slug}`}
                    className="hover:opacity-80"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="page-copy max-w-none">{post.summary}</p>
              </div>
              <Link
                to={`${blogBasePath}/${post.slug}`}
                className="button-secondary whitespace-nowrap"
              >
                Read article
              </Link>
            </div>

            {post.tags.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default BlogIndex;
