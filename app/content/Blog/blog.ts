export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  body: string;
  published: boolean;
  readingTimeMinutes: number;
  source: string;
};

export type BlogPostSummary = Omit<BlogPost, "body" | "source" | "published">;

export const BLOG_EDITOR_TEMPLATE = `# Start writing

Write the article body here in Markdown.

## Preview flow

- Use the Preview tab to see the rendered article.
- Use Publish when the body is ready.
- Title, summary, and tags are collected right before the file is saved.

\`\`\`ts
export function publish() {
  return "Keep the workflow lightweight.";
}
\`\`\`
`;

type FrontmatterValue = string | boolean | string[];

const rawPosts = import.meta.glob("./posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "");
}

function parseFrontmatterValue(value: string): FrontmatterValue {
  const trimmed = value.trim();

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  return stripQuotes(trimmed);
}

function parseFrontmatter(source: string): Record<string, FrontmatterValue> {
  const data: Record<string, FrontmatterValue> = {};
  const lines = source.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]?.trimEnd() ?? "";

    if (!line.trim()) {
      continue;
    }

    const blockMatch = /^([a-zA-Z0-9_-]+):\s*$/.exec(line);

    if (blockMatch) {
      const key = blockMatch[1];
      const items: string[] = [];

      for (index += 1; index < lines.length; index += 1) {
        const nextLine = lines[index] ?? "";

        if (/^\s*-\s+/.test(nextLine)) {
          items.push(stripQuotes(nextLine.replace(/^\s*-\s+/, "").trim()));
          continue;
        }

        if (!nextLine.trim()) {
          continue;
        }

        index -= 1;
        break;
      }

      data[key] = items;
      continue;
    }

    const inlineMatch = /^([a-zA-Z0-9_-]+):\s*(.+)$/.exec(line);

    if (!inlineMatch) {
      continue;
    }

    data[inlineMatch[1]] = parseFrontmatterValue(inlineMatch[2]);
  }

  return data;
}

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase() + segment.slice(1))
    .join(" ");
}

function pickString(value: FrontmatterValue | undefined, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function pickBoolean(value: FrontmatterValue | undefined, fallback = true) {
  return typeof value === "boolean" ? value : fallback;
}

function pickArray(value: FrontmatterValue | undefined) {
  return Array.isArray(value)
    ? value.map((item) => item.trim()).filter(Boolean)
    : [];
}

function parseDocumentSections(source: string) {
  const normalizedSource = source.replace(/\r\n/g, "\n");
  const frontmatterMatch = normalizedSource.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    return {
      frontmatter: {},
      body: normalizedSource.trim(),
    };
  }

  return {
    frontmatter: parseFrontmatter(frontmatterMatch[1]),
    body: frontmatterMatch[2].trim(),
  };
}

export function parseBlogDocument(source: string, slugFallback: string): BlogPost {
  const { frontmatter, body } = parseDocumentSections(source);
  const slug = pickString(frontmatter.slug, slugFallback);
  const title = pickString(frontmatter.title, humanizeSlug(slugFallback));
  const date = pickString(frontmatter.date, new Date().toISOString().slice(0, 10));
  const summary =
    pickString(frontmatter.summary) ||
    body.split(/\n{2,}/)[0]?.replace(/[#>*_`-]/g, "").trim() ||
    "Draft article.";
  const tags = pickArray(frontmatter.tags);
  const published = pickBoolean(frontmatter.published, true);
  const wordCount = body.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title,
    date,
    summary,
    tags,
    body,
    published,
    readingTimeMinutes: Math.max(1, Math.ceil(wordCount / 220)),
    source,
  };
}

function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort((left, right) => {
    const leftTime = Date.parse(left.date);
    const rightTime = Date.parse(right.date);

    if (Number.isNaN(leftTime) || Number.isNaN(rightTime)) {
      return right.title.localeCompare(left.title);
    }

    return rightTime - leftTime;
  });
}

const allPosts = sortPostsByDate(
  Object.entries(rawPosts).map(([path, source]) => {
    const slugFallback = path.split("/").at(-1)?.replace(/\.md$/, "") ?? "post";

    return parseBlogDocument(source, slugFallback);
  }),
);

export function getAllBlogPosts() {
  return allPosts.filter((post) => post.published);
}

export function getAllBlogSummaries(): BlogPostSummary[] {
  return getAllBlogPosts().map(({ body: _body, source: _source, published: _published, ...summary }) => summary);
}

export function getBlogPostBySlug(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug) ?? null;
}

export function formatBlogDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}

export function canUseLocalBlogEditor(request: Request) {
  const { hostname } = new URL(request.url);

  return import.meta.env.DEV || hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export function getBlogBasePath(pathname: string) {
  return pathname.startsWith("/writing") ? "/writing" : "/blog";
}
