import { Outlet } from "react-router";
import CustomNavbar from "../landing/CustomNavbar";

const BLOG_READER_SECTIONS = [
  {
    text: "blog",
    link: "/writing",
  },
];

export default function BlogReaderLayout() {
  return (
    <div className="app-shell">
      <div className="page-panel">
        <CustomNavbar sections={BLOG_READER_SECTIONS} />
        <main className="blog-reader-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
