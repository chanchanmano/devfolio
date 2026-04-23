import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownArticleProps = {
  source: string;
};

function MarkdownArticle({ source }: MarkdownArticleProps) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href = "", children, ...props }) => {
            const external = /^https?:\/\//.test(href);

            return (
              <a
                href={href}
                {...props}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {source}
      </Markdown>
    </div>
  );
}

export default MarkdownArticle;
