import { Outlet } from "react-router";

function ContentBox() {
  return (
    <main className="page-shell">
      <Outlet />
    </main>
  );
}

export default ContentBox;
