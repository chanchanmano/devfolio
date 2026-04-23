import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { constants } from "node:fs";

type PublishInput = {
  source: string;
  title: string;
  summary: string;
  tags: string;
};

type PublishFieldErrors = {
  source?: string;
  title?: string;
  summary?: string;
};

type PublishResult =
  | {
      ok: true;
      slug: string;
      path: string;
    }
  | {
      ok: false;
      fieldErrors: PublishFieldErrors;
    };

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function quoteYaml(value: string) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

async function fileExists(filePath: string) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function createUniqueSlug(baseSlug: string, directory: string) {
  let attempt = baseSlug || "post";
  let counter = 2;

  while (await fileExists(path.join(directory, `${attempt}.md`))) {
    attempt = `${baseSlug || "post"}-${counter}`;
    counter += 1;
  }

  return attempt;
}

export async function publishBlogPost(input: PublishInput): Promise<PublishResult> {
  const source = input.source.trim();
  const title = input.title.trim();
  const summary = input.summary.trim();
  const tags = input.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const fieldErrors: PublishFieldErrors = {};

  if (!source) {
    fieldErrors.source = "Add article content before publishing.";
  }

  if (!title) {
    fieldErrors.title = "Title is required.";
  }

  if (!summary) {
    fieldErrors.summary = "Summary is required.";
  }

  if (fieldErrors.source || fieldErrors.title || fieldErrors.summary) {
    return {
      ok: false,
      fieldErrors,
    };
  }

  const postsDirectory = path.join(process.cwd(), "app", "content", "Blog", "posts");
  await mkdir(postsDirectory, { recursive: true });

  const baseSlug = slugify(title);
  const slug = await createUniqueSlug(baseSlug, postsDirectory);
  const date = new Date().toISOString().slice(0, 10);
  const tagsBlock = tags.length
    ? `tags:\n${tags.map((tag) => `  - ${quoteYaml(tag)}`).join("\n")}`
    : "tags: []";
  const fileContents = `---
title: ${quoteYaml(title)}
date: ${date}
summary: ${quoteYaml(summary)}
${tagsBlock}
published: true
slug: ${slug}
---

${source.trim()}
`;
  const filePath = path.join(postsDirectory, `${slug}.md`);

  await writeFile(filePath, fileContents, "utf8");

  return {
    ok: true,
    slug,
    path: filePath,
  };
}
