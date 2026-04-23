import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import MarkdownArticle from "./MarkdownArticle";
import { formatBlogDate, getBlogPostBySlug } from "./blog";

export async function loader({ params }: { params: { slug?: string } }) {
  const slug = params.slug;

  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
}

function BlogArticle() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="article-shell space-y-8"
    >
      <div className="space-y-5">
        <Link to="/blog" className="page-eyebrow inline-flex hover:opacity-80">
          Back to blog
        </Link>
        <div className="space-y-4">
          <p className="page-eyebrow">
            {formatBlogDate(post.date)} · {post.readingTimeMinutes} min read
          </p>
          <h1 className="page-heading max-w-4xl">{post.title}</h1>
          <p className="page-copy max-w-3xl">{post.summary}</p>
        </div>
        {post.tags.length ? (
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <MarkdownArticle source={post.body} />
    </motion.article>
  );
}

export default BlogArticle;
