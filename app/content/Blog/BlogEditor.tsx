import { motion } from "framer-motion";
import { useDeferredValue, useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "react-router";
import MarkdownArticle from "./MarkdownArticle";
import { BLOG_EDITOR_TEMPLATE, canUseLocalBlogEditor } from "./blog";

export async function loader({ request }: { request: Request }) {
  if (!canUseLocalBlogEditor(request)) {
    throw new Response("Not Found", { status: 404 });
  }

  return {
    template: BLOG_EDITOR_TEMPLATE,
  };
}

export async function action({ request }: { request: Request }) {
  if (!canUseLocalBlogEditor(request)) {
    throw new Response("Not Found", { status: 404 });
  }

  const formData = await request.formData();
  const source = String(formData.get("source") ?? "");
  const title = String(formData.get("title") ?? "");
  const summary = String(formData.get("summary") ?? "");
  const tags = String(formData.get("tags") ?? "");
  const { publishBlogPost } = await import("./blog.server");

  return publishBlogPost({
    source,
    title,
    summary,
    tags,
  });
}

function BlogEditor() {
  const { template } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const [mode, setMode] = useState<"write" | "preview">("write");
  const [source, setSource] = useState(template);
  const [showPublishForm, setShowPublishForm] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("");
  const previewSource = useDeferredValue(source);
  const isPublishing = fetcher.state !== "idle";

  useEffect(() => {
    if (fetcher.data?.ok) {
      setShowPublishForm(false);
      setTitle("");
      setSummary("");
      setTags("");
      setSource(template);
      setMode("write");
    }
  }, [fetcher.data, template]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <p className="page-eyebrow">Blog Editor</p>
        <h2 className="page-heading max-w-4xl">
          Write in Markdown, preview it, and publish a post locally.
        </h2>
        <p className="page-copy">
          The editor stays local-only. Publishing writes a Markdown file into
          the repo so the article is picked up by the blog routes.
        </p>
      </div>

      <div className="editor-shell">
        <div className="editor-toolbar">
          <div className="editor-tabs" role="tablist" aria-label="Editor mode">
            <button
              type="button"
              className={`editor-tab ${mode === "write" ? "is-active" : ""}`}
              onClick={() => setMode("write")}
            >
              Write
            </button>
            <button
              type="button"
              className={`editor-tab ${mode === "preview" ? "is-active" : ""}`}
              onClick={() => setMode("preview")}
            >
              Preview
            </button>
          </div>

          <div className="flex items-center gap-3">
            {fetcher.data?.ok ? (
              <a href={`/blog/${fetcher.data.slug}`} className="page-eyebrow hover:opacity-80">
                View published post
              </a>
            ) : null}
            <button
              type="button"
              className="button-secondary"
              onClick={() => setShowPublishForm((current) => !current)}
            >
              Publish
            </button>
          </div>
        </div>

        {showPublishForm ? (
          <fetcher.Form method="post" className="publish-panel">
            <input type="hidden" name="source" value={source} />
            <label className="space-y-2">
              <span className="metric-label">Title</span>
              <input
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="editor-input"
                placeholder="Article title"
              />
              {fetcher.data && !fetcher.data.ok && fetcher.data.fieldErrors.title ? (
                <span className="editor-error">{fetcher.data.fieldErrors.title}</span>
              ) : null}
            </label>
            <label className="space-y-2">
              <span className="metric-label">Summary</span>
              <textarea
                name="summary"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
                className="editor-input min-h-28 resize-y"
                placeholder="Short summary for the index and metadata"
              />
              {fetcher.data && !fetcher.data.ok && fetcher.data.fieldErrors.summary ? (
                <span className="editor-error">{fetcher.data.fieldErrors.summary}</span>
              ) : null}
            </label>
            <label className="space-y-2">
              <span className="metric-label">Tags</span>
              <input
                name="tags"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                className="editor-input"
                placeholder="Comma-separated tags"
              />
            </label>
            {fetcher.data && !fetcher.data.ok && fetcher.data.fieldErrors.source ? (
              <p className="editor-error">{fetcher.data.fieldErrors.source}</p>
            ) : null}
            {fetcher.data?.ok ? (
              <p className="text-sm text-[var(--muted)]">
                Published to <code>{fetcher.data.slug}.md</code>
              </p>
            ) : null}
            <div className="flex flex-wrap justify-end gap-3">
              <button
                type="button"
                className="button-secondary"
                onClick={() => setShowPublishForm(false)}
              >
                Cancel
              </button>
              <button type="submit" className="button-primary" disabled={isPublishing}>
                {isPublishing ? "Publishing..." : "Confirm publish"}
              </button>
            </div>
          </fetcher.Form>
        ) : null}

        <div className="editor-surface">
          {mode === "write" ? (
            <textarea
              value={source}
              onChange={(event) => setSource(event.target.value)}
              className="editor-textarea"
              spellCheck={false}
              aria-label="Markdown editor"
            />
          ) : (
            <div className="editor-preview">
              <MarkdownArticle source={previewSource} />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default BlogEditor;
